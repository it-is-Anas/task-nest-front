import type { ReactNode } from 'react';
import { Link, NavLink } from 'react-router-dom';
interface LoggingBtnProps {
    children: ReactNode;
    cls?: string,
    link?: boolean,
    navLink?: boolean,
    to?:string
}

export default function LoggingBtn({ children ,cls='' , link = false , to='/' }: LoggingBtnProps) {
    if(!link && !NavLink){
        return ( 
            <button className={"g-form-btn  "+cls} >
                {children}
            </button>
        );
    }else if(link){
        return ( 
            <Link to={to} className={"g-form-btn  "+cls} >
                {children}
            </Link>
        );
    }else{
        return (
            <NavLink to={to} className={({ isActive }) => (isActive ? 'g-form-btn  '+cls + ' active-link ': 'g-form-btn '+cls)}  >
                {children}
            </NavLink >
        );
    }
}