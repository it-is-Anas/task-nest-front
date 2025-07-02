
export default function PaginationBtn({label='label'}:{label:string}){
    return(
        <button className="pagination-btn" >
            { label }
        </button>
    );
}