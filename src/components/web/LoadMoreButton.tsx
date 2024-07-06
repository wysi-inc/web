type Props = {
    url: string,
    include?: string,
}

function LoadMoreButton({ url, include }: Props) {
    return (<>
        <div hx-post={url} hx-trigger="click" hx-swap="outerHTML" hx-boost="false" hx-include={include} class="col-span-full flex justify-center">
            <button class="btn btn-sm btn-secondary flex flex-row gap-4 items-center justify-center">
                <i class="fa-solid fa-sort-down" />
                <div>Load more</div>
                <span class="htmx-indicator loading loading-spinner loading-md" />
                <i class="fa-solid fa-sort-down" />
            </button>
        </div>
    </>);
}

export default LoadMoreButton;
