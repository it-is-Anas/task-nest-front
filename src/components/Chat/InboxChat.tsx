import MayaKousaayaa from '../../assets/system_picture/System icons/mayaKousaayaa.jpg';

export default function InboxChat(){
    return (
        <div className="inbox-chat">
            <img src={MayaKousaayaa} alt="" className="inbox-chat_img" />
            <div className="inbox-chat_text">
                <p className="inbox-chat-text_name">Maya Kousaa</p>
                <p className="inbox-chat-text_chat">Hello how you doing ? ....</p>
                <p className="inbox-chat-text_date">5m ago</p>
            </div>
        </div>
    );
}