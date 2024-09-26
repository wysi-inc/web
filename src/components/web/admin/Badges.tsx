import { User } from "@/src/models/User";
import Badge, { BADGES } from "../../user/Badge";
import { CopyText } from "./Utils";
import Link from "../Link";

async function Badges() {
    const user_badges = await User.find({ wysi_badges: { $exists: true, $type: 'array', $ne: [] } });
    return (
        <div class="flex flex-col gap-4">
            <form class="group flex flex-row flex-wrap items-center gap-2" hx-put={`/admin/badges`} hx-target="#badges_notif" hx-swap="afterbegin">
                <fieldset class="peer peer join rounded-full group-disabled:hidden" id="socials_fieldset">
                    <select required class="join-item select select-bordered select-sm rounded-s-full" name="badge">
                        <option disabled selected>Choose</option>
                        {Object.entries(BADGES).map(([k, v]: [any, any]) => <option value={k}>{v.long}</option>)}
                    </select>
                    <label class="input input-sm join-item input-bordered flex items-center gap-2">
                        ID: <input required name="id" type="text" class="grow" />
                    </label>
                </fieldset>
                <button class="btn btn-circle btn-primary btn-sm" type="submit">
                    <i class="fa-solid fa-plus" />
                </button>
            </form>
            <div id="badges_notif" class="flex flex-col gap-2" />
            <table class="table-zebra table table-xs">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Username</th>
                        <th>Badges</th>
                    </tr>
                </thead>
                <tbody>
                    {user_badges.map(u =>
                        <tr>
                            <th><CopyText text={u.user_id} /></th>
                            <td>
                                <Link url={`/users/${u.user_id}`} css="flex flex-row items-center gap-1">
                                    <img loading="lazy" src={`https://a.ppy.sh/${u.user_id}?${u.user_id}.png`} class="size-6 rounded-lg" alt="avatar" />
                                    <span>{u.username}</span>
                                </Link>
                            </td>
                            <td>
                                <form class="sortable flex flex-row flex-wrap gap-1" hx-post={`/admin/badges/${u.user_id}/sort`} hx-trigger="end" hx-swap="none">
                                    {u.wysi_badges?.map(b => <Badge user_id={u.user_id} badge_id={b} editable={true} />)}
                                </form>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default Badges;
