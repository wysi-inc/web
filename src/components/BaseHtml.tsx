import type { UserCookie } from "../types/users";
import AudioPlayer from "./web/AudioPlayer";
import Footer from "./web/Footer";
import Navbar from "./web/Navbar";

type Props = {
    children: any;
    user: UserCookie | null;
}

const BaseHtml = ({ user, children }: Props) => {
    return (
        <html class="scroll-smooth" lang="en">
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
                <link rel="icon" href="favicon.ico" />
                <link rel="stylesheet" href="/public/css/main_out.css" type="text/css" />
                <link rel="stylesheet" href="/public/css/bbcode.css" type="text/css" />
                <script src="https://kit.fontawesome.com/d5ab19acce.js" crossorigin="anonymous" />
                <script src="https://cdn.jsdelivr.net/npm/theme-change@2.0.2/index.js" />
                <script src="https://unpkg.com/htmx.org@1.9.12" />
                {/*<script src="/public/lib/htmx.js" />*/}
                <script src="/public/js/search.js" defer />
                <script src="/public/js/audio.js" defer />
            </head>
            <body class="bg-base-300 flex flex-col items-center">
                <Navbar user={user} />
                <div class="flex justify-center items-center max-w-[1000px]">
                    <main id="main" hx-history-elt class="m-0 p-4 flex flex-col gap-4 bg-neutral shadow-lg">
                        {children}
                    </main>
                </div>
                <AudioPlayer />
                <Footer />
            </body>
        </html>
    );
}

export default BaseHtml;
