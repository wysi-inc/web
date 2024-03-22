import { Key, type KeyboardProps } from "../Keyboard";

function K60(p: KeyboardProps) {
    return <div class="p-1 border rounded-lg w-min k60">
        <div class="flex flex-row gap-1">
            <div class="flex flex-col">
                <div class="flex flex-row items-start">
                    <Key char={'esc'} code={'esc'} keys={p.keys} width={1} />
                    <Key char={'1'} code={'1'} keys={p.keys} width={1} />
                    <Key char={'2'} code={'2'} keys={p.keys} width={1} />
                    <Key char={'3'} code={'3'} keys={p.keys} width={1} />
                    <Key char={'4'} code={'4'} keys={p.keys} width={1} />
                    <Key char={'5'} code={'5'} keys={p.keys} width={1} />
                    <Key char={'6'} code={'6'} keys={p.keys} width={1} />
                    <Key char={'7'} code={'7'} keys={p.keys} width={1} />
                    <Key char={'8'} code={'8'} keys={p.keys} width={1} />
                    <Key char={'9'} code={'9'} keys={p.keys} width={1} />
                    <Key char={'0'} code={'0'} keys={p.keys} width={1} />
                    <Key char={'-'} code={'minus'} keys={p.keys} width={1} />
                    <Key char={'='} code={'equal'} keys={p.keys} width={1} />
                    <Key char={'⌫'} code={'back'} keys={p.keys} width={2} />
                </div>
                <div class="flex flex-row items-start">
                    <Key char={'↹'} code={'tab'} keys={p.keys} width={1.5} />
                    <Key char={'Q'} code={'q'} keys={p.keys} width={1} />
                    <Key char={'W'} code={'w'} keys={p.keys} width={1} />
                    <Key char={'E'} code={'e'} keys={p.keys} width={1} />
                    <Key char={'R'} code={'r'} keys={p.keys} width={1} />
                    <Key char={'T'} code={'t'} keys={p.keys} width={1} />
                    <Key char={'Y'} code={'y'} keys={p.keys} width={1} />
                    <Key char={'U'} code={'u'} keys={p.keys} width={1} />
                    <Key char={'I'} code={'i'} keys={p.keys} width={1} />
                    <Key char={'O'} code={'o'} keys={p.keys} width={1} />
                    <Key char={'P'} code={'p'} keys={p.keys} width={1} />
                    <Key char={'['} code={'openbracket'} keys={p.keys} width={1} />
                    <Key char={']'} code={'closebracket'} keys={p.keys} width={1} />
                    <Key char={'\\'} code={"backslash"} keys={p.keys} width={1.5} />
                </div>
                <div class="flex flex-row items-start">
                    <Key char={'⇪'} code={'caps'} keys={p.keys} width={1.75} />
                    <Key char={'A'} code={'a'} keys={p.keys} width={1} />
                    <Key char={'S'} code={'s'} keys={p.keys} width={1} />
                    <Key char={'D'} code={'d'} keys={p.keys} width={1} />
                    <Key char={'F'} code={'f'} keys={p.keys} width={1} />
                    <Key char={'G'} code={'g'} keys={p.keys} width={1} />
                    <Key char={'H'} code={'h'} keys={p.keys} width={1} />
                    <Key char={'J'} code={'j'} keys={p.keys} width={1} />
                    <Key char={'K'} code={'k'} keys={p.keys} width={1} />
                    <Key char={'L'} code={'l'} keys={p.keys} width={1} />
                    <Key char={';'} code={'semicolon'} keys={p.keys} width={1} />
                    <Key char={"'"} code={'singlequote'} keys={p.keys} width={1} />
                    <Key char={'⏎'} code={'enter'} keys={p.keys} width={2.25} />
                </div>
                <div class="flex flex-row items-start">
                    <Key char={'⇧'} code={'lshift'} keys={p.keys} width={2.25} />
                    <Key char={'Z'} code={'z'} keys={p.keys} width={1} />
                    <Key char={'X'} code={'x'} keys={p.keys} width={1} />
                    <Key char={'C'} code={'c'} keys={p.keys} width={1} />
                    <Key char={'V'} code={'v'} keys={p.keys} width={1} />
                    <Key char={'B'} code={'b'} keys={p.keys} width={1} />
                    <Key char={'N'} code={'n'} keys={p.keys} width={1} />
                    <Key char={'M'} code={'m'} keys={p.keys} width={1} />
                    <Key char={','} code={'comma'} keys={p.keys} width={1} />
                    <Key char={'.'} code={'dot'} keys={p.keys} width={1} />
                    <Key char={'/'} code={'slash'} keys={p.keys} width={1} />
                    <Key char={'⇧'} code={'shift'} keys={p.keys} width={2.75} />
                </div>
                <div class="flex flex-row items-start">
                    <Key char={'ctrl'} code={'lctrl'} keys={p.keys} width={1.25} />
                    <Key char={'win'} code={'lwin'} keys={p.keys} width={1.25} />
                    <Key char={'alt'} code={'lalt'} keys={p.keys} width={1.25} />
                    <Key char={' '} code={'space'} keys={p.keys} width={6.25} />
                    <Key char={'alt'} code={'ralt'} keys={p.keys} width={1.25} />
                    <Key char={'win'} code={'rwin'} keys={p.keys} width={1.25} />
                    <Key char={'fn'} code={'fn'} keys={p.keys} width={1.25} />
                    <Key char={'ctrl'} code={'rctrl'} keys={p.keys} width={1.25} />
                </div>
            </div>
        </div>
    </div>
}

export default K60;
