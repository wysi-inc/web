type Props = {
    url: string;
    children: any;
    css?: string;
}

const HxA = ({ url, css, children }: Props) => {
    return <a
        href={url}
        // hx-get={url}
        // hx-target="#main"
        // hx-indicator="#page-loading"
        // hx-swap="innerHTML show:window:top"
        // hx-push-url="true"
        class={`${css} 
            cursor-pointer 
            hover:underline 
            underline-offset-2
        `}>
        {children}
    </a>
}

export default HxA;
