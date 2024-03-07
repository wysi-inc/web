const HxA = ({ url, children }: { url: string, children: any }) => {
    return (
        <a hx-target="#main" hx-push-url="true" hx-indicator="#page-loading"
            hx-get={url} class="cursor-pointer hover:underline">
            {children}
        </a>
    )
}

export default HxA;
