import type { UserCookie } from "../types/users";
import AudioPlayer from "./web/AudioPlayer";
import Footer from "./web/Footer";
import Navbar from "./web/Navbar";

function BaseHtml(p: { children: any; lang: string; user: UserCookie | null }) {
    return (
        <>
            <html lang="en" class="scroll-smooth">
                <head>
                    <title>wysi</title>
                    <BaseHead />
                </head>
                <body
                    hx-ext="response-targets"
                    hx-target-error="#alerts"
                    style="display: hidden;"
                    class="flex flex-col items-center justify-center bg-base-300"
                    id="top"
                >
                    <script src="/public/js/utils.js" />
                    <Navbar lang={p.lang} user={p.user} />
                    <div id="alerts" class="alerts fixed right-4 top-20 z-50 flex flex-col gap-2 pt-2" />
                    <main class="w-screen mil:w-mil relative">
                        <div id="main" class="flex flex-col gap-4 bg-neutral shadow-lg md:p-4" hx-history-elt>
                            {p.children}
                        </div>
                    </main>
                    <Footer />
                    <AudioPlayer />
                </body>
            </html>
        </>
    );
}

export const BaseHead = () => (
    <>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="A website for osu! players" />
        <meta
            name="keywords"
            content="osu!,osu,osugame,osu game,osu! game, 
    tracker, stats, open source, wysi, when you see it, 727, beatmap, 
    search, osu search, osu! search, osu! beatmap, osu beatmap, 
    osu! beatmap search, osu beatmap search, osu! beatmap tracker, 
    osu beatmap tracker, osu! tracker, osu tracker, pp, pp calculator, 
    osu pp, osu! pp, osu pp calculator, osu! pp calculator, osu! pp tracker, 
    osu pp tracker, osu! pp tracker, osu! pp calculator, osu profile pp, 
    pp profile, osu! profile pp, osu! profile, osu profile, osu! profile tracker, 
    osu profile tracker, osu! profile search, osu profile search"
        />
        <link href="/favicon.ico" rel="icon" />
        <link href="/public/css/main_out.css" rel="stylesheet" type="text/css" />
        <link href="/public/css/bbcode.css" rel="stylesheet" type="text/css" />
        <script src="https://unpkg.com/htmx.org@2.0.0/dist/htmx.min.js" />
        <script src="https://unpkg.com/htmx-ext-response-targets@2.0.0/response-targets.js" />
        <script src="https://cdn.jsdelivr.net/npm/theme-change@2.0.2/index.js" />
        <script src="/public/lib/fontawesome/brands.min.js" />
        <script src="/public/lib/fontawesome/solid.min.js" />
        <script src="/public/lib/fontawesome/regular.min.js" />
        <script src="/public/lib/fontawesome/fontawesome.min.js" />
        <script defer src="/public/js/search.js" />
        <script defer src="/public/js/audio.js" />
        <script defer src="/public/js/images.js" />
        <script defer src="/public/js/bbcode.js" />
    </>
);

export default BaseHtml;
