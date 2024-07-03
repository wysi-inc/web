import { subdivisionFlags } from "@/src/libs/constants";

type Props = {
    name: string;
    country_code: string;
    subdivision_code: string;
}

async function SubdivisionFlag({ name, subdivision_code, country_code }: Props) {

    const subdivision = subdivisionFlags[country_code]?.regions[subdivision_code];

    if (!subdivision) return <></>;

    return (
        <div class="tooltip flex items-center justify-center h-5 w-7" data-tip={name}>
            <img src={subdivision.flag} alt={`Flag of ${name}`}
                class="max-h-5 max-w-7 rounded-sm outline outline-1 outline-base-300" />
        </div>
    );
}

export default SubdivisionFlag;
