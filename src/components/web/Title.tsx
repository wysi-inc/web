const Title = (p: { title: string }) => (
    <script>document.title="{p.title} | wysi"</script>
);

export default Title;
