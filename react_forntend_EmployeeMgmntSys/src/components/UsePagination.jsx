import { useState } from "react";


const BASE_URL = "http://localhost:8888/api/v1/employees";
const UsePagination =()=>{
    const [currentPage,setCurrentPage] = useState(1)
    const recordsPerPage =5;
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const records = BASE_URL.slice(firstIndex, lastIndex);
    const npage = Math.ceil(BASE_URL.length / recordsPerPage);
    const numbers = [...Array(npage + 1).keys()].slice(1)


    return(
        <div>
            <nav>
                <ul className="pagination">
                    <li className="page-item">
                        <a href="#" className="page-link" onClick={prePage}>Prev</a>
                    </li>
                    {
                        numbers.map((n,i) => (
                            <li className={`page-item ${currentPage === n ? 'active': ' ' }`} key={i}>
                                <a href="#" className="page-link" onClick={() => changeCPage(n)}>{n}</a>
                            </li>
                        ))
                    }
                    <li className="page-item">
                        <a href="#" className="page-link" onClick={nextPage}>Next</a>
                    </li>

                </ul>
            </nav>
        </div>

    )

    function prePage(){
        if(currentPage !== 1){
            setCurrentPage(currentPage -1)
        }
    }

    function changeCPage(id){
      setCurrentPage(id)

    }
    function nextPage(){
        if(currentPage !== npage){
            setCurrentPage(currentPage + 1)
        }

    }
}

export default UsePagination;