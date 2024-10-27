const Title = (p: { title?: string; scripts?: string[]; modules?: string[]; func?: string[] }) => (
    <>
        {p.title ? <script>document.title = "{p.title} | wysi"</script> : null}
        {p.scripts?.map((s) => <script src={s} />)}
        {p.modules?.map((s) => <script type="module" src={s} />)}
        {p.func?.map((f) => <script>{f}</script>)}
    </>
);

export default Title;
