function Alert(p: {
    type: "info" | "warning" | "error" | "success";
    msg: string | JSX.Element;
}) {
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
        <div role="alert" class={`alert ${color}`}>
            {icon}
            <span>{p.msg}</span>
        </div>
    );
}

export default Alert;
