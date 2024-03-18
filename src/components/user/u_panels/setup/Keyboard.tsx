import type { Setup } from "@/src/models/User";

type KeyProps = {
    char: string,
    code: string,
    width: number,
    keys: string[],
}

const Key = (p: KeyProps) => {
    return (
        <kbd class={`h-4 border text-center text-xs rounded-md ${p.keys.includes(p.code) && 'bg-opacity-50 border-secondary bg-secondary'}`}
            style={{
                width: `${p.width}rem`,
                lineHeight: `1rem`,
            }}>
            {p.char}
        </kbd>
    );
}

const Empty = () => {
    return <div class="size-4" />
}

type Props = {
    keyboard: Setup["keyboard"];
}

const Keyboard = (p: Props) => {
    const keys = p.keyboard?.keys;
    if (!keys) return <div>No keyboard found</div>;
    return (<div>
        <h1>Keyboard</h1>
        <div class="flex flex-col justify-center">
            <div class="p-1 border rounded-lg w-min">
                <div class="flex flex-row gap-1">
                    <div class="flex flex-col">
                        <div class="flex flex-row items-start mb-1">
                            <Key char={'esc'} code={'esc'} keys={keys} width={1} />
                            <div class="mx-auto" />
                            <Key char={'f1'} code={'f1'} keys={keys} width={1} />
                            <Key char={'f2'} code={'f2'} keys={keys} width={1} />
                            <Key char={'f3'} code={'f3'} keys={keys} width={1} />
                            <Key char={'f4'} code={'f4'} keys={keys} width={1} />
                            <div class="mx-auto" />
                            <Key char={'f5'} code={'f5'} keys={keys} width={1} />
                            <Key char={'f6'} code={'f6'} keys={keys} width={1} />
                            <Key char={'f7'} code={'f7'} keys={keys} width={1} />
                            <Key char={'f8'} code={'f8'} keys={keys} width={1} />
                            <div class="mx-auto" />
                            <Key char={'f9'} code={'f9'} keys={keys} width={1} />
                            <Key char={'f10'} code={'f10'} keys={keys} width={1} />
                            <Key char={'f11'} code={'f11'} keys={keys} width={1} />
                            <Key char={'f12'} code={'f12'} keys={keys} width={1} />
                        </div>
                        <div class="flex flex-row items-start">
                            <Key char={'~'} code={'tilde'} keys={keys} width={1} />
                            <Key char={'1'} code={'1'} keys={keys} width={1} />
                            <Key char={'2'} code={'2'} keys={keys} width={1} />
                            <Key char={'3'} code={'3'} keys={keys} width={1} />
                            <Key char={'4'} code={'4'} keys={keys} width={1} />
                            <Key char={'5'} code={'5'} keys={keys} width={1} />
                            <Key char={'6'} code={'6'} keys={keys} width={1} />
                            <Key char={'7'} code={'7'} keys={keys} width={1} />
                            <Key char={'8'} code={'8'} keys={keys} width={1} />
                            <Key char={'9'} code={'9'} keys={keys} width={1} />
                            <Key char={'0'} code={'0'} keys={keys} width={1} />
                            <Key char={'-'} code={'minus'} keys={keys} width={1} />
                            <Key char={'='} code={'equal'} keys={keys} width={1} />
                            <Key char={'⌫'} code={'back'} keys={keys} width={2} />
                        </div>
                        <div class="flex flex-row items-start">
                            <Key char={'↹'} code={'tab'} keys={keys} width={1.5} />
                            <Key char={'q'} code={'q'} keys={keys} width={1} />
                            <Key char={'w'} code={'w'} keys={keys} width={1} />
                            <Key char={'e'} code={'e'} keys={keys} width={1} />
                            <Key char={'r'} code={'r'} keys={keys} width={1} />
                            <Key char={'t'} code={'t'} keys={keys} width={1} />
                            <Key char={'y'} code={'y'} keys={keys} width={1} />
                            <Key char={'u'} code={'u'} keys={keys} width={1} />
                            <Key char={'i'} code={'i'} keys={keys} width={1} />
                            <Key char={'o'} code={'o'} keys={keys} width={1} />
                            <Key char={'p'} code={'p'} keys={keys} width={1} />
                            <Key char={'['} code={'openbracket'} keys={keys} width={1} />
                            <Key char={']'} code={'closebracket'} keys={keys} width={1} />
                            <Key char={'\\'} code={"backslash"} keys={keys} width={1.5} />
                        </div>
                        <div class="flex flex-row items-start">
                            <Key char={'⇪'} code={'caps'} keys={keys} width={1.75} />
                            <Key char={'a'} code={'a'} keys={keys} width={1} />
                            <Key char={'s'} code={'s'} keys={keys} width={1} />
                            <Key char={'d'} code={'d'} keys={keys} width={1} />
                            <Key char={'f'} code={'f'} keys={keys} width={1} />
                            <Key char={'g'} code={'g'} keys={keys} width={1} />
                            <Key char={'h'} code={'h'} keys={keys} width={1} />
                            <Key char={'j'} code={'j'} keys={keys} width={1} />
                            <Key char={'k'} code={'k'} keys={keys} width={1} />
                            <Key char={'l'} code={'l'} keys={keys} width={1} />
                            <Key char={';'} code={'semicolon'} keys={keys} width={1} />
                            <Key char={"'"} code={'singlequote'} keys={keys} width={1} />
                            <Key char={'⏎'} code={'enter'} keys={keys} width={2.25} />
                        </div>
                        <div class="flex flex-row items-start">
                            <Key char={'⇧'} code={'lshift'} keys={keys} width={2.25} />
                            <Key char={'z'} code={'z'} keys={keys} width={1} />
                            <Key char={'x'} code={'x'} keys={keys} width={1} />
                            <Key char={'c'} code={'c'} keys={keys} width={1} />
                            <Key char={'v'} code={'v'} keys={keys} width={1} />
                            <Key char={'b'} code={'b'} keys={keys} width={1} />
                            <Key char={'n'} code={'n'} keys={keys} width={1} />
                            <Key char={'m'} code={'m'} keys={keys} width={1} />
                            <Key char={','} code={'comma'} keys={keys} width={1} />
                            <Key char={'.'} code={'dot'} keys={keys} width={1} />
                            <Key char={'/'} code={'slash'} keys={keys} width={1} />
                            <Key char={'⇧'} code={'shift'} keys={keys} width={2.75} />
                        </div>
                        <div class="flex flex-row items-start">
                            <Key char={'ctrl'} code={'lctrl'} keys={keys} width={1.25} />
                            <Key char={'⌘'} code={'lwin'} keys={keys} width={1.25} />
                            <Key char={'alt'} code={'lalt'} keys={keys} width={1.25} />
                            <Key char={' '} code={'space'} keys={keys} width={6.25} />
                            <Key char={'alt'} code={'ralt'} keys={keys} width={1.25} />
                            <Key char={'⌘'} code={'rwin'} keys={keys} width={1.25} />
                            <Key char={'fn'} code={'fn'} keys={keys} width={1.25} />
                            <Key char={'ctrl'} code={'rctrl'} keys={keys} width={1.25} />
                        </div>
                    </div>
                    <div class="flex flex-col">
                        <div class="flex flex-row items-start mb-1">
                            <Key char={'·'} code={'prt'} keys={keys} width={1} />
                            <Key char={'·'} code={'slk'} keys={keys} width={1} />
                            <Key char={'·'} code={'pause'} keys={keys} width={1} />
                        </div>
                        <div class="flex flex-row items-start">
                            <Key char={'·'} code={'ins'} keys={keys} width={1} />
                            <Key char={'·'} code={'home'} keys={keys} width={1} />
                            <Key char={'·'} code={'pgpu'} keys={keys} width={1} />
                        </div>
                        <div class="flex flex-row items-start">
                            <Key char={'·'} code={'del'} keys={keys} width={1} />
                            <Key char={'·'} code={'end'} keys={keys} width={1} />
                            <Key char={'·'} code={'pdw'} keys={keys} width={1} />
                        </div>
                        <div class="flex flex-row items-start">
                            <Empty />
                        </div>
                        <div class="flex flex-row items-start">
                            <Empty />
                            <Key char={'↑'} code={'uparr'} keys={keys} width={1} />
                            <Empty />
                        </div>
                        <div class="flex flex-row items-start">
                            <Key char={'←'} code={'larr'} keys={keys} width={1} />
                            <Key char={'↓'} code={'darr'} keys={keys} width={1} />
                            <Key char={'→'} code={'rarr'} keys={keys} width={1} />
                        </div>
                    </div>
                    <div class="flex flex-col">
                        <div class="flex flex-row items-start mb-1">
                            <Empty />
                        </div>
                        <div class="flex flex-row items-start">
                            <Key char={'nlk'} code={'nlk'} keys={keys} width={1} />
                            <Key char={'÷'} code={'ndiv'} keys={keys} width={1} />
                            <Key char={'x'} code={'nmul'} keys={keys} width={1} />
                            <Key char={'-'} code={'nmin'} keys={keys} width={1} />
                        </div>
                        <div class="flex flex-row items-start">
                            <Key char={'7'} code={'n7'} keys={keys} width={1} />
                            <Key char={'8'} code={'n8'} keys={keys} width={1} />
                            <Key char={'9'} code={'n9'} keys={keys} width={1} />
                            <Key char={'+'} code={'nplus'} keys={keys} width={1} />
                        </div>
                        <div class="flex flex-row items-start">
                            <Key char={'4'} code={'n4'} keys={keys} width={1} />
                            <Key char={'5'} code={'n5'} keys={keys} width={1} />
                            <Key char={'6'} code={'n6'} keys={keys} width={1} />
                            <Key char={'+'} code={'nplus'} keys={keys} width={1} />
                        </div>
                        <div class="flex flex-row items-start">
                            <Key char={'1'} code={'n1'} keys={keys} width={1} />
                            <Key char={'2'} code={'n2'} keys={keys} width={1} />
                            <Key char={'3'} code={'n3'} keys={keys} width={1} />
                            <Key char={'en'} code={'nenter'} keys={keys} width={1} />
                        </div>
                        <div class="flex flex-row items-start">
                            <Key char={'0'} code={'n0'} keys={keys} width={2} />
                            <Key char={'.'} code={'ndot'} keys={keys} width={1} />
                            <Key char={'en'} code={'nenter'} keys={keys} width={1} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}

export default Keyboard;
