import type { Setup } from "@/src/models/User";
import KTkl from "./Keyboards/KTkl";
import KFull from "./Keyboards/KFull";
import K60 from "./Keyboards/K60";
import K75 from "./Keyboards/K75";
import K2 from "./Keyboards/K2";
import K3 from "./Keyboards/K3";
import K4 from "./Keyboards/K4";
import { isEmpty } from "@/src/libs/web_utils";

export type KeyboardProps = {
    keys?: string[];
}

type KeyProps = {
    char: string,
    code: string,
    width: number,
    keys?: string[],
    height?: number,
}

export const Key = ({ char, code, width, keys, height }: KeyProps) => {
    return (
        <label class="m-0 p-0 rounded-sm cursor-pointer text-center border-base-content border has-[:checked]:bg-secondary bg-opacity-75"
            style={{
                fontSize: '0.5rem',
                width: `${width}rem`,
                height: `${height || 1}rem`,
                lineHeight: `${height || 1}rem`,
            }}>
            {char}
            <input name={`keyboard_key_${code}`} type="checkbox"
                checked={keys?.includes(code)} class="appearance-none"
            />
        </label>
    );
}

export const Empty = () => {
    return <div class="size-4" />
}

type Props = {
    keyboard: Setup["keyboard"],
    editable: boolean
}

const KeyboardDisplay = ({ keyboard, editable }: Props) => {

    const empty = isEmpty(keyboard);

    if (!editable && empty) return <></>;

    return <div class={`${empty ? "block group-disabled:hidden" : ""} bg-neutral rounded-lg flex flex-col`}>
        <div class="flex flex-row justify-between items-center pe-2">
            <h1 class="py-1 px-2 text-neutral-content">Keyboard</h1>
            {editable ?
                <div class="ms-auto tooltip tooltip-left"
                    data-tip={`Click on the keys you use to highlight them.`}>
                    <i class="fa-solid fa-circle-info" />
                </div> : <></>
            }
        </div>
        <div class="flex flex-col gap-2 p-2 bg-base-300 rounded-lg grow">
            <div class="flex justify-center items-center h-36" id="keyboard_display">
                {keyboard?.layout === "k2" && <K2 keys={keyboard?.keys} />}
                {keyboard?.layout === "k3" && <K3 keys={keyboard?.keys} />}
                {keyboard?.layout === "k4" && <K4 keys={keyboard?.keys} />}
                {keyboard?.layout === "k60" && <K60 keys={keyboard?.keys} />}
                {keyboard?.layout === "k75" && <K75 keys={keyboard?.keys} />}
                {keyboard?.layout === "ktkl" && <KTkl keys={keyboard?.keys} />}
                {keyboard?.layout === "kfull" && <KFull keys={keyboard?.keys} />}
            </div>
            <div class="flex flex-col gap-2 grow">
                <label class="form-control">
                    <div class="label">
                        <span class="label-text">Name:</span>
                    </div>
                    <input id="keyboard_name" name="keyboard_name"
                        type="text" placeholder="Keyboard name"
                        class="input input-sm input-bordered peer disabled:hidden w-full" value={keyboard?.name || ""} />
                    <span class="input input-sm bg-base-300 hidden peer-disabled:block">{keyboard?.name}</span>
                </label>
                <label class="form-control">
                    <div class="label">
                        <span class="label-text">Keyboard Layout:</span>
                    </div>
                    <select class="peer disabled:hidden w-full select select-bordered select-sm" name="keyboard_layout">
                        <option value="k0" selected={!keyboard?.layout}>None</option>
                        <option value="k2" selected={keyboard?.layout === "k2"}>2 Keys</option>
                        <option value="k3" selected={keyboard?.layout === "k3"}>3 Keys</option>
                        <option value="k4" selected={keyboard?.layout === "k4"}>4 Keys</option>
                        <option value="k60" selected={keyboard?.layout === "k60"}>60% Keyboard</option>
                        <option value="k75" selected={keyboard?.layout === "k75"}>75% Keyboard</option>
                        <option value="ktkl" selected={keyboard?.layout === "ktkl"}>Tenkeyless Keyboard</option>
                        <option value="kfull" selected={keyboard?.layout === "kfull"}>Full Keyboard</option>
                    </select>
                    <span class="input input-sm bg-base-300 hidden peer-disabled:block">
                        {keyboard?.layout === "k2" && "2 Keys"}
                        {keyboard?.layout === "k3" && "3 Keys"}
                        {keyboard?.layout === "k4" && "4 Keys"}
                        {keyboard?.layout === "k60" && "60% Keyboard"}
                        {keyboard?.layout === "k75" && "75% Keyboard"}
                        {keyboard?.layout === "ktkl" && "Tenkeyless Keyboard"}
                        {keyboard?.layout === "kfull" && "Full Keyboard"}
                    </span>
                </label>
                <fieldset disabled class="hidden" id="keyboard_store">
                    <div class="k0" />
                    <K2 keys={[]} />
                    <K3 keys={[]} />
                    <K4 keys={[]} />
                    <K60 keys={[]} />
                    <K75 keys={[]} />
                    <KTkl keys={[]} />
                    <KFull keys={[]} />
                </fieldset>
            </div>
        </div>
    </div>;
}

export default KeyboardDisplay;
