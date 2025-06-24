

type props = {
    label?: string,
    placeholder?: string,
    label2?: string,
    placeholder2?: string,
    type?: string,

};

export default function DoubleInputForm({type='text',label='' , placeholder='label',label2='' , placeholder2='',}:props){
    return (
        <div className="g-input-double-box">
            <div className="g-input-form-box">
                <div className="g-input-label">{label}</div>
                <input className="g-input-form" placeholder={placeholder} type={type} />
            </div>
            <div className="g-input-form-box">
                <div className="g-input-label">{label2}</div>
                <input className="g-input-form" placeholder={placeholder2} type={type} />
            </div>
        </div>
    );
}