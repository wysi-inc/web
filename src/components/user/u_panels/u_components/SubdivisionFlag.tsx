import { subdivisionFlags } from "@/src/libs/constants";

type Props = {
    name: string;
} & ({
    country_code: string;
    subdivision_code: string;
} | {
    flag: string;
});

async function SubdivisionFlag(p: Props) {

    if ("flag" in p) {
        return (
            <div class="tooltip flex items-center justify-center h-5 w-7" data-tip={p.name}>
                <img src={p.flag} alt={`Flag of ${p.name}`} class="max-h-5 max-w-7 rounded-sm outline outline-1 outline-base-300" />
            </div>
        );
    } else {

        const subdivision = subdivisionFlags[p.country_code]?.regions[p.subdivision_code];

        if (!subdivision) return <></>;

        return (
            <div class="tooltip flex items-center justify-center h-5 w-7" data-tip={p.name}>
                <img src={subdivision.flag} alt={`Flag of ${p.name}`}
                    class="max-h-5 max-w-7 rounded-sm outline outline-1 outline-base-300" />
            </div>
        );
    }
}

export default SubdivisionFlag;
