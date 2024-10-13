import { Key, type KeyboardProps } from "../KeyboardDisplay";

export const K2 = (p: KeyboardProps) => (
    <div class="p-1 outline outline-1 rounded-lg w-min">
        <div class="flex flex-row mb-3">
            <Key char={"Z"} code={"z"} keys={p.keys} width={1} />
            <Key char={"X"} code={"x"} keys={p.keys} width={1} />
        </div>
    </div>
);
