import { StatsModel } from "@/src/models/Stats";
import Title from "./Title";


async function Home({ t }: any) {

    const content = [
        {
            title: t.home.profiles,
            img: "profile",
        },
        {
            title: t.home.stats,
            img: "summary",
        },
        {
            title: t.home.search,
            img: "beatmaps",
        },
        {
            title: t.home.calculator,
            img: "calculator",
        },
        {
            title: t.home.setup,
            img: "setup",
        },
        {
            title: t.home.collections,
            img: "collections",
        },
    ];

    const stats = await StatsModel.findOne();

    return (<>
        <Title title="Home" />
        <div class="flex flex-col gap-2 items-center">
            <h1 class="text-2xl text-center">{t.home.welcome}</h1>
            <img loading="lazy" src="/public/wysi.svg" class="rounded-xl size-24 shadow-lg" alt="wysi logo" />
            <h2 class="text-lg text-center">{t.home.foss}</h2>
            <h3 class="text-sm text-center">{t.home.built}</h3>
            <div />
        </div>
        <section class="stats shadow rounded-lg bg-base-300 stats-vertical md:stats-horizontal">
            <div class="stat">
                <div class="stat-title"><i class="fa-solid fa-database" /> Profiles Stored</div>
                <div class="stat-value">{stats?.users.toLocaleString()}</div>
                <div class="stat-desc">User profiles saved</div>
            </div>
            <div class="stat">
                <div class="stat-title"><i class="fa-solid fa-computer" /> Profile Setups</div>
                <div class="stat-value">{stats?.setups.toLocaleString()}</div>
                <div class="stat-desc">Profiles with custom setups</div>
            </div>
            <div class="stat">
                <div class="stat-title"><i class="fa-solid fa-heart" /> Collections</div>
                <div class="stat-value">{stats?.collections.toLocaleString()}</div>
                <div class="stat-desc">Collections uploaded</div>
            </div>
        </section>
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
