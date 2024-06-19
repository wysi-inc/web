type Props = {
    url: string,
    include?: string,
}

function LoadMoreButton({ url, include }: Props) {
    return (<>
        <button hx-post={url} hx-trigger="click"
            hx-swap="outerHTML"
            hx-boost="false" hx-include={include}
            class="col-span-full btn btn-success btn-sm flex flex-row gap-4 items-center justify-center">
            <i class="fa-solid fa-sort-down" />
            <div>Load more</div>
            <span class="htmx-indicator loading loading-spinner loading-md" />
            <i class="fa-solid fa-sort-down" />
        </button>
    </>);
}

export default LoadMoreButton;
