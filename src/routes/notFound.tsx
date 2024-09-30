import { Elysia } from "elysia";
import { plugins } from "./plugins";
import HtmxPage from "../libs/routes";
import NotFound from "../components/web/NotFound";

export const notFound = new Elysia({ prefix: "/*" })
    .use(plugins)
    .get("", ({ lang, t, request, user }) => (
        <HtmxPage lang={lang} t={t} headers={request.headers} user={user}>
            <NotFound />
        </HtmxPage>
    ))
