import type { ReactNode } from 'react';
import { Link, NavLink } from 'react-router-dom';
interface LoggingBtnProps {
    children: ReactNode;
    cls?: string,
    link?: boolean,
    navLink?: boolean,
    to?:string,
    onClick?:(e:React.FormEvent<HTMLFormElement>)=>void
}

export default function LoggingBtn({ children ,cls='' , navLink=false , link = false , to='/',onClick=()=>console.log('Default Function') }: LoggingBtnProps) {
    if(!link && !navLink){
        return ( 
            <button onClick={onClick} className={"g-form-btn  "+cls} >
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