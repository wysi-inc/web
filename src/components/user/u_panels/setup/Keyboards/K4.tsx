import { Key, type KeyboardProps } from "../Keyboard";

function K4(p: KeyboardProps) {
    return <div class="p-1 border rounded-lg w-min k4">
        <div class="flex flex-row mb-3">
            <Key char={'Z'} code={'z'} keys={p.keys} width={1} />
            <Key char={'X'} code={'x'} keys={p.keys} width={1} />
            <Key char={'C'} code={'c'} keys={p.keys} width={1} />
            <Key char={'V'} code={'v'} keys={p.keys} width={1} />
        </div>
    </div>
}

export default K4;
