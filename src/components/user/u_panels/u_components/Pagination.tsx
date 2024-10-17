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
            css={`${p.mode == mode && "tab-active"} tab`} role="tab">
            {mode}
        </Link>
    );

    const PageTab = (page: number) => (
        page >= 1 && page <= 200 &&
        <Link url={`/rankings/${p.mode}/${p.category}/${page}${p.country ? `?country=${p.country}` : ""}`}
            css={`${p.page == page && "tab-active"} tab`} role="tab">
            {page}
        </Link>
    );

    const CategoryTab = (category: Category) => (
        <Link url={`/rankings/${p.mode}/${category}/${p.page}${p.country ? `?country=${p.country}` : ""}`}
            css={`${p.category == category && "tab-active"} tab`} role="tab">
            {category}
        </Link>
    );

    return (
        <div class="flex justify-between">
            <div class="tabs tabs-boxed tabs-sm hidden bg-base-300 md:flex" role="tablist">
                {ModeTab("osu")}
                {ModeTab("taiko")}
                {ModeTab("fruits")}
                {ModeTab("mania")}
            </div>
            <div class="flex grow flex-row justify-center gap-2">
                {p.page > 3 &&
                    <div class="tabs tabs-boxed tabs-sm bg-base-300" role="tablist">
                        {PageTab(1)}
                    </div>
                }
                <div class="tabs tabs-boxed tabs-sm bg-base-300" role="tablist">
                    {PageTab(p.page - 2)}
                    {PageTab(p.page - 1)}
                    {PageTab(p.page)}
                    {PageTab(p.page + 1)}
                    {PageTab(p.page + 2)}
                </div>
                {p.page < 198 &&
                    <div class="tabs tabs-boxed tabs-sm bg-base-300" role="tablist">
                        {PageTab(200)}
                    </div>
                }
            </div>
            <div class="tabs tabs-boxed tabs-sm hidden bg-base-300 md:flex" role="tablist">
                {CategoryTab("performance")}
                {CategoryTab("score")}
            </div>
        </div>
    );
}

export default Pagination;
