import type { UserSocialType } from "@/src/models/User";

export const SOCIALS = [
    "github", "gitlab", "twitch", "instagram", "youtube", "tiktok", "pinterest",
    "snapchat", "reddit", "linkedin", "roblox", "microsoft", "soundcloud",
    "spotify", "facebook", "paypal", "supercell", "kick", "kofi", "steam", "riot",
    "epic", "anilist", "playstation", "linktree", "discord", "twitter", "uber"
]

const socials_data: {
    [key: string]: {
        icon: JSX.Element;
        bg: string;
        url?: (u: string) => string;
        black?: boolean;
    }
} = {
    "instagram": {
        icon: <i class="fa-brands fa-instagram" />,
        bg: "bg-gradient-to-br from-[#7738fa] via-[#f80d68] to-[#ff7a00]",
        url: (u) => `https://www.instagram.com/${u}`,
    },
    "twitch": {
        icon: <i class="fa-brands fa-twitch" />,
        bg: "bg-[#6441a5]",
        url: (u) => `https://twitch.tv/${u}`,
    },
    "youtube": {
        icon: <i class="fa-brands fa-youtube" />,
        bg: "bg-[#ff0000]",
        url: (u) => `https://www.youtube.com/${u}`,
    },
    "github": {
        icon: <i class="fa-brands fa-github" />,
        bg: "bg-[#000000]",
        url: (u) => `https://github.com/${u}`
    },
    "gitlab": {
        icon: <i class="text-[#e95328] fa-brands fa-gitlab" />,
        bg: "bg-[#151321]",
        url: (u) => `https://gitlab.com/${u}`
    },
    "pinterest": {
        icon: <i class="fa-brands fa-pinterest" />,
        bg: "bg-[#e20a1f]",
        url: (u) => `https://www.pinterest.com/${u}`
    },
    "tiktok": {
        icon: <i class="fa-brands fa-tiktok" />,
        bg: "bg-[#000000]",
        url: (u) => `https://tiktok.com/@${u}`,
    },
    "twitter": {
        icon: <i class="fa-brands fa-twitter" />,
        bg: "bg-[#1DA1F2]",
        url: (u) => `https://twitter.com/${u}`
    },
    "discord": {
        icon: <i class="fa-brands fa-discord" />,
        bg: "bg-[#5865F2]",
    },
    "snapchat": {
        icon: <i class="fa-brands fa-snapchat" />,
        bg: "bg-[#fffc00]",
        url: (u) => `https://www.snapchat.com/add/${u}`,
        black: true,
    },
    "reddit": {
        icon: <i class="fa-brands fa-reddit-alien" />,
        bg: "bg-[#cc3700]",
        url: (u) => `https://reddit.com/user/${u}`
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
        url: (u) => `https://www.linkedin.com/in/${u}`
    },
    "soundcloud": {
        icon: <i class="fa-brands fa-soundcloud" />,
        bg: "bg-[#cc4a00]",
        url: (u) => `https://soundcloud.com/${u}`,
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
        url: (u) => `https://www.paypal.com/paypalme/${u}`
    },
    "supercell": {
        icon: <img loading="lazy" src="/public/img/socials/supercell.svg" class="size-4" alt="ico" />,
        bg: "bg-[#105ab5]",
    },
    "kick": {
        icon: <img loading="lazy" src="/public/img/socials/kick.svg" class="size-4" alt="ico" />,
        bg: "bg-[#52fa17]",
        url: (u) => `https://kick.com/${u}`,
        black: true
    },
    "kofi": {
        icon: <img loading="lazy" src="/public/img/socials/kofi.svg" class="size-4" alt="ico" />,
        bg: "bg-[#00AFF1]",
        url: (u) => `https://ko-fi.com/${u}`,
    },
    "steam": {
        icon: <i class="fa-brands fa-steam" />,
        bg: "bg-[#0e1a32]",
        url: (u) => `https://steamcommunity.com/id/${u}`
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
        url: (u) => `https://anilist.co/user/${u}`
    },
    "playstation": {
        icon: <i class="fa-brands fa-playstation" />,
        bg: "bg-[#003087]",
    },
    "linktree": {
        icon: <img loading="lazy" src="/public/img/socials/linktree.svg" class="size-4" alt="ico" />,
        bg: "bg-[#43e660]",
        url: (u) => `https://linktr.ee/${u}`,
        black: true
    },
    "uber": {
        icon: <i class="fa-brands fa-uber" />,
        bg: "bg-[#3AA76D]",
        black: true
    },
};

function UserSocial(p: { social: UserSocialType, user_id: number, editable?: boolean }) {

    const social = (socials_data as any)[p.social.platform];

    if (!social) return (<></>);

    return (
        <button class={`p-1 px-2 flex ${social.black ? "text-black" : "text-white"} tooltip flex-row gap-2 text-sm items-center rounded-full ${social.bg}`}
            type="button" hx-target="this" hx-swap="outerHTML" data-tip={p.social.platform}>
            {social.url ?
                <a target="_blank" class="flex flex-row gap-2 items-center" href={social.url(p.social.username)}>
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
            </> : null
            }
        </button>
    );
}

export default UserSocial;
