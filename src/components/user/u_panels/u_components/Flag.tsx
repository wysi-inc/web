type Props = {
    name: string;
    code: string;
}

const Flag = (props: Props) => {

    let url;

    switch (props.code.toLowerCase()) {
        case "xx":
        case "cat":
            url = `/public/img/flags/${props.code.toLowerCase()}.jpg`;
            break;
        default:
            url = `https://flagcdn.com/h40/${props.code.toLowerCase()}.jpg`;
            break;
    }

    return (
        <div class="tooltip" data-tip={props.name}>
            <img src={url} class="h-5 w-7 rounded-sm outline outline-1 outline-base-300" />
        </div>
    );
}

export default Flag;
