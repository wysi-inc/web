import type { Setup } from "@/src/models/User";
import KTkl from "./Keyboards/KTkl";
import KFull from "./Keyboards/KFull";
import K60 from "./Keyboards/K60";
import K75 from "./Keyboards/K75";
import K2 from "./Keyboards/K2";
import K3 from "./Keyboards/K3";
import K4 from "./Keyboards/K4";

export type KeyboardProps = {
    keys?: string[];
}

type KeyProps = {
    char: string,
    code: string,
    width: number,
    keys?: string[],
    height?: string,
}

export const Key = (p: KeyProps) => {
    return (
        <label class="m-0 p-0 rounded-sm cursor-pointer text-center border has-[:checked]:bg-secondary has-[:checked]:border-secondary has-[:checked]:bg-opacity-50"
            style={{
                fontSize: '0.5rem',
                width: `${p.width}rem`,
                height: p.height || '1rem',
                lineHeight: p.height || '1rem',
            }}>
            {p.char}
            <input name={`keyboard_key_${p.code}`} type="checkbox"
                checked={p.keys?.includes(p.code)} class="appearance-none"
            />
        </label>
    );
}

export const Empty = () => {
    return <div class="size-4" />
}


const Keyboard = ({ keyboard }: { keyboard: Setup["keyboard"] }) => {
    return <div class="bg-neutral rounded-lg flex flex-col">
        <h1 class="p-2">Keyboard</h1>
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
                    <span class="input input-sm bg-base-200 hidden peer-disabled:block">{keyboard?.name}</span>
                </label>
                <label class="form-control">
                    <div class="label">
                        <span class="label-text">Keyboard Layout:</span>
                    </div>
                    <select class="peer disabled:hidden w-full select select-bordered select-sm" name="keyboard_layout">
                        <option value="k2" selected={keyboard?.layout === "k2"}>2 Keys</option>
                        <option value="k3" selected={keyboard?.layout === "k3"}>3 Keys</option>
                        <option value="k4" selected={keyboard?.layout === "k4"}>4 Keys</option>
                        <option value="k60" selected={keyboard?.layout === "k60"}>60% Keyboard</option>
                        <option value="k75" selected={keyboard?.layout === "k75"}>75% Keyboard</option>
                        <option value="ktkl" selected={keyboard?.layout === "ktkl"}>Tenkeyless Keyboard</option>
                        <option value="kfull" selected={keyboard?.layout === "kfull"}>Full Keyboard</option>
                    </select>
                    <span class="input input-sm bg-base-200 hidden peer-disabled:block">
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

export default Keyboard;
