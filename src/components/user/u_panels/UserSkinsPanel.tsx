import { UserModel } from "@/src/models/User";
import type { Mode } from "@/src/types/osu";
import type { Skin } from "@/src/types/users";
import ModeIcon from "../../beatmap/ModeIcon";

async function UserSkinsPanel(p: { user_id: number, logged_id?: number }) {

    const editable = p.user_id === p.logged_id;

    const user = await UserModel.findOne({ user_id: p.user_id });
    if (!user) return <>this user doesn't exist</>;
    if (!user.skins && !editable) return <>This user doesn't have skins</>;

    return (<>
        <div class="flex flex-col gap-4">
            {editable ? <>
                <form class="group flex flex-row flex-wrap items-center gap-2" hx-put={`/users/${p.user_id}/skins/submit`} hx-target="#skins_list" hx-swap="beforeend">
                    <span class="htmx-indicator loading loading-spinner" />
                    <fieldset class="peer peer join rounded-full disabled:hidden group-disabled:hidden" id="skins_fieldset" disabled>
                        <label class="input input-sm join-item input-bordered flex items-center gap-2">
                            ID: <input required name="skin_id" type="text" class="grow" placeholder="1234?v=0" />
                        </label>
                    </fieldset>
                    <button class="btn btn-circle btn-primary btn-sm peer-disabled:hidden" type="submit">
                        <i class="fa-solid fa-plus" />
                    </button>
                    <button class="btn btn-circle btn-ghost btn-sm peer-enabled:hidden" onclick="document.querySelector('#skins_fieldset').disabled = false" type="button">
                        <i class="fa-solid fa-plus" />
                    </button>
                    <button class="btn btn-circle btn-ghost btn-sm peer-disabled:hidden" onclick="document.querySelector('#skins_fieldset').disabled = true" type="button">
                        <i class="fa-solid fa-xmark" />
                    </button>
                    <div class="alert alert-info flex flex-row items-center gap-2 rounded-lg px-2 py-1 peer-disabled:hidden">
                        <i class="fa-solid fa-triangle-exclamation" />
                        <span>
                            <b>MAX 2 SKINS PER USER!</b><br />
                            To get the skin id go to <a href="skins.osuck.net" target="_blank">skins.osuck.net</a>, when you open a skin page you will see a
                            url like <kbd class="kbd kbd-sm text-white">https://skins.osuck.net/skins/2175?v=1</kbd> grab only the last part <kbd class="kbd kbd-sm text-white">2175?v=1</kbd> that's the id
                        </span>
                    </div>
                </form>
            </> : null
            }
            <form id="skins_list" class={`${editable ? "sortable" : ""} grid grid-cols-1 flex-wrap gap-4 empty:hidden md:grid-cols-2`} hx-post={`/users/${user.user_id}/skins/sort`} hx-trigger="end" hx-swap="none">
                {user.skins.map((s, i) => <SkinCard user_id={p.user_id} skin_id={s} index={i} editable={editable} />)}
            </form>
            <script src={`/public/js/scroll.js?v=${Date.now()}`} />
        </div>
    </>);
}


export async function SkinCard(p: { user_id: number, skin_id: string, editable: boolean, index: number }) {
    const url = new URL("https://osuck.link/api/skins");
    url.searchParams.append('key', process.env.OSUCK_API_KEY);
    url.searchParams.append('skin', `https://osuck.link/s-${p.skin_id}`);
    const res = await fetch(url.toString(), { method: "POST" });
    if (!res.ok) return (<span>{p.skin_id.toString()}</span>);
    const data = await res.json() as any;
    if (data.status !== "success") return (<span>{p.skin_id.toString()}</span>);
    const skin: Skin = data.message;
    return (<>
        <div class="flex flex-col rounded-lg bg-neutral" hx-target="this" hx-swap="delete">
            <div class="flex flex-row items-center gap-2 px-2 py-1">
                <a href={skin.link_to_skin} target="_blank" class="flex grow flex-row items-center justify-between">
                    <div class="flex flex-row items-center gap-2">
                        <i class="fa-solid fa-arrow-up-right-from-square" />
                        <h4>{skin.name}</h4>
                    </div>
                    <div class="flex flex-row gap-1">
                        {skin.modes.map(mode => <ModeIcon mode={mode as Mode} size={18} css="fill-neutral-content" />)}
                    </div>
                </a>
                {p.editable ?
                    <button class="btn btn-circle btn-ghost btn-xs tooltip" data-tip="Delete skin" hx-trigger="click" hx-delete={`/users/${p.user_id}/skins/delete/${p.skin_id}`}>
                        <i class="fa-solid fa-xmark" />
                    </button> : null
                }
            </div>
            {p.editable ?
                <input type="hidden" value={p.skin_id} name="skins" />
                : null
            }
            <div class="carousel carousel-center rounded-lg bg-base-300 p-4">
                {skin.screenshots.map((img, j) => (
                    <div id={`slide-${p.index}-${j}`} class="carousel-item relative grow rounded-lg p-2">
                        <img loading="lazy" src={img.small} class="aspect-video h-52 rounded-lg" />
                        <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            {j - 1 >= 0 ?
                                <button data-to={`#slide-${p.index}-${j - 1}`} class="slide-btn btn btn-circle btn-sm bg-opacity-40">
                                    ❮
                                </button> : <span />
                            }
                            { //@ts-ignore
                                j + 1 < skin.screenshots.length ?
                                    <button data-to={`#slide-${p.index}-${j + 1}`} class="slide-btn btn btn-circle btn-sm bg-opacity-40">
                                        ❯
                                    </button> : <span />
                            }
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </>);
}

export default UserSkinsPanel;
