import ModeIcon from "../../beatmap/ModeIcon";

type Props = {
    id: number;
}

const UserSkinsPanel = (props: Props) => {

    const skins = [
        {
            id: "1648?v=0",
            name: "Bacon boi (CK) v1.0",
            creator: "cyperdark",
            modes: ["osu", "taiko", "fruits", "mania"],
            imgs: [
                "https://files.osuck.link/images/skins/a63580746a201e0e6f05d32a48f0931e_xs.webp",
                "https://files.osuck.link/images/skins/569bb460958ba5a2fb88691ea16e5a56_xs.webp",
                "https://files.osuck.link/images/skins/4515d2c31808e735a7d61c247013f606_xs.webp"
            ]
        },
        {
            id: "2175?v=0",
            name: "FREEDOM DiVE (BTMC) v1.0",
            creator: "JesusOmega",
            modes: ["osu, mania"],
            imgs: [
                "https://files.osuck.link/images/skins/a9273713fe3b556db03efb8c271497c9_xs.webp",
                "https://files.osuck.link/images/skins/acb51c20109a012dc125038b893be56e_xs.webp",
                "https://files.osuck.link/images/skins/8eb212c2aa59af3bb913cd4aaeec272b_xs.webp"
            ]
        }
    ];

    return (<>
        <h1>(Example)</h1>
        <div class="flex flex-row flex-wrap items-center justify-center gap-4">
            {skins.map((skin) =>
                <a href={`https://skins.osuck.net/skins/${skin.id}`} target="_blank" rel="noreferrer"
                    class="bg-neutral rounded-lg flex flex-col transform ease-in-out duration-150 hover:-translate-y-2">
                    <div class="py-1 px-2 flex flex-row justify-between items-center">
                        <div class="flex flex-row items-center gap-2">
                            <i class="fa-solid fa-arrow-up-right-from-square" />
                            <h4>{skin.name}</h4>
                        </div>
                        <div class="flex flex-row gap-1">
                            {skin.modes.map(mode =>
                                <ModeIcon mode={mode} size={18} css="fill-neutral-content" />
                            )}
                        </div>
                    </div>
                    <div class="bg-base-300 rounded-lg p-4">
                        <div class="carousel carousel-center max-w-md space-x-4 bg-base-300 rounded-lg">
                            {skin.imgs.map((img) =>
                                <div class="carousel-item">
                                    <img src={img} class="rounded-lg" />
                                </div>
                            )}
                        </div>
                    </div>
                </a>
            )}
        </div>
    </>);
}

export default UserSkinsPanel;
