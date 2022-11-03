import AdminCard from "./AdminCard";
import ReactPaginate from 'react-paginate';
import {useState,useEffect} from 'react';
import {getOurProduct2,getSearchData} from "../../axios";
import InputGroup from 'react-bootstrap/InputGroup';
import searchIcon from "../../Images/search-icon.png"
import Form from 'react-bootstrap/Form';
import addIcon from "../../Images/add-button.png"
import { Link } from "react-router-dom";
import { useNavigate  } from "react-router-dom";
import { useParams } from "react-router-dom"


function AdminCardFrame() {


    const navigate = useNavigate();

    const [items, setItems] = useState([])
    const [inputText, setInputText] = useState("");
    const [count, setCount] = useState(0);
    const [searchState, setSearchState] = useState(false);

    const { page } = useParams()

    const postPerPage = 9
    const PageCount =Math.ceil(count/ postPerPage);
   
    let inputHandler = (e) => {
        //convert input text to lower case
        var input = e.target.value;
        setInputText(input);
        };
        
  
    const ChangePage = ({ selected }) => {
        navigate(`/AdminPage/${selected+1}`);
    };

    async function fetchData2() {
        getOurProduct2({page})
        .then((res) => {
            setItems((res.data).items.model) 
            setCount((res.data).count.count)
        })
    }

    
    useEffect(()=>{
        if(searchState)
        {
            search() 
        }
        else
        {
            fetchData2() 
        }
    },[page])

    
    useEffect(()=>{

    },[items])


    function search(){
       
        setSearchState(true)

        getSearchData({inputText,page})
        .then((res) => {
            setItems((res.data).items.model) 
            setCount((res.data).count.count)

        })

        if(!searchState)
        navigate('/AdminPage/1')
       
        setSearchState(true)


    }


    return (
        (items !== undefined)? (<p>{
            <div className="container" >
                <div className="row" >
                    <div className="col-sm">               
                        <Link to={{pathname:`/YeniUrun`}} >
                            <button style={{width:200,textAlign:'center',marginBottom:'10px',marginTop:20,marginLeft:40,borderRadius:'10px',height:50,border:'1px solid  #2C89E7',backgroundColor: '#2C89E7',color:'white',padding:0,fontSize:18}}>
                                Yeni Ürün Ekle
                                <img src={addIcon} alt="add-icon" style={{width:30,height:30,float:'right',marginRight:15}}/>                       
                            </button>
                        </Link>
                    </div>
                    <div className="col-sm mt-5">
                        <InputGroup size="lg" >
                            <Form.Control style={{borderRadius:25,marginLeft:15}}
                            aria-label="Large"
                            aria-describedby="inputGroup-sizing-sm"
                            placeholder="Aradığınız ürünün ismini girin"
                            onChange={inputHandler}
                            />
                        </InputGroup>
                    </div>
                    <div className="col-sm">
                        <div className=" d-inline-flex">      
                            <button onClick={search} id="product-search-bar" className="mb-3  mt-5 d-inline-flex" style={{fontSize:18,paddingRight:20,paddingLeft:20,borderRadius:25,marginLeft:15,color:'white',backgroundColor:'#045757',border:'1px solid grey'}}>
                                <img src={searchIcon}  alt="search-icon" style={{width:25,height:25,marginTop:10,marginRight:10}}/>
                                <p style={{marginTop:10}}>Ara</p>
                            </button>  
                        </div> 
                    </div>
                </div>
           
                    <ul>
                    <div className="container" >
                                {                            
                                items.map((data)=>(                    
                                    <div>
                                        <div className="col-lg-4 d-flex align-items-stretch"> 
                                                <AdminCard id={data._id} title={data.name} img_url={data.img_url} price={data.price} score={data.score}/>
                                        </div>   
                                    </div>  
                                ))
                                }
                            </div>
                                <ReactPaginate
                                previousLabel={"Previous"}
                                nextLabel={"Next"}
                                pageCount={PageCount}
                                onPageChange={ChangePage}
                                containerClassName={"paginationBttns"}
                                activeClassName={"paginationActive"}
                                marginPagesDisplayed={4}
                                pageRangeDisplayed={4}
                                ></ReactPaginate>
                    </ul>
            </div>
            }</p>):(<p>Loading</p>)
    );
  }
  
  export default AdminCardFrame;
  