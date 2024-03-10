import Rankings from "../components/user/Rankings";
import { verifyUser } from "../resources/functions";
import { getPage } from "../resources/pages";
import type { Category, Mode } from "../types/osu";

export const rankingsController = async ({ request, set, params, html, jwt, cookie: { auth } }: any): Promise<Response> => {
    const user = await verifyUser(jwt, auth);
    return getPage(request, html, set, user,
        <Rankings
            mode={params?.mode as Mode || "osu"}
            category={params?.category as Category || "performance"}
            page={Number(params?.page) || 1}
        />
    )
}
