const Title = (p: {
    title?: string,
    scripts?: string[],
    func?: string[],
}) => (<>
    {p.title ?
        <script>document.title = "{p.title} | wysi"</script>
        : null
    }
    {p.scripts?.map((s) => <script src={s} />)}
    {p.func?.map((f) => <script>{f}</script>)}
</>);

export default Title;
