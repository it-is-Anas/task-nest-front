
import MayaKousaayaa from '../../assets/system_picture/System icons/mayaKousaayaa.jpg';
import MobileMenuIcon from '../../assets/system_picture/System icons/mobilemenu.png';
import CloseIcon from '../../assets/system_picture/System icons/closeIcon.png';

export default function 
InboxChatHeader({closeChat=()=>console.log('didn\'t initail')}:{closeChat:()=>void}){
    return (
        <header className="inbox-page-chat-column_chat-header">
            <img src={MayaKousaayaa} alt="" className="inbox-chat_img" />
            <div className="inbox-page-chat-column_chat-text">
                <p className="inbox-page-chat-column_chat-name">Maya Kousaayaa</p>
                <div className="inbox-page-chat-column_chat-connection">Online</div>
            </div>
            <img src={MobileMenuIcon} alt="" className="inbox-header_btn chat-icon" />
            <img onClick={closeChat} src={CloseIcon} alt="" className="inbox-header_btn chat-icon close-btn" />
        </header>
    );
}