export const BADGES: any = {
    1: {
        short: "dev",
        long: "Developer",
        fg: `text-[#B9314F]`,
        bg: "bg-[#131615]",
    },
    2: {
        icon: <i class="fa-solid fa-heart" />,
        short: "ws",
        long: "WYSI Supporter",
        fg: `text-[#ff7ac6]`,
        bg: "bg-[#faf1df]",
    },
    3: {
        short: "wmt",
        long: "WYSI Moderation Team",
        fg: `text-[#121212]`,
        bg: "bg-[#F1DB4B]",
    },
    4: {
        short: "wdt",
        long: "WYSI Design Team",
        fg: `text-[#f7f7f7]`,
        bg: "bg-[#ff71b8]",
    },
    5: {
        short: "wdc",
        long: "WYSI Development Contributor",
        fg: `text-white`,
        bg: "bg-[#f80d68]",
    },
    6: {
        short: "wtc",
        long: "WYSI Translations Contributor",
        fg: `text-white`,
        bg: "bg-[#2892D7]",
    },
};

function Badge(p: { badge_id: number, editable: boolean, user_id: number }) {

    const badge = BADGES[p.badge_id];
    if (!badge) return <>no</>;

    return (
        <button class={`badge cursor-default border-none tooltip flex flex-row gap-1 ${badge.fg} ${badge.bg}`}
            type="button" hx-target="this" hx-swap="outerHTML" data-tip={badge.long}>
            <span class="flex flex-row gap-2 items-center">
                {badge.icon || <span>{badge.short.toUpperCase()}</span>}
            </span>
            {p.editable ?
                <a class="bg-white hover:bg-opacity-30 bg-opacity-0 text-xs rounded-full size-4 flex items-center justify-center"
                    hx-delete={`/admin/badges/${p.user_id}/${p.badge_id}`} hx-trigger="click">
                    <i class="fa-solid fa-xmark" />
                </a> : <></>
            }
        </button>
    );
}

export default Badge;
