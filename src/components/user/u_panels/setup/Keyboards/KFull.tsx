import { Empty, Key, type KeyboardProps } from "../KeyboardDisplay";

export const KFull = (p: KeyboardProps) => (
    <div class="p-1 outline outline-1 rounded-lg w-min">
        <div class="flex flex-row gap-1">
            <div class="flex flex-col">
                <div class="flex flex-row justify-between mb-1">
                    <div class="flex flex-row">
                        <Key char={'esc'} code={'esc'} keys={p.keys} width={1} />
                    </div>
                    <div class="flex flex-row">
                        <Key char={'f1'} code={'f1'} keys={p.keys} width={1} />
                        <Key char={'f2'} code={'f2'} keys={p.keys} width={1} />
                        <Key char={'f3'} code={'f3'} keys={p.keys} width={1} />
                        <Key char={'f4'} code={'f4'} keys={p.keys} width={1} />
                    </div>
                    <div class="flex flex-row">
                        <Key char={'f5'} code={'f5'} keys={p.keys} width={1} />
                        <Key char={'f6'} code={'f6'} keys={p.keys} width={1} />
                        <Key char={'f7'} code={'f7'} keys={p.keys} width={1} />
                        <Key char={'f8'} code={'f8'} keys={p.keys} width={1} />
                    </div>
                    <div class="flex flex-row">
                        <Key char={'f9'} code={'f9'} keys={p.keys} width={1} />
                        <Key char={'f10'} code={'f10'} keys={p.keys} width={1} />
                        <Key char={'f11'} code={'f11'} keys={p.keys} width={1} />
                        <Key char={'f12'} code={'f12'} keys={p.keys} width={1} />
                    </div>
                </div>
                <div class="flex flex-row items-start">
                    <Key char={'~'} code={'tilde'} keys={p.keys} width={1} />
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
            <div class="flex flex-col">
                <div class="flex flex-row items-start mb-1">
                    <Key char={'pt'} code={'prt'} keys={p.keys} width={1} />
                    <Key char={'lk'} code={'slk'} keys={p.keys} width={1} />
                    <Key char={'pa'} code={'pause'} keys={p.keys} width={1} />
                </div>
                <div class="flex flex-row items-start">
                    <Key char={'in'} code={'ins'} keys={p.keys} width={1} />
                    <Key char={'hm'} code={'home'} keys={p.keys} width={1} />
                    <Key char={'pu'} code={'pgpu'} keys={p.keys} width={1} />
                </div>
                <div class="flex flex-row items-start">
                    <Key char={'dl'} code={'del'} keys={p.keys} width={1} />
                    <Key char={'en'} code={'end'} keys={p.keys} width={1} />
                    <Key char={'pd'} code={'pdw'} keys={p.keys} width={1} />
                </div>
                <div class="flex flex-row items-start">
                    <Empty />
                </div>
                <div class="flex flex-row items-start">
                    <Empty />
                    <Key char={'↑'} code={'uparr'} keys={p.keys} width={1} />
                    <Empty />
                </div>
                <div class="flex flex-row items-start">
                    <Key char={'←'} code={'larr'} keys={p.keys} width={1} />
                    <Key char={'↓'} code={'darr'} keys={p.keys} width={1} />
                    <Key char={'→'} code={'rarr'} keys={p.keys} width={1} />
                </div>
            </div>
            <div class="flex flex-row">
                <div class="flex flex-col">
                    <div class="flex flex-row items-start mb-1">
                        <Empty />
                    </div>
                    <div class="flex flex-row items-start">
                        <Key char={'·'} code={'nlk'} keys={p.keys} width={1} />
                        <Key char={'÷'} code={'ndiv'} keys={p.keys} width={1} />
                        <Key char={'x'} code={'nmul'} keys={p.keys} width={1} />
                    </div>
                    <div class="flex flex-row items-start">
                        <Key char={'7'} code={'n7'} keys={p.keys} width={1} />
                        <Key char={'8'} code={'n8'} keys={p.keys} width={1} />
                        <Key char={'9'} code={'n9'} keys={p.keys} width={1} />
                    </div>
                    <div class="flex flex-row items-start">
                        <Key char={'4'} code={'n4'} keys={p.keys} width={1} />
                        <Key char={'5'} code={'n5'} keys={p.keys} width={1} />
                        <Key char={'6'} code={'n6'} keys={p.keys} width={1} />
                    </div>
                    <div class="flex flex-row items-start">
                        <Key char={'1'} code={'n1'} keys={p.keys} width={1} />
                        <Key char={'2'} code={'n2'} keys={p.keys} width={1} />
                        <Key char={'3'} code={'n3'} keys={p.keys} width={1} />
                    </div>
                    <div class="flex flex-row items-start">
                        <Key char={'0'} code={'n0'} keys={p.keys} width={2} />
                        <Key char={'.'} code={'ndot'} keys={p.keys} width={1} />
                    </div>
                </div>
                <div class="flex flex-col">
                    <div class="flex flex-row items-start mb-1">
                        <Empty />
                    </div>
                    <div class="flex flex-row items-start">
                        <Key char={'-'} code={'nmin'} keys={p.keys} width={1} />
                    </div>
                    <Key char={'+'} code={'nplus'} keys={p.keys} width={1} height={2} />
                    <Key char={'⏎'} code={'nenter'} keys={p.keys} width={1} height={2} />
                </div>
            </div>
        </div>
    </div>
);
