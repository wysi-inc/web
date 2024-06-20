type Props = {
    name?: string;
    url?: string;
}

const SubdivisionFlag = ({ name, url }: Props) => {

    if (!name) return (<></>);

    return (
        <div class="tooltip" data-tip={name}>
            <img src={url} class="h-5 w-7 rounded-sm outline outline-1 outline-base-300" />
        </div>
    );
}

export default SubdivisionFlag;
