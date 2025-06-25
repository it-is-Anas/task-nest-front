
type props = {
    headline: string,
    subHeadline: string,
};

export default function SectionHeadLine({headline= '', subHeadline=''}:props){
    return (
        <div className="section-head-line">
            <p className="sub-head-line">{subHeadline}</p>
            <p className="head-line">{headline}</p>
        </div>
    );
}