const Title = (p: {
    title?: string,
    scripts?: string[]
}) => (<>
    {p.title ?
        <script>document.title = "{p.title} | wysi"</script>
        : null
    }
    {p.scripts?.map((s) => <script src={s} />)}
</>);

export default Title;
