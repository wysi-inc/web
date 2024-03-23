const HxA = ({ url, css, children }: any) => {
    return (
        <a href={url}
            // hx-get={url}
            // hx-target="#main"
            // hx-push-url="true"
            // hx-indicator="#page-loading"
            // hx-swap="innerHTML show:window:top"
            class={"cursor-pointer hover:underline underline-offset-2 p-0 m-0 flex"}>
            <span class={css ? css + " " : "" + "flex p-0 m-0"}>
                {children}
            </span>
        </a>
    )
}

export default HxA;
