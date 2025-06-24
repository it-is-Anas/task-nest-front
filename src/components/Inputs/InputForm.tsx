import '../../style/Inputs.css';


type props = {
    label?: string,
    placeholder?: string,
    type?: string,
};

export default function InputForm({type='text',label='' , placeholder='label'}:props){
    return (
        <div className="g-input-form-box">
            <div className="g-input-label">{label}</div>
            <input className="g-input-form" placeholder={placeholder} type={type} />
        </div>
    );
}