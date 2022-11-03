import "../../Styles/Paginator.css"

function Paginator() {
    return (
      <center>   
            <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
                <li className="page-item ">
                <span className="page-link" aria-hidden="true">&laquo;</span>
                </li>
                <li className="page-item"><a className="page-link" href="#">1</a></li>
                <li className="page-item"><a className="page-link" href="#">2</a></li>
                <li className="page-item"><a className="page-link" href="#">3</a></li>
                 <li className="page-item">
                            <span className="page-link" aria-hidden="true">&raquo;</span>
                            
                </li>
            </ul>
            </nav>
      </center>
    );  }
  
  export default Paginator;
