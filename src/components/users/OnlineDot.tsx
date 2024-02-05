type Props = {
    online: boolean;
    size: number;
}

const OnlineDot = (props: Props) => {
    return (
        <div style={`height: ${props.size}px; width: ${props.size}px; border-radius: ${props.size}px; border-color: ${props.online ? '#45d845' : '#d84545'}; border-width: ${props.size / 7}px; border-style: solid;`}></div>
    )
}

export default OnlineDot;
