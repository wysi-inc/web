function LoadMoreButton(p: {
    url: string,
    include?: string,
    after?: string
}) {
    return (<>
        <div hx-post={p.url} hx-trigger="click" hx-swap="outerHTML"
            hx-include={p.include} ht-on--after-swap={p.after}
            class="col-span-full flex justify-center">
            <button class="btn btn-secondary btn-sm btn-wide flex flex-row items-center justify-center gap-4">
                <i class="fa-solid fa-sort-down" />
                <div>Load more</div>
                <span class="htmx-indicator loading loading-spinner loading-md" />
                <i class="fa-solid fa-sort-down" />
            </button>
        </div>
    </>);
}

export default LoadMoreButton;
