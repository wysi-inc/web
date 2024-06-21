
const Home = () => {
    return <div class="flex flex-col gap-4">
        <div class="flex flex-col gap-2 items-center">
            <h1 class="text-2xl text-center">Welcome to wysi727.com!</h1>
            <img src="/public/wysi.svg" class="rounded-xl size-24 shadow-lg" alt="wysi logo" />
            <h2 class="text-lg text-center">An <b>open source</b> osu website <i>*alternative*</i></h2>
            <h3 class="text-sm text-center">Built with bun and htmx</h3>
            <div />
        </div>
        <div class="grid gird-cols-1 md:grid-cols-2 gap-4">
            <div class="bg-base-100 rounded-lg flex flex-col">
                <h1 class="p-2 text-neutral-content">User Profiles</h1>
                <div class="flex flex-col gap-2 p-2 bg-base-300 rounded-lg grow">
                    <img src="/public/img/home/profile_1.png" alt="user profiles" />
                </div>
            </div>
            <div class="bg-base-100 rounded-lg flex flex-col">
                <h1 class="p-2 text-neutral-content">Beatmap Search</h1>
                <div class="flex flex-col gap-2 p-2 bg-base-300 rounded-lg grow">
                    <img src="/public/img/home/beatmaps.png" alt="beatmaps" />
                </div>
            </div>
            <div class="bg-base-100 rounded-lg flex flex-col">
                <h1 class="p-2 text-neutral-content">PP Calculation</h1>
                <div class="flex flex-col gap-2 p-2 bg-base-300 rounded-lg grow">
                    <img src="/public/img/home/pp_calculator.png" alt="pp calculator" />
                </div>
            </div>
            <div class="bg-base-100 rounded-lg flex flex-col">
                <h1 class="p-2 text-neutral-content">And more!!</h1>
                <div class="flex flex-col gap-2 p-2 bg-base-300 rounded-lg grow">
                    <img class="blur" src="/public/img/home/profile_2.png" alt="more stuff" />
                </div>
            </div>

        </div>
    </div>;
}

export default Home;
