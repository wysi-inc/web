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

function Badge(p: { badge_id: number; editable?: boolean; user_id?: number }) {
    const badge = BADGES[p.badge_id];
    if (!badge) return <>xd</>;
    return (
        <div
            class={`${badge.fg} ${badge.bg} badge tooltip flex cursor-default flex-row gap-1 border-none`}
            hx-target="this"
            hx-swap="outerHTML"
            data-tip={badge.long}
            draggable={true}
        >
            <span class="flex flex-row items-center gap-2">{badge.icon || <span>{badge.short.toUpperCase()}</span>}</span>
            {p.editable ? (
                <>
                    <input type="hidden" value={`${p.badge_id}`} name="badges" />
                    <a
                        class="flex size-4 items-center justify-center rounded-full bg-white bg-opacity-0 text-xs hover:bg-opacity-30"
                        hx-delete={`/admin/badges/${p.user_id}/${p.badge_id}`}
                        hx-trigger="click"
                    >
                        <i class="fa-solid fa-xmark" />
                    </a>
                </>
            ) : null}
        </div>
    );
}

export default Badge;
