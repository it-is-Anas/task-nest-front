

type props = {
    cls?: string,
};

export default function WorkSpaceSeachBox({cls=''}:props){
    return (
        <div className={"flex-center work-space-search-box " + cls}>
            <input type="text" placeholder="search" />
        </div>
    );
}