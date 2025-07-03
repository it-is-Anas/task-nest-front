import PaginationBtn from "../Buttons/PaginationBtn";


export default function WorkSpacePagination(){
    return (
            <div className="work-space_dashboard-pagination-bar">
                <PaginationBtn label='Previous'  />
                    <p className="work-space_dashboard-pagination-bar_number avtive">1</p>
                    <p className="work-space_dashboard-pagination-bar_number">2</p>
                    <p className="work-space_dashboard-pagination-bar_number">3</p>
                <PaginationBtn label='Next'  />
            </div>
    );
}