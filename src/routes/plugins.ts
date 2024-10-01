import { Elysia } from "elysia";
import { html } from "@elysiajs/html";
import jwt from "@elysiajs/jwt";
import { env } from "bun";
import { verifyUser } from "../libs/auth";

export const plugins = new Elysia()
    .use(html())
    .use(jwt({
        secret: env.OSU_SECRET,
        cookie: "auth",
        cookieOptions: {
            httpOnly: true,
            maxAge: 60 * 60 * 24 * 31 * 2,
            path: '/',
        }
    }))
    .derive(async ({ cookie, jwt }) => {
        const user = await verifyUser(jwt, cookie);
        const lang = cookie?.lang?.value || "en";
        return { lang, user }
    })
