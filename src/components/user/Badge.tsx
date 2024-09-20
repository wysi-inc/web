import type { BadgeType } from "@/src/models/User";

export const WYSI_BADGES = ["dev", "<3", "wmt", "wdc", "wtc"];

function Badge(p: { badge: BadgeType, editable: boolean, user_id: number }) {

    const BADGES: any = {
        "dev": {
            short: "dev",
            long: "Developer",
            fg: `text-[#B9314F]`,
            bg: "bg-[#131615]",
        },
        "<3": {
            icon: <i class="fa-solid fa-heart" />,
            short: "<3",
            long: "Wysi Supporter",
            fg: `text-[#ff7ac6]`,
            bg: "bg-[#faf1df]",
        },
        "wmt": {
            short: "wmt",
            long: "WYSI Moderation Team",
            fg: `text-[#121212]`,
            bg: "bg-[#F1DB4B]",
        },
        "wdc": {
            short: "wdc",
            long: "WYSI Development Contributor",
            fg: `text-white`,
            bg: "bg-[#f80d68]",
        },
        "wtc": {
            short: "wtc",
            long: "WYSI Translations Contributor",
            fg: `text-white`,
            bg: "bg-[#2892D7]",
        },
    };

    const badge = BADGES[p.badge.name];

    if (!badge) return <>no</>;

    return (
        <button class={`badge cursor-default border-none tooltip ${badge.fg} ${badge.bg}`}
            type="button" hx-target="this" hx-swap="outerHTML" data-tip={badge.long}>
            <span class="flex flex-row gap-2 items-center">
                {badge.icon || <span>{badge.short.toUpperCase()}</span>}
            </span>
            {p.editable ?
                <a class="bg-white hover:bg-opacity-30 bg-opacity-0 text-xs rounded-full size-4 flex items-center justify-center"
                    hx-delete={`/admin/badges/${p.user_id}/${badge.short}`} hx-trigger="click" hx-target>
                    <i class="fa-solid fa-xmark" />
                </a> : <></>
            }
        </button>
    );
}

export default Badge;
