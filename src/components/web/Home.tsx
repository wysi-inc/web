import Title from "./Title";

const content = [
    {
        title: "User Profiles",
        img: "profile",
    },
    {
        title: "Top 100 Score Stats",
        img: "summary",
    },
    {
        title: "Beatmap Search",
        img: "beatmaps",
    },
    {
        title: "Builtin PP Calculator",
        img: "calculator",
    },
    {
        title: "Share Your Setup!",
        img: "setup",
    },
    {
        title: "Upload Your Collections!",
        img: "collections",
    },
];

function Home() {
    return (<>
        <Title title="Home" />
        <div class="flex flex-col gap-2 items-center">
            <h1 class="text-2xl text-center">Welcome to wysi727.com!</h1>
            <img loading="lazy" src="/public/wysi.svg" class="rounded-xl size-24 shadow-lg" alt="wysi logo" />
            <h2 class="text-lg text-center">An <b>open source</b> osu website <i>*alternative*</i></h2>
            <h3 class="text-sm text-center">Built with bun and htmx</h3>
            <div />
        </div>
        <div class="grid gird-cols-1 md:grid-cols-2 gap-4">
            {content.map(c => (
                <div class="bg-base-100 rounded-lg flex flex-col">
                    <h1 class="p-2 text-neutral-content text-center">{c.title}</h1>
                    <div class="flex flex-col gap-2 p-2 bg-base-300 rounded-lg grow">
                        <img loading="lazy" class="rounded-lg" src={`/public/img/home/${c.img}.webp`} alt="user profiles" />
                    </div>
                </div>
            ))}
        </div>
    </>);
}

export default Home;
