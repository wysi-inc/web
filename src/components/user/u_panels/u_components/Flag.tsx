type Props = {
    name: string;
    code: string;
}

const Flag = ({ name, code }: Props) => {

    const url = `https://flagcdn.com/h40/${code.toLowerCase()}.webp`;

    return (
        <div class="tooltip flex items-center justify-center h-5 w-7" data-tip={name}>
            <img src={url} alt={`${name}'s flag`} loading="lazy"
                class="max-h-5 max-w-7 rounded-sm drop-shadow-solid" />
        </div>
    );
}

export default Flag;
