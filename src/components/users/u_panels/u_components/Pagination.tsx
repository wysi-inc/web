import type { Category, Mode } from "@/src/types/osu";

type Props = {
    mode: string;
    category: string;
    page: number;
}

const Pagination = (props: Props) => {
    const ModeTab = (mode: Mode) =>
        <button hx-post={`/rankings/${mode}/${props.category}/${props.page}`}
            hx-push-url="true" hx-swap="innerHTML" hx-target="#main"
            class={`tab ${props.mode == mode && "tab-active"}`} role="tab">
            {mode}
        </button>;

    const PageTab = (page: number) =>
        page >= 1 && page <= 200 &&
        <button hx-post={`/rankings/${props.mode}/${props.category}/${page}`}
            hx-push-url="true" hx-swap="innerHTML" hx-target="#main"
            class={`tab ${props.page == page && "tab-active"}`} role="tab">
            {page}
        </button>;

    const CategoryTab = (category: Category) =>
        <button hx-post={`/rankings/${props.mode}/${category}/${props.page}`}
            hx-push-url="true" hx-swap="innerHTML" hx-target="#main"
            class={`tab ${props.category == category && "tab-active"}`} role="tab">
            {category}
        </button>;

    return (
        <div class="flex justify-between">
            <div class="tabs tabs-boxed bg-base-300" role="tablist">
                {ModeTab("osu")}
                {ModeTab("taiko")}
                {ModeTab("fruits")}
                {ModeTab("mania")}
            </div>
            <div class="flex flex-row gap-2">
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
            <div class="tabs tabs-boxed bg-base-300" role="flex justify-center tablist">
                {CategoryTab("performance")}
                {CategoryTab("score")}
            </div>
        </div>
    );
}

export default Pagination;
