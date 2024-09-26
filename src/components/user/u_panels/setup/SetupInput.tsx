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
        <label class={`${!value && type === "text" && "group-has-[:disabled]/setup:hidden"} input input-sm input-bordered flex items-center gap-2 text-sm has-[:disabled]:border-0 has-[:disabled]:bg-base-300`}>
            <span class="flex grow flex-row items-center gap-2">{icon}<span>{name}:</span></span>
            <input id={id} name={id} step="any"
                type={type} placeholder={type === "number" ? "0" : ""}
                class="peer w-full text-end disabled:hidden"
                value={value?.toString()} />
            <span class="hidden peer-disabled:block">{value}</span>
            {measure &&
                <span>{measure}</span>
            }
        </label>
    );
}

export default SetupInput;
