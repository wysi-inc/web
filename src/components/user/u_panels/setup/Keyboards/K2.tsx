import { Key, type KeyboardProps } from "../Keyboard";

function K2(p: KeyboardProps) {
    return <div class="p-1 border rounded-lg w-min k2">
        <div class="flex flex-row mb-3">
            <Key char={'Z'} code={'z'} keys={p.keys} width={1} />
            <Key char={'X'} code={'x'} keys={p.keys} width={1} />
        </div>
    </div>
}

export default K2;
