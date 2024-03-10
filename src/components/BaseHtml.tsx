import type { UserCookie } from "../types/users";
import Footer from "./web/Footer";
import Navbar from "./web/Navbar";

type Props = {
    user?: UserCookie;
}

const BaseHtml = ({ children }: any, props: Props) => (
    <html data-theme="dracula">
        <head>
            <title>wysi</title>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="icon" href="/public/favicon.ico" />
            <link rel="stylesheet" href="/public/css/main_out.css" type="text/css" />
            <script src="https://kit.fontawesome.com/d5ab19acce.js" crossorigin="anonymous" />
            <script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.2/dist/chart.umd.min.js" />
            <script src="https://unpkg.com/htmx.org@1.9.10" />
        </head>
        <body class="bg-base-300 flex flex-col items-center">
            <Navbar user={props.user} />
            <div class="flex justify-center items-center w-full" style={{ maxWidth: "1000px" }}>
                <main id="main" class="p-4 flex flex-col gap-4 bg-neutral shadow-lg w-full" style="max-width: 1000px;">
                    {children}
                </main>
            </div>
            <Footer />
        </body>
    </html>
);

export default BaseHtml;
