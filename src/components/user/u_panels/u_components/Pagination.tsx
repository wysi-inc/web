import type { Category, Mode } from "@/src/types/osu";
import HxA from "@/src/components/web/HxA";

type Props = {
    mode: string;
    category: string;
    page: number;
}

const Pagination = (props: Props) => {
    const ModeTab = (mode: Mode) => (
        <HxA url={`/rankings/${mode}/${props.category}/${props.page}`}
            css={`tab ${props.mode == mode && "tab-active"}`} role="tab">
            {mode}
        </HxA>
    );

    const PageTab = (page: number) => (
        page >= 1 && page <= 200 &&
        <HxA url={`/rankings/${props.mode}/${props.category}/${page}`}
            css={`tab ${props.page == page && "tab-active"}`} role="tab">
            {page}
        </HxA>
    );

    const CategoryTab = (category: Category) => (
        <HxA url={`/rankings/${props.mode}/${category}/${props.page}`}
            css={`tab ${props.category == category && "tab-active"}`} role="tab">
            {category}
        </HxA>
    );

    return (
        <div class="flex justify-between">
            <div class="hidden md:flex tabs tabs-boxed bg-base-300" role="tablist">
                {ModeTab("osu")}
                {ModeTab("taiko")}
                {ModeTab("fruits")}
                {ModeTab("mania")}
            </div>
            <div class="flex flex-row justify-center grow gap-2">
                {props.page > 3 &&
                    <div class="tabs tabs-boxed bg-base-300" role="tablist">
                        {PageTab(1)}
                    </div>
                }
                <div class="tabs tabs-boxed bg-base-300" role="tablist">
                    {PageTab(props.page - 2)}
                    {PageTab(props.page - 1)}
                    {PageTab(props.page)}
                    {PageTab(props.page + 1)}
                    {PageTab(props.page + 2)}
                </div>
                {props.page < 198 &&
                    <div class="tabs tabs-boxed bg-base-300" role="tablist">
                        {PageTab(200)}
                    </div>
                }
            </div>
            <div class="hidden md:flex tabs tabs-boxed bg-base-300" role="tablist">
                {CategoryTab("performance")}
                {CategoryTab("score")}
            </div>
        </div>
    );
}

export default Pagination;
