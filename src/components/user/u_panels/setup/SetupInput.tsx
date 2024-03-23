type Props = {
    id: string,
    name: string,
    icon?: JSX.Element,
    value: number | string | null | undefined,
    measure?: string,
    type: "number" | "text",
}

const SetupInput = (props: Props) => {
    return (
        <label class="input has-[:disabled]:bg-base-200 has-[:disabled]:border-0 input-sm input-bordered flex text-sm items-center gap-2">
            <span class="grow flex flex-row items-center gap-2">{props.icon}<span>{props.name}:</span></span>
            <input id={props.id} name={props.id}
                type={props.type} placeholder={props.type === "number" ? "0" : ""}
                class="peer disabled:hidden text-end w-full"
                value={props.value?.toString()} />
            <span class="hidden peer-disabled:block">{props.value}</span>
            {props.measure &&
                <span>{props.measure}</span>
            }
        </label>
    );
}

export default SetupInput;
