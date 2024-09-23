import type { UserCookie } from "../types/users";
import AudioPlayer from "./web/AudioPlayer";
import Footer from "./web/Footer";
import Navbar from "./web/Navbar";

type Props = {
    children: any;
    user: UserCookie | null;
    t: any,
    lang: any
}

// const PROD = process.env.STATE === "prod";
const PROD = false;

const BaseHtml = ({ lang, t, user, children }: Props) => {
    return (<>
        <html lang="en" class="scroll-smooth">
            <head>
                <title>wysi</title>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="A website for osu! players" />
                <meta name="keywords" content="osu!,osu,osugame,osu game,osu! game, 
                tracker, stats, open source, wysi, when you see it, 727, beatmap, 
                search, osu search, osu! search, osu! beatmap, osu beatmap, 
                osu! beatmap search, osu beatmap search, osu! beatmap tracker, 
                osu beatmap tracker, osu! tracker, osu tracker, pp, pp calculator, 
                osu pp, osu! pp, osu pp calculator, osu! pp calculator, osu! pp tracker, 
                osu pp tracker, osu! pp tracker, osu! pp calculator, osu profile pp, 
                pp profile, osu! profile pp, osu! profile, osu profile, 
                osu! profile tracker, osu profile tracker, osu! profile search, osu profile search" />
                <link href="/favicon.ico" rel="icon" />
                <link href="/public/css/main_out.css" rel="stylesheet" type="text/css" />
                <link href="/public/css/bbcode.css" rel="stylesheet" type="text/css" />
                <script src="https://unpkg.com/htmx.org@2.0.0/dist/htmx.min.js" />
                <script src="https://cdn.jsdelivr.net/npm/theme-change@2.0.2/index.js" />
                <script src="https://cdn.jsdelivr.net/npm/sortablejs@latest/Sortable.min.js?" />
                <script defer src="/public/lib/fontawesome/brands.min.js" />
                <script defer src="/public/lib/fontawesome/solid.min.js" />
                <script defer src="/public/lib/fontawesome/regular.min.js" />
                <script defer src="/public/lib/fontawesome/fontawesome.min.js" />
                <script defer src={`/public/js/utils.js`} />
                <script defer src={`/public/js/search${PROD ? ".min" : ""}.js`} />
                <script defer src={`/public/js/audio${PROD ? ".min" : ""}.js`} />
                <script defer src={`/public/js/images${PROD ? ".min" : ""}.js`} />
                <script defer src={`/public/js/bbcode${PROD ? ".min" : ""}.js`} />
                <script defer src={`/public/js/drag${PROD ? ".min" : ""}.js`} />
            </head>
            <body class="bg-base-300 flex flex-col justify-center items-center" id="top">
                <script>let FF_FOUC_FIX;</script>
                <Navbar lang={lang} t={t} user={user} />
                <main class="w-screen mil:w-mil">
                    <div id="main" class="md:p-4 flex flex-col gap-4 bg-neutral shadow-lg">
                        {children}
                    </div>
                </main>
                <AudioPlayer />
                <Footer />
            </body>
        </html>
    </>);
}

export default BaseHtml;
