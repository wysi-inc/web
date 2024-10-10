import Link from "@/src/components/web/Link";

const Flag = (p: {
    name?: string,
    code: string,
    static?: boolean,
}) => {
    const url = `https://flagcdn.com/h40/${p.code.toLowerCase()}.webp`;
    const FlagInner = () => (
        <span class="tooltip flex h-5 w-7 items-center justify-center" data-tip={p.name || p.code}>
            <img loading="lazy" src={url} alt={`${p.name || p.code}'s flag`} class="max-h-5 max-w-7 rounded-sm drop-shadow-solid" />
        </span>
    );
    if (p.static) return <FlagInner />;
    return (
        <Link url={`/rankings/osu/performance?country=${p.code}`}>
            <FlagInner />
        </Link>
    );
}

export default Flag;
