function Alert(p: { type: "info" | "warning" | "error" | "success"; msg: string | JSX.Element }) {
    let icon;
    let color;

    switch (p.type) {
        case "info":
            icon = <i class="fa-solid fa-circle-info" />;
            color = "alert-info";
            break;
        case "warning":
            icon = <i class="fa-solid fa-triangle-exclamation" />;
            color = "alert-warning";
            break;
        case "error":
            icon = <i class="fa-regular fa-circle-xmark" />;
            color = "alert-error";
            break;
        case "success":
            icon = <i class="fa-regular fa-circle-check" />;
            color = "alert-success";
            break;
    }

    return (
        <>
            <div role="alert" class={`${color} alert px-4 py-2`}>
                {icon}
                <span>{p.msg}</span>
                <button class="btn btn-circle btn-ghost btn-xs" onclick="this.parentNode.remove()">
                    <i class="fa-solid fa-xmark" />
                </button>
            </div>
        </>
    );
}

export default Alert;
