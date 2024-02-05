import Footer from "./web/Footer";
import Navbar from "./web/Navbar";

const BaseHtml = ({ children }: any) => {
    const config = {
        daisyui: {
            themes: ["dracula"],
        },
    }
    return (
        <html data-theme="dracula">
            <head>
                <title>wysi</title>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link href="https://cdn.jsdelivr.net/npm/daisyui@4.6.1/dist/full.min.css" rel="stylesheet" type="text/css" />
                <script src="https://unpkg.com/htmx.org@1.9.10" integrity="sha384-D1Kt99CQMDuVetoL1lrYwg5t+9QdHe7NLX/SoJYkXDFfX37iInKRy5xLSi8nO7UC" crossorigin="anonymous"></script>
                <script src="https://cdn.tailwindcss.com"></script>
                <script>{`tailwind.config=${JSON.stringify(config)}`}</script>
                <link rel="stylesheet" href="/public/styles/main.css" type="text/css" />
            </head>
            <body class="bg-base-300">
                <Navbar />
                <div class="flex justify-center">
                    <main id="main" class="p-4 bg-base-200 shadow-lg" style="width: 1000px;">
                        {children}
                    </main>
                </div>
                <Footer />
            </body>
        </html >
    );
}

export default BaseHtml;
