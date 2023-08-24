type buttonprop = {
    label1: string;
    Click: () => void;
}


function Button(props: buttonprop) {
    const { label1, Click } = props;
    return (
        <button value={label1} onClick={Click}>{label1}</button>
    )
}
export default Button;
