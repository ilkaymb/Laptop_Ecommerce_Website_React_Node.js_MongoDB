
import OurProductCard from "./OurProductCard";

import ReactPaginate from 'react-paginate';
import {useState,useEffect} from 'react';
import {getN11} from "../../axios";
import InputGroup from 'react-bootstrap/InputGroup';
import searchIcon from "../../Images/search-icon.png"
import Form from 'react-bootstrap/Form';
import { useNavigate  } from "react-router-dom";
import { useParams } from "react-router-dom"


function N11Frame() {

  

    const navigate = useNavigate();

    const [items, setItems] = useState([])
    const [inputText, setInputText] = useState("");
    const [count, setCount] = useState(0);
    const [searchState, setSearchState] = useState(false);
    const [number, setNumber] = useState(1); // No of pages

    const { page } = useParams()

    const postPerPage = 9
    const PageCount =Math.ceil(count/ postPerPage);
   
    let inputHandler = (e) => {
        //convert input text to lower case
        var input = e.target.value;
        setInputText(input);
        };
        
  
    const ChangePage = ({ selected }) => {
        setNumber(selected+1);
        navigate(`/N11Sayfasi/${selected+1}`);
    };



    useEffect(()=>{

            search() 
 
        
    },[number,page])
    useEffect(()=>{

    },[items])

    function search(){

        getN11({inputText,page})
        .then((res) => {
            console.log(res.data)
            setItems((res.data).items.model) 
            setCount((res.data).count.count)
        })


        
    }




    return (        
        (items !== undefined)? (<p>{
            <div className="container" >
                <div className="row" >
                    <div className="col-sm">               

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
                                          <OurProductCard id={data._id} title={data.name} img_url={data.image} price={data.price} score={data.site} link={data.url}/>
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
  
  export default N11Frame;
