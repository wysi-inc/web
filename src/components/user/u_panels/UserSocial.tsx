import type { UserSocialType } from "@/src/models/User";

export const SOCIALS = [
    "github", "gitlab", "twitch", "instagram", "youtube", "tiktok", "pinterest",
    "snapchat", "reddit", "linkedin", "roblox", "microsoft", "soundcloud",
    "spotify", "facebook", "paypal", "supercell", "kick", "kofi", "steam", "riot",
    "epic", "anilist", "playstation", "linktree", "discord", "twitter"
]

function UserSocial(p: { social: UserSocialType, user_id: number, editable?: boolean }) {

    const socials_data = {
        "instagram": {
            icon: <i class="fa-brands fa-instagram" />,
            bg: "bg-gradient-to-br from-[#7738fa] via-[#f80d68] to-[#ff7a00]",
            url: `https://www.instagram.com/${p.social.username}`,
        },
        "twitch": {
            icon: <i class="fa-brands fa-twitch" />,
            bg: "bg-[#6441a5]",
            url: `https://twitch.tv/${p.social.username}`,
        },
        "youtube": {
            icon: <i class="fa-brands fa-youtube" />,
            bg: "bg-[#ff0000]",
            url: `https://www.youtube.com/${p.social.username}`,
        },
        "github": {
            icon: <i class="fa-brands fa-github" />,
            bg: "bg-[#000000]",
            url: `https://github.com/${p.social.username}`
        },
        "gitlab": {
            icon: <i class="text-[#e95328] fa-brands fa-gitlab" />,
            bg: "bg-[#151321]",
            url: `https://gitlab.com/${p.social.username}`
        },
        "pinterest": {
            icon: <i class="fa-brands fa-pinterest" />,
            bg: "bg-[#e20a1f]",
            url: `https://www.pinterest.com/${p.social.username}`
        },
        "tiktok": {
            icon: <i class="fa-brands fa-tiktok" />,
            bg: "bg-[#000000]",
            url: `https://tiktok.com/@${p.social.username}`,
        },
        "twitter": {
            icon: <i class="fa-brands fa-twitter" />,
            bg: "bg-[#1DA1F2]",
            url: `https://twitter.com/${p.social.username}`
        },
        "discord": {
            icon: <i class="fa-brands fa-discord" />,
            bg: "bg-[#5865F2]",
        },
        "snapchat": {
            icon: <i class="fa-brands fa-snapchat" />,
            bg: "bg-[#fffc00]",
            url: `https://www.snapchat.com/add/${p.social.username}`,
            black: true,
        },
        "reddit": {
            icon: <i class="fa-brands fa-reddit-alien" />,
            bg: "bg-[#cc3700]",
            url: `https://reddit.com/user/${p.social.username}`
        },
        "roblox": {
            icon: <img loading="lazy" src="/public/img/socials/roblox.svg" class="size-4" alt="ico" />,
            bg: "bg-[#86949f]",
        },
        "microsoft": {
            icon: <i class="fa-brands fa-xbox" />,
            bg: "bg-[#107c10]",
        },
        "linkedin": {
            icon: <i class="fa-brands fa-linkedin" />,
            bg: "bg-[#0866c2]",
            url: `https://www.linkedin.com/in/${p.social.username}`
        },
        "soundcloud": {
            icon: <i class="fa-brands fa-soundcloud" />,
            bg: "bg-[#cc4a00]",
            url: `https://soundcloud.com/${p.social.username}`,
        },
        "spotify": {
            icon: <i class="fa-brands fa-spotify" />,
            bg: "bg-[#1ed760]",
        },
        "facebook": {
            icon: <i class="fa-brands fa-facebook" />,
            bg: "bg-[#0866ff]",
        },
        "paypal": {
            icon: <i class="fa-brands fa-paypal" />,
            bg: "bg-gradient-to-br from-[#001862] via-[#002a7d] to-[#0094d4]",
            url: `https://www.paypal.com/paypalme/${p.social.username}`
        },
        "supercell": {
            icon: <img loading="lazy" src="/public/img/socials/supercell.svg" class="size-4" alt="ico" />,
            bg: "bg-[#105ab5]",
        },
        "kick": {
            icon: <img loading="lazy" src="/public/img/socials/kick.svg" class="size-4" alt="ico" />,
            bg: "bg-[#52fa17]",
            url: `https://kick.com/${p.social.username}`,
            black: true
        },
        "kofi": {
            icon: <img loading="lazy" src="/public/img/socials/kofi.svg" class="size-4" alt="ico" />,
            bg: "bg-[#00AFF1]",
            url: `https://ko-fi.com/${p.social.username}`,
        },
        "steam": {
            icon: <i class="fa-brands fa-steam" />,
            bg: "bg-[#0e1a32]",
            url: `https://steamcommunity.com/id/${p.social.username}`
        },
        "riot": {
            icon: <img loading="lazy" src="/public/img/socials/riot.svg" class="size-4" alt="ico" />,
            bg: "bg-[#eb0029]",
        },
        "epic": {
            icon: <img loading="lazy" src="/public/img/socials/epic.svg" class="size-4" alt="ico" />,
            bg: "bg-[#000000]",
        },
        "anilist": {
            icon: <img loading="lazy" src="/public/img/socials/anilist.svg" class="size-4" alt="ico" />,
            bg: "bg-[#242434]",
            url: `https://anilist.co/user/${p.social.username}`
        },
        "playstation": {
            icon: <i class="fa-brands fa-playstation" />,
            bg: "bg-[#003087]",
        },
        "linktree": {
            icon: <img loading="lazy" src="/public/img/socials/linktree.svg" class="size-4" alt="ico" />,
            bg: "bg-[#43e660]",
            url: `https://linktr.ee/${p.social.username}`,
            black: true
        }
    };

    const social = (socials_data as any)[p.social.platform];

    if (!social) return <>no</>;

    return (
        <button class={`p-1 px-2 flex ${social.black ? "text-black" : "text-white"} tooltip flex-row gap-2 text-sm items-center rounded-full ${social.bg}`}
            type="button" hx-target="this" hx-swap="outerHTML" data-tip={p.social.platform}>
            {social.url ?
                <a target="_blank" class="flex flex-row gap-2 items-center" href={social.url}>
                    {social.icon}
                    <span>{p.social.username}</span>
                </a> :
                <span class="cursor-default flex flex-row gap-2 items-center">
                    {social.icon}
                    <span>{p.social.username}</span>
                </span>}
            {p.editable ? <>
                <input type="hidden" value={`${p.social.platform}`} name='platforms' />
                <a class="bg-white hover:bg-opacity-30 bg-opacity-0 text-xs rounded-full size-4 flex items-center justify-center"
                    hx-delete={`/users/${p.user_id}/socials/delete/${p.social.platform}`} hx-trigger="click" hx-target>
                    <i class="fa-solid fa-xmark" />
                </a>
            </> : <></>
            }
        </button>
    );
}

export default UserSocial;
