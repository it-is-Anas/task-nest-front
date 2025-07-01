
import DashboardBtn from '../../components/Buttons/WorkSpace/DashboardBtn';
import ProjectIcon from '../../assets/system_picture/System icons/create project icon.png';
import TaskIcon from '../../assets/system_picture/System icons/create task icon.png';
import TeamIcon from '../../assets/system_picture/System icons/create team icon.png';
import MsgIcon from '../../assets/system_picture/System icons/create msg icon.png';

export default function UserDashboard(){
    return (
        <div className="work-space-page dashboard ">
            <div className="col-1">
                <DashboardBtn img={ProjectIcon} label='Create Project' subLabel='Organize task to your project' />
                <DashboardBtn img={TaskIcon} label='Create Task' subLabel='Organize task to your project' />
                <DashboardBtn img={TeamIcon} label='Create Team' subLabel='Organize task to your project' />
                <DashboardBtn img={MsgIcon} label='Create Message' subLabel='Organize task to your project' />
            </div>
            <div className="col-2"></div>
        </div>
    );
}