

type props = {
    label?: string,
    placeholder?: string,
    type?: string,
    value?: string,
    setValue?: (newValue:string)=>void,
};

export default function InputForm({type='text',label='' , placeholder='label' , value , setValue=()=>console.log('hello')}:props){
    return (
        <div className="g-input-form-box">
            <div className="g-input-label">{label}</div>
            <input value={value} onChange={e=>setValue(e.target.value)} className="g-input-form" placeholder={placeholder} type={type} />
        </div>
    );
}