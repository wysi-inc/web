const SetupInput = (p: {
    id: string,
    name: string,
    editable: boolean,
    icon?: JSX.Element,
    value: any,
    measure?: string,
    type: "number" | "text",
}) => (
    <label class="input input-sm input-bordered flex h-6 items-center gap-2 px-2 
        text-sm has-[:disabled]:border-0 has-[:disabled]:bg-base-300 group-has-[:disabled]/setup:px-0">
        <div class="flex grow flex-row items-center gap-2 text-nowrap">
            {p.icon}
            <span data-measure={p.measure ? ` (${p.measure}):` : ":"} class="after:text-xs after:content-[attr(data-measure)]">
                {p.name}
            </span>
        </div>
        <input id={p.id} name={p.id} step="any" type={p.type} value={p.value}
            placeholder={p.type === "number" ? "0" : undefined}
            class="w-full text-start text-base-content" />
    </label>
);

export default SetupInput;
