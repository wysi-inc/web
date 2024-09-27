import { staticPlugin } from '@elysiajs/static';
import { env } from "bun";
import { Elysia, error } from "elysia";
import { adminRoutes } from "./routes/admin";
import { apiRoutes } from "./routes/api";
import { baseRoutes } from "./routes/base";
import { beatmapRoutes, beatmapsetRoutes } from "./routes/beatmaps";
import { rankingRoutes } from "./routes/rankings";
import { reportRoutes } from "./routes/reports";
import { scoresRoutes } from "./routes/scores";
import { userRoutes } from "./routes/user";
import { connect_mongodb, connect_osu } from "./tasks/connections";
import { below_ratelimit, log } from "./tasks/logs";
import { update_medals } from "./tasks/updates";

await connect_mongodb();
await connect_osu();
update_medals();
setInterval(() => connect_osu(), 1000 * 60 * 60 * 12);      // every 12h
setInterval(() => update_medals(), 1000 * 60 * 60 * 12);    // every 12h
// update_stats();


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
    .onError(() => "404: This page doesnt exist")
    .get("/favicon.ico", Bun.file("./public/favicon.ico"))
    .use(staticPlugin())
    .use(apiRoutes)
    .use(baseRoutes)
    .use(adminRoutes)
    .use(reportRoutes)
    .use(rankingRoutes)
    .use(userRoutes)
    .use(beatmapRoutes)
    .use(beatmapsetRoutes)
    .use(scoresRoutes)
    .onAfterHandle(() => {
        console.log(performance.now())
    })
    .onStart(() => log.success(`Listening on port ${env.PORT}`))
    .listen(env.PORT);
