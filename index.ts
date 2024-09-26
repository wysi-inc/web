import { Elysia } from "elysia";
import { html } from "@elysiajs/html";
import { staticPlugin } from '@elysiajs/static'
import { jwt } from "@elysiajs/jwt";
import { baseRoutes } from "./src/routes/base";
import { rankingRoutes } from "./src/routes/rankings";
import { userRoutes } from "./src/routes/user";
import { beatmapRoutes, beatmapsetRoutes } from "./src/routes/beatmaps";
import { apiRoutes } from "./src/routes/api";
import { scoresRoutes } from "./src/routes/scores";
import { adminRoutes } from "./src/routes/admin";
import { reportRoutes } from "./src/routes/reports";
import { env } from "bun";
import { get_translations } from "./src/tasks/files";
import { connect_mongodb, connect_osu } from "./src/tasks/connections";
import { update_medals } from "./src/tasks/updates";

declare module "bun" {
    interface Env {
        OSU_ID: number,
        OSU_SECRET: string,
        OSU_REDIRECT: string,
        OSU_API_KEY: string,
        OSUCK_API_KEY: string,
        MONGO_URI: string,
        CROWDIN_ID: number,
        CROWDIN_SECRET: string,
        KOFI_TOKEN: string,
        CLOUDFLARE_TOKEN: string,
        STATE: "dev" | "prod",
        PORT: number,
    }
}

await connect_mongodb();
await connect_osu();
update_medals();
// update_stats();

export const translations = await get_translations();

const jwtcfg = jwt({
    secret: env.OSU_SECRET as string,
    cookie: "auth",
    cookieOptions: {
        httpOnly: true,
        maxAge: 60 * 60 * 24 * 31 * 2,
        path: '/',
    }
})

new Elysia()
    .onRequest(({ request, set }) => {
        const ip = request.headers.get("x-forwarded-for")?.split(",")[0] || "127.0.0.1";
        const req_count = RATELIMIT_MAP.get(ip) || 0;
        const route = request.url.split("/").slice(3).join("/");
        const base = route.split("/")[0];
        if (base !== "public") {
            RATELIMIT_MAP.set(ip, req_count + 1);
            if (req_count > RATELIMIT) {
                set.status = 420;
                console.log(`${ip} HIT RATE LIMIT!`);
                return "Rate limit hit (120 req/min)";
            }
        }
        if (base !== "public" && route !== "favicon.ico") {
            console.log(`${(ip).padStart(15, " ")} ${request.method.padStart(6, " ")}::/${route}`);
        }
    })
    .derive(({ cookie }) => {
        const lang = cookie?.lang?.value || "en";
        return {
            t: translations[lang],
            lang
        }
    })
    .get("/favicon.ico", Bun.file("./public/favicon.ico"))
    .use(staticPlugin())
    .use(html())
    .use(jwtcfg)
    .use(apiRoutes)
    .use(baseRoutes)
    .use(adminRoutes)
    .use(reportRoutes)
    .use(rankingRoutes)
    .use(userRoutes)
    .use(beatmapRoutes)
    .use(beatmapsetRoutes)
    .use(scoresRoutes)
    .onStart(() => console.info(`[ OK ] Listening on port ${env.PORT}`))
    .onError(() => "404: This page doesnt exist")
    .listen(env.PORT);
