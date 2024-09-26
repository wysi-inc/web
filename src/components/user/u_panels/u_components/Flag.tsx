import Link from "@/src/components/web/Link";
import { tools } from "osu-api-extended";

const Flag = (p: {
    name?: string,
    code: string,
    static?: boolean,
}) => {
    const url = `https://flagcdn.com/h40/${p.code.toLowerCase()}.webp`;
    const name = p.name || tools.country(p.code);
    const FlagInner = () => (
        <span class="tooltip flex h-5 w-7 items-center justify-center" data-tip={name}>
            <img data-src={url} alt={`${name}'s flag`} class="max-h-5 max-w-7 rounded-sm drop-shadow-solid" />
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
