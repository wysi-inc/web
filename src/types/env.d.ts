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
        CLOUDFLARE_ZONE: string,
        CLOUDFLARE_TOKEN: string,
        STATE: "dev" | "prod",
        PORT: number,
    }
}
