type Props = {
    title: string | undefined,
    filter: string[],
    sort: string[],
    mode: string[],
    status: string[],
    limit: number,
    offset: number
}

const BeatmapsList = (props: Props) => {

    const url = `https://catboy.best/api/v2/search?q=${props.title}${props.filter.length > 0 ? `[${props.filter}]` : ""}${props.sort.length > 0 ? `&sort=${props.sort.join("&sort=")}` : ""}&m=${props.mode.join("&m=")}&status=${props.status.join("&status=")}&limit=${props.limit}&offset=${props.offset}`;

    return (
        <div>list</div>
    )
}

export default BeatmapsList;