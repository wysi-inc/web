import { Key, type KeyboardProps } from "../KeyboardDisplay";

export const K4 = (p: KeyboardProps) => (
    <div class="w-min rounded-lg p-1 outline outline-1">
        <div class="mb-3 flex flex-row">
            <Key char={"Z"} code={"z"} keys={p.keys} width={1} />
            <Key char={"X"} code={"x"} keys={p.keys} width={1} />
            <Key char={"C"} code={"c"} keys={p.keys} width={1} />
            <Key char={"V"} code={"v"} keys={p.keys} width={1} />
        </div>
    </div>
);
