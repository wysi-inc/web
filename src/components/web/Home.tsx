
const Home = () => {
    return <div class="flex flex-col gap-4">
        <div class="flex flex-row justify-between items-center">
            <img src="/public/wysi.svg" class="rounded-xl size-24 shadow-lg" />
            <div class="col-span-3">
                <h1 class="text-2xl text-center">Welcome to wysi727.com!</h1>
                <h2 class="text-lg text-center">An <b>open source</b> osu website <i>*alternative*</i></h2>
                <h3 class="text-sm text-center">Built with bun and htmx</h3>
            </div>
            <img src="/public/osu.svg" class="rounded-full size-24 shadow-lg" />
        </div>
        <div class="grid gird-cols-1 md:grid-cols-2 gap-4">
            <div class="bg-base-100 rounded-lg flex flex-col">
                <h1 class="p-2 text-neutral-content">User Profiles</h1>
                <div class="flex flex-col gap-2 p-2 bg-base-300 rounded-lg grow">
                    <img src="/public/img/home/profile_1.png" />
                </div>
            </div>
            <div class="bg-base-100 rounded-lg flex flex-col">
                <h1 class="p-2 text-neutral-content">Beatmap Search</h1>
                <div class="flex flex-col gap-2 p-2 bg-base-300 rounded-lg grow">
                    <img src="/public/img/home/beatmaps.png" />
                </div>
            </div>
            <div class="bg-base-100 rounded-lg flex flex-col">
                <h1 class="p-2 text-neutral-content">PP Calculation</h1>
                <div class="flex flex-col gap-2 p-2 bg-base-300 rounded-lg grow">
                    <img src="/public/img/home/pp_calculator.png" />
                </div>
            </div>
            <div class="bg-base-100 rounded-lg flex flex-col">
                <h1 class="p-2 text-neutral-content">And more!!</h1>
                <div class="flex flex-col gap-2 p-2 bg-base-300 rounded-lg grow">
                    <img class="blur" src="/public/img/home/profile_2.png" />
                </div>
            </div>

        </div>
    </div>;
}

export default Home;
