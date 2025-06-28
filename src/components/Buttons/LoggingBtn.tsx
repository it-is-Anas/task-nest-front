import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
interface LoggingBtnProps {
    children: ReactNode;
    cls?: string,
    link?: boolean,
    to?:string
}

export default function LoggingBtn({ children ,cls='' , link = false , to='/' }: LoggingBtnProps) {
    if(!link){
        return ( 
            <button className={"g-form-btn  "+cls} >
                {children}
            </button>
        );
    }else{
        return ( 
            <Link to={to} className={"g-form-btn  "+cls} >
                {children}
            </Link>
        );
    }
}