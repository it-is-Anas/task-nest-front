import type { ReactNode } from 'react';

interface LoggingBtnProps {
    children: ReactNode;
    cls?: string,
}

export default function LoggingBtn({ children ,cls='' }: LoggingBtnProps) {
    return ( 
        <button className={"g-form-btn  "+cls} >
            {children}
        </button>
    );
}