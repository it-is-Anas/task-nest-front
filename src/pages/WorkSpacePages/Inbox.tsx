import InboxChat from "../../components/Chat/InboxChat";
import InboxFilterBar from "../../components/FilterBar/InboxFilterBar";
import InboxHeader from "../../components/Headers/InboxHeader";
import PlaneIcon from '../../assets/system_picture/System icons/plane.png';
import AttachIcon from '../../assets/system_picture/System icons/attach.png';
import SentMsg from "../../components/Chat/SentMsg";
import RecivedMsg from "../../components/Chat/RecivedMsg";
import MsgDate from "../../components/Chat/MsgDate";
import { useEffect, useState } from "react";
import InboxChatHeader from "../../components/Headers/InboxChatHeader";


export default function UserInbox(){
    
    function setScroll() {
    const scrollBox = document.getElementById('scrollBox');
        if (scrollBox) {
        scrollBox.scrollTop = scrollBox.scrollHeight;
        }
    }

    

    const [opened,setOpened] = useState<boolean>(false);
    const openedChat = opened?'inbox-page_chat-column opened':'inbox-page_chat-column';

    useEffect(() => {
        if(opened)
            setScroll();
    }, [opened]);

    function openChat(){
        setOpened(true);
    }
    function closeChat(){
        setOpened(!true);
    }
    
    return (
        <div className="work-space-page inbox-page">
            <div className="inbox-page_chats-column">
                <InboxHeader />
                <InboxFilterBar />
                <div className="inbox-page_chats-box" onClick={openChat}>
                    <InboxChat />
                    <InboxChat />
                    <InboxChat />
                    <InboxChat />
                    <InboxChat />
                    <InboxChat />
                    <InboxChat />
                    <InboxChat />
                    <InboxChat />
                    <InboxChat />
                    <InboxChat />
                    <InboxChat />
                    <InboxChat />
                    <InboxChat />
                </div>
            </div>
            <div className={openedChat}>
                <InboxChatHeader closeChat={closeChat} />
                <div id='scrollBox' className="inbox-page-chat-column_chat-body">
                    <MsgDate />
                    <RecivedMsg />
                    <SentMsg />
                    <MsgDate />
                    <SentMsg />
                    <RecivedMsg />
                    <SentMsg />
                    <MsgDate />
                    <RecivedMsg />
                    <SentMsg />
                </div>
                <div className="inbox-page-chat-column_chat-msg-sender">
                    <img src={AttachIcon} alt="" className="inbox-header_btn " />
                    <input placeholder="Type A Message" className="inbox-page-chat-column-chat-msg-sender_input" type="text" />
                    <img src={PlaneIcon} alt="" className="inbox-header_btn plane-icon" />
                </div>
            </div>
        </div>
        
    );
}