

type props = {
    label?: string,
    placeholder?: string,
    label2?: string,
    placeholder2?: string,
    type?: string,
    value?: string,
    setValue?: (newValue: string)=>void,
    value1?: string,
    setValue1?: (newValue: string)=>void,
};

export default function DoubleInputForm({type='text',label='' , placeholder='label',label2='' , placeholder2='',value,setValue=()=>console.log('hello') ,value1 , setValue1=()=>console.log('hello')}:props){
    function updateValue(e){
        
        if(setValue){
            setValue(e.target.value);
        }
    }

    return (
        <div className="g-input-double-box">
            <div className="g-input-form-box">
                <div className="g-input-label">{label}</div>
                <input value={value} onChange={e=>setValue(e.target.value)} className="g-input-form" placeholder={placeholder} type={type} />
            </div>
            <div className="g-input-form-box">
                <div className="g-input-label">{label2}</div>
                <input value={value1} onChange={e=>setValue1(e.target.value)}  className="g-input-form" placeholder={placeholder2} type={type} />
            </div>
        </div>
    );
}