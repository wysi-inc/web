const HxA = ({ url, children }: { url: string, children: any }) => {
    return (
        <a href={url}
        // hx-get={url}
        // hx-target="#main"
        // hx-push-url="true"
        // hx-indicator="#page-loading"
        // hx-swap="innerHTML show:window:top"
        // class="cursor-pointer hover:underline p-0 m-0 flex"
        >
            {children}
        </a>
    )
}

export default HxA;
