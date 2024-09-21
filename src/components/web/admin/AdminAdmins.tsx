import { User } from "@/src/models/User";
import { ROLES } from "@/src/routes/admin";
import type { UserCookie } from "@/src/types/users";
import Link from "../Link";
import { CopyText } from "./Utils";

async function AdminAdmins(p: {
    user: UserCookie;
}) {

    const sudo = await User.find({ role: { $in: ["owner", "admin"] } });
    if (!sudo) return <>No admins found!</>;

    return (<div class="flex flex-col gap-2">
        {p.user.role === "owner" ? <>
            <form class="group flex flex-row flex-wrap gap-2 items-center" hx-put={`/admin/roles`} hx-target="#roles_notify" hx-swap="afterbegin">
                <fieldset class="peer rounded-full peer join group-disabled:hidden" id="socials_fieldset">
                    <select required class="rounded-s-full join-item select select-bordered select-sm" name="role">
                        <option disabled selected>Choose</option>
                        {ROLES.map(r => <option value={r}>{r}</option>)}
                    </select>
                    <label class="join-item input input-sm input-bordered flex items-center gap-2">
                        ID: <input required name="id" type="number" class="grow" />
                    </label>
                </fieldset>
                <button class="btn btn-sm btn-circle btn-primary" type="submit">
                    <i class="fa-solid fa-plus" />
                </button>
            </form>
            <div class="flex flex-col gap-2" id="roles_notify" />
        </> : <></>}
        <table class="table table-zebra table-xs">
            <tr>
                <th>ID</th>
                <th>Username</th>
                <th>Role</th>
                <th></th>
            </tr>
            {sudo.map(u => (
                <tr class="hover" id={`role-${u.user_id}`}>
                    <td><CopyText text={u.user_id} /></td>
                    <td>
                        <Link url={`/users/${u.user_id}`} css="flex flex-row gap-1 items-center">
                            <img loading="lazy" src={`https://a.ppy.sh/${u.user_id}?${u.user_id}.png`} class="size-6 rounded-lg" alt="avatar" />
                            <span>{u.username}</span>
                        </Link>
                    </td>
                    <td>{u.role}</td>
                    {p.user.role === "owner" ?
                        <td>
                            {u.role !== "owner" ?
                                <button class="btn btn-error btn-xs btn-square" hx-delete={`/admin/roles/${u.user_id}`} hx-swap="delete" hx-target={`#role-${u.user_id}`}>
                                    <i class="fa-regular fa-trash-can" />
                                </button> : <></>
                            }
                        </td> : <></>
                    }
                </tr>
            ))}
        </table>
    </div>);
}

export default AdminAdmins;
