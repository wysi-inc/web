import { staticPlugin } from '@elysiajs/static';
import { env } from "bun";
import { Elysia, error } from "elysia";
import { adminRoutes } from "./routes/admin";
import { apiRoutes } from "./routes/api";
import { baseRoutes } from "./routes/base";
import { beatmaps_routes } from "./routes/beatmaps";
import { ranking_routes } from "./routes/rankings";
import { reportRoutes } from "./routes/reports";
import { scores_routes } from "./routes/scores";
import { user_routes } from "./routes/user";
import { connect_mongodb, connect_osu } from "./tasks/connections";
import { below_ratelimit, log, osu_api_call_logger, ratelimit_logger } from "./tasks/logs";
import { update_medals, update_stats, update_user_tokens } from "./tasks/updates";
import { notFound } from './routes/notFound';
import { load_json_data } from './tasks/files';

const start = performance.now();
await Promise.all([
    connect_mongodb(),
    connect_osu(),
    load_json_data()
]);
log.info(`It took ${performance.now() - start}ms to start!`);

update_user_tokens();
update_medals();
update_stats();
ratelimit_logger();
osu_api_call_logger();

setInterval(() => {
    connect_osu();
    update_user_tokens();
    update_medals();
}, 1000 * 60 * 60 * 12);        // every 12h

new Elysia()
    .onRequest(({ request }) => {
        const ip = request.headers.get("x-forwarded-for")?.split(",")[0] || "127.0.0.1";
        const route = request.url.split("/").slice(3).join("/");
        const base = route.split("/")[0];
        if (base !== "public") {
            if (!below_ratelimit(ip)) {
                log.error(`${ip} HIT RATE LIMIT!`);
                return error(420, "Rate limit hit (120 req/min)");
            }
        }
        if (base !== "public" && route !== "favicon.ico") {
            log.request(ip, request.method, route);
        }
    })
    .onError(({ error }) => {
        log.error(error.message);
        return error.message;
    })
    .get("/favicon.ico", Bun.file("./public/favicon.ico"))
    .use(staticPlugin())
    .use(apiRoutes)
    .use(baseRoutes)
    .use(adminRoutes)
    .use(reportRoutes)
    .use(ranking_routes)
    .use(user_routes)
    .use(beatmaps_routes)
    .use(scores_routes)
    .use(notFound)
    .onStart(() => log.success(`Listening on port ${env.PORT}`))
    .listen(env.PORT);
