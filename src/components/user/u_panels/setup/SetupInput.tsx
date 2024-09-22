type Props = {
    id: string,
    name: string,
    editable: boolean,
    icon?: JSX.Element,
    value: number | string | null | undefined,
    measure?: string,
    type: "number" | "text",
}

const SetupInput = ({ id, name, editable, icon, value, measure, type }: Props) => {

    if (!editable && !value) return <></>;

    return (
        <label class={`${!value && type === "text" && "group-has-[:disabled]/setup:hidden"} flex input has-[:disabled]:bg-base-300 has-[:disabled]:border-0 input-sm input-bordered text-sm items-center gap-2`}>
            <span class="grow flex flex-row items-center gap-2">{icon}<span>{name}:</span></span>
            <input id={id} name={id} step="any"
                type={type} placeholder={type === "number" ? "0" : ""}
                class="peer disabled:hidden text-end w-full"
                value={value?.toString()} />
            <span class="hidden peer-disabled:block">{value}</span>
            {measure &&
                <span>{measure}</span>
            }
        </label>
    );
}

export default SetupInput;
