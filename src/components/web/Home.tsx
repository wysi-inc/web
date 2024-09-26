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
        <div class="flex flex-col items-center gap-2">
            <h1 class="text-center text-2xl">{t.home.welcome}</h1>
            <img loading="lazy" src="/public/wysi.svg" class="size-24 rounded-xl shadow-lg" alt="wysi logo" />
            <h2 class="text-center text-lg">{t.home.foss}</h2>
            <h3 class="text-center text-sm">{t.home.built}</h3>
            <div />
        </div>
        {stats ?
            <section class="stats stats-vertical rounded-lg bg-base-300 shadow md:stats-horizontal">
                <div class="stat">
                    <div class="stat-title"><i class="fa-solid fa-database" /> Profiles Stored</div>
                    <div class="stat-value">{stats.users.toLocaleString()}</div>
                    <div class="stat-desc">User profiles saved</div>
                </div>
                <div class="stat">
                    <div class="stat-title"><i class="fa-solid fa-computer" /> Profile Setups</div>
                    <div class="stat-value">{stats.setups.toLocaleString()}</div>
                    <div class="stat-desc">Profiles with custom setups</div>
                </div>
                <div class="stat">
                    <div class="stat-title"><i class="fa-solid fa-heart" /> Collections</div>
                    <div class="stat-value">{stats.collections.toLocaleString()}</div>
                    <div class="stat-desc">Collections uploaded</div>
                </div>
            </section> : null
        }
        <div class="gird-cols-1 grid gap-4 md:grid-cols-2">
            {content.map(c => (
                <div class="flex flex-col rounded-lg bg-base-100">
                    <h1 class="p-2 text-center text-neutral-content">{c.title}</h1>
                    <div class="flex grow flex-col gap-2 rounded-lg bg-base-300 p-2">
                        <img loading="lazy" class="rounded-lg" src={`/public/img/home/${c.img}.webp`} alt="user profiles" />
                    </div>
                </div>
            ))}
        </div>
    </>);
}

export default Home;
