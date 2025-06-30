import MobileMenuShell from "../../shellComponents/MobileMenu/MobileMenuShell";


export default function MobileSearchMenu({setOpenFun}:{setOpenFun:(func:()=>void)=>void}){


    
    const childreen = (
        <div className="mobile-menu" >
            <input type="text" placeholder="Search" className="mobile-search-menu_search-input" />
            <div className="mobile-search-menu_old-searches-box">
                {
                    [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50].map((item, index)=>(
                        <p key={index} className="mobile-search-menu_old-search" >{`Old search ${index + 1}`}</p>
                    ))
                }
            </div>    
        </div>
    );

    return (
        <div className="" >
            <MobileMenuShell getOpenPop={setOpenFun} childreen={childreen} />
        </div>
    );
}