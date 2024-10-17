type Props = {
    id: string,
    name: string,
    editable: boolean,
    icon?: JSX.Element,
    value: any,
    measure?: string,
    type: "number" | "text",
}

const SetupInput = ({ id, name, icon, value, measure, type }: Props) => (
    <label class="input input-sm input-bordered flex h-6 items-center gap-2 px-2 
        text-sm has-[:disabled]:border-0 has-[:disabled]:bg-base-300 group-has-[:disabled]/setup:px-0">
        <div class="flex grow flex-row items-center gap-2 text-nowrap">{icon}<span>{name}:</span></div>
        <input id={id} name={id} step="any" type={type} value={value}
            placeholder={type === "number" ? "0" : undefined}
            class="peer w-full text-end text-base-content" />
        {measure ? <span>{measure}</span> : null}
    </label>
);

export default SetupInput;
