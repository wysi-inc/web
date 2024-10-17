type Props = {
    level: number;
}
const Supporter = ({ level }: Props) => {
    return <>
        <div class="badge flex flex-row border-none bg-pink-400 text-white" style={{
            gap: ".08rem",
        }}>
            {[...Array(level)].map(() =>
                <i class="fa-solid fa-heart" />)}
        </div>
    </>;
}

export default Supporter;
