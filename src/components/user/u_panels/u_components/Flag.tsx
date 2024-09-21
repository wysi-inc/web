import Link from "@/src/components/web/Link";

const Flag = (p: { name: string; code: string; }) => {
    const url = `https://flagcdn.com/h40/${p.code.toLowerCase()}.webp`;
    return (
        <Link url={`/rankings/osu/performance?country=${p.code}`}>
            <span class="tooltip flex items-center justify-center h-5 w-7" data-tip={p.name}>
                <img data-src={url} alt={`${p.name}'s flag`} class="max-h-5 max-w-7 rounded-sm drop-shadow-solid" />
            </span>
        </Link>
    );
}

export default Flag;
