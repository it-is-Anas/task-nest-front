

type props = {
    icon: string,
    title: string,
    desc: string,
};

export default function LandingFeatureCard({icon='',title='',desc=''}:props){

    return (
        <div className="feature-box">
            <img src={icon} alt="" className="icon" />
            <p className="title"> {title}</p>
            <p className="desc">
                {desc}
            </p>
        </div>
    );
}