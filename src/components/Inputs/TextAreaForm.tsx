

type props = {
    label?: string,
    placeholder?: string,
    type?: string,
};

export default function TextAreaForm({label='' , placeholder='label'}:props){
    return (
        <div className="g-input-form-box">
            <div className="g-input-label">{label}</div>
            <textarea className="g-input-form g-text-area-form" placeholder={placeholder}  ></textarea>
        </div>
    );
}