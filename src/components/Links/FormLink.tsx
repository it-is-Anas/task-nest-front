import { Link } from "react-router-dom";

type props = {
    to: string,
    text: string,
};

export default function FormLink({to='/',text='label'}:props){
    return (
        <Link to={to} className="g-form-link">{text}</Link>
    );
}