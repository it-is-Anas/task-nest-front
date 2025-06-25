import picture from '../../assets/system_picture/Landing page/Service picture/Enthusiastic-pana.png';

export default function LandingServiceCard(){
    return (
        <div className="landing-service-card">
            <img src={picture} alt="" className="landing-service-card_img" />
            <p className="landing-service-card_label">label</p>
        </div>
    );
}