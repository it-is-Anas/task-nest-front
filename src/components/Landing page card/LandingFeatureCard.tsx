import icon from '../../assets/system_picture/Landing page/feature icon/feat1.png';


export default function LandingFeatureCard(){

    return (
        <div className="feature-box">
            <img src={icon} alt="" className="icon" />
            <p className="title"> Security & Customization</p>
            <p className="desc">
                User Roles & Permissions
                Dark Mode / Themes
                Two-Factor Authentication
                Data Backup & Export Options
            </p>
        </div>
    );
}