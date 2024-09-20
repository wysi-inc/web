import { User } from "@/src/models/User";
import Badge, { BADGES, WYSI_BADGES } from "../../user/Badge";

async function Badges() {

    const user_badges = await User.find({ wysi_badges: { $exists: true, $type: 'array', $ne: [] } });

    return (<div class="flex flex-col gap-4">
        <form class="group flex flex-row flex-wrap gap-2 items-center" hx-put={`/admin/badges`} hx-target="#badges_notif" hx-swap="afterbegin">
            <fieldset class="peer rounded-full peer join group-disabled:hidden" id="socials_fieldset">
                <select required class="rounded-s-full join-item select select-bordered select-sm" name="badge">
                    <option disabled selected>Choose</option>
                    {WYSI_BADGES.map(s => <option value={s}>{BADGES[s]?.long}</option>)}
                </select>
                <label class="join-item input input-sm input-bordered flex items-center gap-2">
                    ID: <input required name="id" type="number" class="grow" />
                </label>
            </fieldset>
            <button class="btn btn-sm btn-circle btn-primary" type="submit">
                <i class="fa-solid fa-plus" />
            </button>
        </form>
        <div id="badges_notif" class="flex flex-col gap-2" />
        <table class="table table-xs">
            <tr>
                <th>ID</th>
                <th>Username</th>
                <th>Badges</th>
            </tr>
            {user_badges.map(user =>
                <tr class="hover">
                    <th>
                        {user.user_id}
                    </th>
                    <td>
                        <div class="flex flex-row gap-1 items-center">
                            <img loading="lazy" src={`https://a.ppy.sh/${user.user_id}?${user.user_id}.png`} class="size-6 rounded-lg" alt="avatar" />
                            <span>{user.username}</span>
                        </div>
                    </td>
                    <td>
                        <div class="flex flex-row flex-wrap gap-1">
                            {user.wysi_badges?.map(b => <Badge user_id={user.user_id} badge={b} editable={true} />)}
                        </div>
                    </td>
                </tr>
            )}
        </table>
    </div>);
}

export default Badges;
