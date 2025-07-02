import MayaKousaayaa from '../../assets/system_picture/System icons/mayaKousaayaa.jpg';


export default function RecivedMsg(){
    return(
        <div className="inbox-page-chat-column_sender-chat">
            <div className="flex-center inbox-page-chat-column-my-chat_img">
                <img src={MayaKousaayaa} alt="" className="inbox-chat_img" />
            </div>
            <div className="col">
                <div className="row">
                    <p className="inbox-page-chat-column_text sender">Lorem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis reprehenderit mollitia repudiandae vel. Enim voluptas magni cupiditate tempora culpa voluptatibus cum, eaque officiis itaque. Nemo et molestias inventore exercitationem placeat! ipsum dolor sit amet consectetur adipisicing elit. Magni animi, provident aliquam voluptatum, alias eveniet, temporibus unde pariatur iure reprehenderit nulla. Incidunt nobis saepe obcaecati ipsum voluptas voluptate qui et!</p>
                    <p className="inbox-page-chat-column_hour sender">5:00 pm</p>
                </div>
                <div className="row"></div>
            </div>
        </div>
    );
}