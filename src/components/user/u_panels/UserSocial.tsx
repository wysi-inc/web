import type { Social } from "@/src/models/User";

type Socials = { [key in Social]: { icon: JSX.Element, bg: string, url: string } };
function UserSocial(p: { social: Social, username: string, user_id: number, editable?: boolean }) {

    const socials_data: Socials = {
        "instagram": {
            icon: <i class="fa-brands fa-instagram" />,
            bg: "bg-gradient-to-br from-[#7738fa] via-[#f80d68] to-[#ff7a00]",
            url: `https://www.instagram.com/${p.username}`,
        },
        "twitch": {
            icon: <i class="fa-brands fa-twitch" />,
            bg: "bg-[#6441a5]",
            url: `https://twitch.tv/${p.username}`,
        },
        "youtube": {
            icon: <i class="fa-brands fa-youtube" />,
            bg: "bg-[#ff0000]",
            url: `https://www.youtube.com/${p.username}`,
        },
        "github": {
            icon: <i class="fa-brands fa-github" />,
            bg: "bg-[#000000]",
            url: `https://github.com/${p.username}`
        },
        "gitlab": {
            icon: <i class="text-[#e95328] fa-brands fa-gitlab" />,
            bg: "bg-[#151321]",
            url: `https://gitlab.com/${p.username}`
        },
        "pinterest": {
            icon: <i class="fa-brands fa-pinterest" />,
            bg: "bg-[#e20a1f]",
            url: `https://www.pinterest.com/${p.username}`
        },
        "tiktok": {
            icon: <i class="fa-brands fa-tiktok" />,
            bg: "bg-[#000000]",
            url: `https://tiktok.com/@${p.username}`,
        },
    };

    const social = socials_data[p.social];

    if (!social) return <>no</>;

    return (
        <button class={`p-1 px-2 flex text-white flex-row gap-2 text-sm items-center rounded-full ${social.bg}`} type="button" hx-target="this" hx-swap="outerHTML">
            <a target="_blank" class="hover:underline underline-offset-1 flex flex-row gap-2 items-center" href={social.url}>
                {social.icon}
                <span>{p.username}</span>
            </a>
            {p.editable ?
                <a class="bg-white hover:bg-opacity-30 bg-opacity-0 text-xs rounded-full size-4 flex items-center justify-center" hx-delete={`/users/${p.user_id}/socials/delete/${p.social}`} hx-trigger="click" hx-target>
                    <i class="fa-solid fa-xmark" />
                </a> : <></>
            }
        </button>
    );
}

export default UserSocial;
