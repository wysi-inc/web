import { StatsModel } from "@/src/models/Stats";
import Title from "./Title";
import { txt } from "@/src/tasks/files";


async function Home(p: { lang: string }) {

    const content = [
        {
            title: txt(p.lang, "home.profiles"),
            img: "profile",
        },
        {
            title: txt(p.lang, "home.stats"),
            img: "summary",
        },
        {
            title: txt(p.lang, "home.search"),
            img: "beatmaps",
        },
        {
            title: txt(p.lang, "home.calculator"),
            img: "calculator",
        },
        {
            title: txt(p.lang, "home.setup"),
            img: "setup",
        },
        {
            title: txt(p.lang, "home.collections"),
            img: "collections",
        },
    ];

    const stats = await StatsModel.findOne();

    return (<>
        <Title title="Home" />
        <div class="flex flex-col items-center gap-2">
            <h1 class="text-center text-2xl">{txt(p.lang, "home.welcome")}</h1>
            <img loading="lazy" src="/public/wysi.svg" class="size-24 rounded-xl shadow-lg" alt="wysi logo" />
            <h2 class="text-center text-lg">{txt(p.lang, "home.foss")}</h2>
            <h3 class="text-center text-sm">{txt(p.lang, "home.built")}</h3>
            <div />
        </div>
        {stats ?
            <section class="stats stats-vertical rounded-lg bg-base-300 shadow md:stats-horizontal">
                <div class="stat">
                    <div class="stat-title flex items-center gap-3">
                        <i class="fa-solid fa-database" />
                        <span>Profiles Stored</span>
                    </div>
                    <div class="stat-value">{stats.profiles.toLocaleString()}</div>
                    <div class="stat-desc">User profiles stored</div>
                </div>
                <div class="stat">
                    <div class="stat-title flex items-center gap-3">
                        <i class="fa-solid fa-user" />
                        <span>Registered Users</span>
                    </div>
                    <div class="stat-value">{stats.users.toLocaleString()}</div>
                    <div class="stat-desc">Users that logged in</div>
                </div>
                <div class="stat">
                    <div class="stat-title flex items-center gap-3">
                        <i class="fa-solid fa-computer" />
                        <span>Profile Setups</span>
                    </div>
                    <div class="stat-value">{stats.setups.toLocaleString()}</div>
                    <div class="stat-desc">Profiles with custom setups</div>
                </div>
                <div class="stat">
                    <div class="stat-title flex items-center gap-3">
                        <i class="fa-solid fa-heart" />
                        <span>Collections</span>
                    </div>
                    <div class="stat-value">{stats.collections.toLocaleString()}</div>
                    <div class="stat-desc">Profiles with collections uploaded</div>
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
