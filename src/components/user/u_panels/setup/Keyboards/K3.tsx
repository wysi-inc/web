import { Key, type KeyboardProps } from "../KeyboardDisplay";

export const K3 = (p: KeyboardProps) => (
    <div class="w-min rounded-lg p-1 outline outline-1">
        <div class="mb-3 flex flex-row">
            <Key char={"Z"} code={"z"} keys={p.keys} width={1} />
            <Key char={"X"} code={"x"} keys={p.keys} width={1} />
            <Key char={"C"} code={"c"} keys={p.keys} width={1} />
        </div>
    </div>
);

export const K3_Wooting_UwU = (p: KeyboardProps) => (
    <div class="flex w-min flex-col rounded-lg outline outline-1">
        <span class="h-2.5 border-b" />
        <div class="flex flex-col items-center gap-1.5 px-1.5 py-1">
            <div class="flex flex-row">
                <Key char={"Z"} code={"z"} keys={p.keys} width={1} />
                <Key char={"X"} code={"x"} keys={p.keys} width={1} />
                <Key char={"C"} code={"c"} keys={p.keys} width={1} />
            </div>
            <div class="flex flex-row items-center">
                <span class="h-1 w-2 rounded-l-full outline outline-1" />
                <span class="h-1 w-2 outline outline-1" />
                <span class="h-1 w-2 rounded-r-full outline outline-1" />
            </div>
        </div>
    </div>
);

export const K3_SayoDevice = (p: KeyboardProps) => (
    <div class="flex w-min flex-col gap-1 rounded-md p-1 outline outline-1">
        <div class="flex flex-row items-center">
            <div class="flex size-4 justify-center rounded-full outline outline-1">
                <span class="h-1 border-l" />
            </div>
            <span class="mx-auto h-2 w-4 outline outline-1" />
        </div>
        <div class="flex flex-row">
            <Key char={"Z"} code={"z"} keys={p.keys} width={1} />
            <Key char={"X"} code={"x"} keys={p.keys} width={1} />
            <Key char={"C"} code={"c"} keys={p.keys} width={1} />
        </div>
    </div>
);
