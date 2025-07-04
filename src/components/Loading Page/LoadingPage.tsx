
interface props {
    opened: boolean
};
export default function LoadingPage({opened=false}:props){
    const cls = opened?' open ':'';
    return (
        <div className={"g-loading-page" + cls}>
            <div className="g-loader"></div>
        </div>
    );
}