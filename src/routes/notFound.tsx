import { Elysia } from "elysia";
import NotFound from "../components/web/NotFound";
import HtmxPage from "../libs/routes";
import { plugins } from "./plugins";

export const notFound = new Elysia({ prefix: "/*" }).use(plugins).get("", ({ lang, request, set, user }) => (
    <HtmxPage lang={lang} req={request} set={set} user={user}>
        <NotFound />
    </HtmxPage>
));
