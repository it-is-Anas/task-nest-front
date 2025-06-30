import { useEffect, useState } from "react";

export default function MobileMenuShell({getOpenPop=null , childreen=null }:{getOpenPop : null|((func:()=>void)=> void),childreen:null|React.ReactNode}){

    const [state,setState] = useState(false);
    const cls = state?'mobile-menu-shell opened ':'mobile-menu-shell';  

    const openPop = ()=>setState(true);
    const closePop = ()=>setState(false);

    useEffect(()=>{
        if(getOpenPop){
            getOpenPop(openPop);
        }
    },[getOpenPop]);

    return (
        <div  className={cls} > 
            <p onClick={closePop}  className="mobile-menu-shell_close-btn" >{'<'}</p>
            { childreen }
        </div>
    );
}