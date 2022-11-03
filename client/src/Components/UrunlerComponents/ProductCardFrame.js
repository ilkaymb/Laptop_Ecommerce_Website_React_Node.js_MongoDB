import ProductCard from "./ProductCard";
import ReactPaginate from 'react-paginate';
import {useState,useEffect} from 'react';
import {getData} from "../../axios";
import InputGroup from 'react-bootstrap/InputGroup';
import searchIcon from "../../Images/search-icon.png"
import Form from 'react-bootstrap/Form';
import { useNavigate  } from "react-router-dom";
import { useParams } from "react-router-dom"


import "../.././Styles/ProductCardFrame.css"

function ProductCardFrame() {
    
    const navigate = useNavigate();

    const [items, setItems] = useState([])
    const [inputText, setInputText] = useState("");
    const [count, setCount] = useState(0);
    const [searchState, setSearchState] = useState(false);
    const [number, setNumber] = useState(1); // No of pages

    const { page } = useParams()

    const postPerPage = 9
    const PageCount =1;
   
    let inputHandler = (e) => {
        var input = e.target.value;
        setInputText(input);
        };
        
  
    const ChangePage = ({ selected }) => {
        setNumber(selected+1);
        navigate(`/WS-Sayfasi/${selected+1}`);
    };



    useEffect(()=>{

        search() 

    
},[number,page])
useEffect(()=>{

},[items])

function search(){

    getData({inputText,page})
    .then((res) => {
        console.log(res.data)

        setItems((res.data).items)
        console.log(items)

    })


    
}

    return (
        (items !== undefined && items.model !== undefined)? (<p>{
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
                                items.model.map((data)=>(                    
                                    <div>
                                        <div className="col-lg-4 d-flex align-items-stretch"> 
                                        <ProductCard title={data.n11.name} img_url={data.n11.image} site1_name={data.n11.site} site1_price={data.n11.price} site1_link={data.n11.url} site2_name={data.teknosa.site} site2_price={data.teknosa.price} site2_link={data.teknosa.url} site3_name={data.vatan[0].site} site3_price={data.vatan[0].price} site3_link={data.vatan[0].url}/>
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

  
  export default ProductCardFrame;
