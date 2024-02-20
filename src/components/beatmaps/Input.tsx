type Props = {
    name: string;
    placeholder: string;
}
const Input = (props: Props) => {
    return (
        <label class="form-control w-full">
            <div class="label">
                <span class="label-text">{props.name}</span>
            </div>
            <input type="text" name={props.name.toLowerCase()} placeholder={props.placeholder} class="input input-bordered w-full" />
        </label>
    );
}

export default Input;
