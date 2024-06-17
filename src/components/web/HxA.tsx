type Props = {
    url: string;
    children: any;
    css?: string;
}

const HxA = ({ url, css, children }: Props) => {
    return <a href={url}
        // hx-get={url}
        // hx-push-url="true" hx-target="#main"
        // hx-swap="innerHTML show:window:top"
        // hx-indicator="#page-loading"
        class={`${css} 
            cursor-pointer 
            hover:underline 
            underline-offset-2
        `}>
        {children}
    </a>
}

export default HxA;
