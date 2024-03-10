import Home from "../components/web/Home";
import SearchResults from "../components/web/SearchResults";
import { userAuthCode } from "../resources/functions";
import { getPage } from "../resources/pages";

export const homeController = ({ request, set, html }: any): Response => {
    return getPage(request, html, set,
        <Home />
    )
}

export const oauthController = ({ request, set, query, html }: any): Response => {
    const code = query.code;
    const data = userAuthCode(code);
    console.log(data);
    return getPage(request, html, set,
        <Home />,
    )
}


export const searchController = ({ body, html }: any): Response => {
    return html(
        <SearchResults query={body.q} />
    )
}
