import filterIcon from '../../assets/system_picture/System icons/filterIcon.png';
import searchIcon from '../../assets/system_picture/System icons/icons8-search-100.png';
export default function InboxHeader(){
    return (
        <header className="inbox-header" >
            <p className="inbox-header_logo">Inbox</p>
            <div className="inbox-header_btns">
                <img src={searchIcon} alt="" className="inbox-header_btn" />
                <img src={filterIcon} alt="" className="inbox-header_btn" />
            </div>
        </header>
    );
}

