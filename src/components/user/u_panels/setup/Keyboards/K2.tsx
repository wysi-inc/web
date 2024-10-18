import { Key, type KeyboardProps } from "../KeyboardDisplay";

export const K2 = (p: KeyboardProps) => (
    <div class="w-min rounded-lg p-1 outline outline-1">
        <div class="mb-3 flex flex-row">
            <Key char={"Z"} code={"z"} keys={p.keys} width={1} />
            <Key char={"X"} code={"x"} keys={p.keys} width={1} />
        </div>
    </div>
);
