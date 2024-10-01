import Link from "@/src/components/web/Link";
import type { Category, Mode } from "@/src/types/osu";

function Pagination(p: {
    mode: string,
    category: string,
    page: number,
    country?: string
}) {
    const ModeTab = (mode: Mode) => (
        <Link url={`/rankings/${mode}/${p.category}/${p.page}${p.country ? `?country=${p.country}` : ""}`}
            css={`tab ${p.mode == mode && "tab-active"}`} role="tab">
            {mode}
        </Link>
    );

    const PageTab = (page: number) => (
        page >= 1 && page <= 200 &&
        <Link url={`/rankings/${p.mode}/${p.category}/${page}${p.country ? `?country=${p.country}` : ""}`}
            css={`tab ${p.page == page && "tab-active"}`} role="tab">
            {page}
        </Link>
    );

    const CategoryTab = (category: Category) => (
        <Link url={`/rankings/${p.mode}/${category}/${p.page}${p.country ? `?country=${p.country}` : ""}`}
            css={`tab ${p.category == category && "tab-active"}`} role="tab">
            {category}
        </Link>
    );

    return (
        <div class="flex justify-between">
            <div class="hidden md:flex tabs tabs-boxed tabs-sm bg-base-300" role="tablist">
                {ModeTab("osu")}
                {ModeTab("taiko")}
                {ModeTab("fruits")}
                {ModeTab("mania")}
            </div>
            <div class="flex flex-row justify-center grow gap-2">
                {p.page > 3 &&
                    <div class="tabs tabs-sm tabs-boxed bg-base-300" role="tablist">
                        {PageTab(1)}
                    </div>
                }
                <div class="tabs tabs-sm tabs-boxed bg-base-300" role="tablist">
                    {PageTab(p.page - 2)}
                    {PageTab(p.page - 1)}
                    {PageTab(p.page)}
                    {PageTab(p.page + 1)}
                    {PageTab(p.page + 2)}
                </div>
                {p.page < 198 &&
                    <div class="tabs tabs-sm tabs-boxed bg-base-300" role="tablist">
                        {PageTab(200)}
                    </div>
                }
            </div>
            <div class="hidden md:flex tabs tabs-sm tabs-boxed bg-base-300" role="tablist">
                {CategoryTab("performance")}
                {CategoryTab("score")}
            </div>
        </div>
    );
}

export default Pagination;
