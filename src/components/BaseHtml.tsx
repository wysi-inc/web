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
                <script src="https://unpkg.com/htmx.org@2.0.0" />
                <script async src="https://kit.fontawesome.com/d5ab19acce.js" crossorigin="anonymous" />
                <script async src="/public/js/search.js" defer />
                <script async src="/public/js/audio.js" defer />
            </head>
            <body class="bg-base-300 flex flex-col justify-center items-center">
                <Navbar user={user} />
                <div class="w-screen mil:w-[1000px]">
                    <main id="main" class="md:p-4 flex flex-col gap-4 bg-neutral shadow-lg">
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
