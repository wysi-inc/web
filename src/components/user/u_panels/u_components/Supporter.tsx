type Props = {
    level: number;
}
const Supporter = ({ level }: Props) => {
    return <>
        <div class="badge bg-pink-400 text-white border-none flex flex-row" style={{
            gap: ".08rem",
        }}>
            {[...Array(level)].map(() =>
                <i class="fa-solid fa-heart" />)}
        </div>
    </>;
}

export default Supporter;
