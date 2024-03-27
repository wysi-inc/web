type Props = {
    level: number;
}
const Supporter = ({ level }: Props) => {
    return <>
        <div class="badge text-white border-none flex flex-row" style={{
            backgroundColor: "#fe78c7",
            gap: ".08rem",
        }}>
            {[...Array(level)].map(() =>
                <i class="fa-solid fa-heart" />)}
        </div>
    </>;
}

export default Supporter;
