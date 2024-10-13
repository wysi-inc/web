import { Key, type KeyboardProps } from "../KeyboardDisplay";

export const K3 = (p: KeyboardProps) => (
    <div class="p-1 outline outline-1 rounded-lg w-min">
        <div class="flex flex-row mb-3">
            <Key char={"Z"} code={"z"} keys={p.keys} width={1} />
            <Key char={"X"} code={"x"} keys={p.keys} width={1} />
            <Key char={"C"} code={"c"} keys={p.keys} width={1} />
        </div>
    </div>
);

export const K3_Wooting_UwU = (p: KeyboardProps) => (
    <div class="flex flex-col outline outline-1 rounded-lg w-min">
        <span class="border-b h-2.5" />
        <div class="flex flex-col items-center py-1 px-1.5 gap-1.5">
            <div class="flex flex-row">
                <Key char={"Z"} code={"z"} keys={p.keys} width={1} />
                <Key char={"X"} code={"x"} keys={p.keys} width={1} />
                <Key char={"C"} code={"c"} keys={p.keys} width={1} />
            </div>
            <div class="flex flex-row items-center">
                <span class="w-2 h-1 outline outline-1 rounded-l-full" />
                <span class="w-2 h-1 outline outline-1" />
                <span class="w-2 h-1 outline outline-1 rounded-r-full" />
            </div>
        </div>
    </div>
);

export const K3_SayoDevice = (p: KeyboardProps) => (
    <div class="p-1 outline outline-1 rounded-md w-min flex flex-col gap-1">
        <div class="flex flex-row items-center">
            <div class="size-4 rounded-full outline outline-1 flex justify-center">
                <span class="h-1 border-l" />
            </div>
            <span class="w-4 h-2 mx-auto outline outline-1" />
        </div>
        <div class="flex flex-row">
            <Key char={"Z"} code={"z"} keys={p.keys} width={1} />
            <Key char={"X"} code={"x"} keys={p.keys} width={1} />
            <Key char={"C"} code={"c"} keys={p.keys} width={1} />
        </div>
    </div>
);
