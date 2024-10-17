import { Elysia } from "elysia";
import NotFound from "../components/web/NotFound";
import HtmxPage from "../libs/routes";
import { plugins } from "./plugins";

export const notFound = new Elysia({ prefix: "/*" })
    .use(plugins)
    .get("", ({ lang, t, request, user }) => (
        <HtmxPage lang={lang} t={t} headers={request.headers} user={user}>
            <NotFound />
        </HtmxPage>
    ))
