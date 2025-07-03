
import DashboardBtn from '../../components/Buttons/WorkSpace/DashboardBtn';
import ProjectIcon from '../../assets/system_picture/System icons/create project icon.png';
import TaskIcon from '../../assets/system_picture/System icons/create task icon.png';
import TeamIcon from '../../assets/system_picture/System icons/create team icon.png';
import MsgIcon from '../../assets/system_picture/System icons/create msg icon.png';
import WorkSpaceSelectedBox from '../../components/SelecetBox/WorkSpaceSelectedBox';
import WorkSpacePagination from '../../components/Pagination/WorkSpacePagination';

export default function UserDashboard(){
    return (
        <div className="work-space-page dashboard ">
            <div className="col-1">
                <DashboardBtn img={ProjectIcon} label='Create Project' subLabel='Organize task to your project' />
                <DashboardBtn img={TaskIcon} label='Create Task' subLabel='Organize task to your project' />
                <DashboardBtn img={TeamIcon} label='Create Team' subLabel='Organize task to your project' />
                <DashboardBtn img={MsgIcon} label='Create Message' subLabel='Organize task to your project' />
            </div>
            <div className="col-2">
                <div className="work-space_dashboard-filter-bar">
                    <p className="work-space-dashboard-filter-bar_head-line">History</p>
                    <div className="work-space-dashboard-filter-bar_filters">
                        <WorkSpaceSelectedBox />
                        <WorkSpaceSelectedBox />
                        <WorkSpaceSelectedBox />
                    </div>
                </div>
                <div className="work-space_dashboard-history-table">
                    <div className="work-space-dashboard-history-table_header">
                        <p className="work-space-dashboard-history-table-header_column">Id</p>
                        <p className="work-space-dashboard-history-table-header_column">ِAction</p>
                        <p className="work-space-dashboard-history-table-header_column">Doer</p>
                        <p className="work-space-dashboard-history-table-header_column">Date</p>
                        <p className="work-space-dashboard-history-table-header_column">Status</p>
                        <p className="work-space-dashboard-history-table-header_column">Note</p>
                    </div>
                    <div className="work-space-dashboard-history-table_row">
                        <p className="work-space-dashboard-history-table-row_cell">1</p>
                        <p className="work-space-dashboard-history-table-row_cell">create a project</p>
                        <p className="work-space-dashboard-history-table-row_cell">Anas al Homsani</p>
                        <p className="work-space-dashboard-history-table-row_cell">18/2/2022</p>
                        <p className="work-space-dashboard-history-table-row_cell">In process</p>
                        <p className="work-space-dashboard-history-table-row_cell">And as I begin to live. And I love you, I miss you ... </p>
                    </div>
                    <div className="work-space-dashboard-history-table_row">
                        <p className="work-space-dashboard-history-table-row_cell">1</p>
                        <p className="work-space-dashboard-history-table-row_cell">create a project</p>
                        <p className="work-space-dashboard-history-table-row_cell">Anas al Homsani</p>
                        <p className="work-space-dashboard-history-table-row_cell">18/2/2022</p>
                        <p className="work-space-dashboard-history-table-row_cell">In process</p>
                        <p className="work-space-dashboard-history-table-row_cell">And as I begin to live. And I love you, I miss you ... </p>
                    </div>
                    <div className="work-space-dashboard-history-table_row">
                        <p className="work-space-dashboard-history-table-row_cell">1</p>
                        <p className="work-space-dashboard-history-table-row_cell">create a project</p>
                        <p className="work-space-dashboard-history-table-row_cell">Anas al Homsani</p>
                        <p className="work-space-dashboard-history-table-row_cell">18/2/2022</p>
                        <p className="work-space-dashboard-history-table-row_cell">In process</p>
                        <p className="work-space-dashboard-history-table-row_cell">And as I begin to live. And I love you, I miss you ... </p>
                    </div>
                    <div className="work-space-dashboard-history-table_row">
                        <p className="work-space-dashboard-history-table-row_cell">1</p>
                        <p className="work-space-dashboard-history-table-row_cell">create a project</p>
                        <p className="work-space-dashboard-history-table-row_cell">Anas al Homsani</p>
                        <p className="work-space-dashboard-history-table-row_cell">18/2/2022</p>
                        <p className="work-space-dashboard-history-table-row_cell">In process</p>
                        <p className="work-space-dashboard-history-table-row_cell">And as I begin to live. And I love you, I miss you ... </p>
                    </div>
                    <div className="work-space-dashboard-history-table_row">
                        <p className="work-space-dashboard-history-table-row_cell">1</p>
                        <p className="work-space-dashboard-history-table-row_cell">create a project</p>
                        <p className="work-space-dashboard-history-table-row_cell">Anas al Homsani</p>
                        <p className="work-space-dashboard-history-table-row_cell">18/2/2022</p>
                        <p className="work-space-dashboard-history-table-row_cell">In process</p>
                        <p className="work-space-dashboard-history-table-row_cell">And as I begin to live. And I love you, I miss you ... </p>
                    </div>
                </div>
                <WorkSpacePagination />
            </div>
        </div>
    );
}