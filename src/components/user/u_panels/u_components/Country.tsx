type Props = {
    code: string;
    name: string;
}

const Country = ({ code, name }: Props) => {
    return <div class="tooltip" data-tip={name}>
        <div class="size-6 bg-base-content"
            style={{
                maskImage: `url("/public/img/countries/${code.toLowerCase()}.svg")`,
                maskSize: "contain",
                maskPosition: "center",
                maskRepeat: "no-repeat",
            }}
        />
    </div>;
};

export default Country;
