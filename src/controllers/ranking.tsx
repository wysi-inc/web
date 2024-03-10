import Rankings from "../components/user/Rankings";
import { getPage } from "../resources/pages";
import type { Category, Mode } from "../types/osu";

export const rankingsController = ({ request, set, params, html }: any): Response => {
    return getPage(request, html, set,
        <Rankings
            mode={params?.mode as Mode || "osu"}
            category={params?.category as Category || "performance"}
            page={Number(params?.page) || 1}
        />
    )
}
