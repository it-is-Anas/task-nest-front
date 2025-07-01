

export default function DashboardBtn({img,label,subLabel}:{img:string,label: string, subLabel: string}){
    return (
        <button className="dashboard-btn" >
            <img src={img} alt="" className="dashboard-btn_img" />
            <div className="dashboard-btn_labels">
                <p className="dashboard-btn_label">{ label }</p>
                <p className="dashboard-btn_sub-label">{ subLabel }</p>
            </div>
        </button>
    );
}