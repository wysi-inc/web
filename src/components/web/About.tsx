import Title from "./Title";

const thanks = [
    {
        url: "https://osu.ppy.sh",
        title: "osu!",
        description: "uhm... you know... the game which that this whole site is based around"
    },
    {
        url: "https://catboy.best",
        title: "Mino",
        description: "the mirror we use to get all the beatmaps and pp calculations"
    },
    {
        url: "https://osekai.net",
        title: "Osekai",
        description: "where we get all the medals for the userpages"
    },
    {
        url: "https://osuworld.octo.moe",
        title: "osu! World",
        description: "to get user region flags and region rankings"
    },
    {
        url: "https://score.kirino.sh",
        title: "osu! scores inspector",
        description: "for providing the API to get user grade history"

    }
];

function About() {
    return (<>
        <Title title="About" />
        <div role="alert" class="alert alert-warning">
            <i class="fa-solid fa-triangle-exclamation" />
            <span><b>This website is still under heavy development</b>, some stuff might not be 100% there yet! We'd appreciate it if you reported any bugs on our discord <i>#suggestions-issues</i> channel</span>
        </div>
        <div>Special Thanks:</div>
        <ul class="list-disc">
            {thanks.map(t =>
                <li class="flex flex-row flex-wrap gap-1">
                    <a href={t.url} target="_blank" class="link link-info flex transform flex-row items-center gap-2 duration-100 ease-in hover:-translate-y-1">
                        <i class="fa-solid fa-arrow-up-right-from-square" />
                        <span>{t.title}</span>
                    </a>
                    <span>{t.description}</span>
                </li>
            )}
        </ul>
    </>);
}

export default About;
