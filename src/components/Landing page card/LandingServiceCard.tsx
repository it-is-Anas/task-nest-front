type props = {
    img?: string,
    label?: string,
};

export default function LandingServiceCard({img= '' , label= ''}:props){
    return (
        <div className="landing-service-card">
            <img src={img} alt="" className="landing-service-card_img" />
            <p className="landing-service-card_label">{label}</p>
        </div>
    );
}