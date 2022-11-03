
import ProductCard from '../Components/UrunlerComponents/ProductCard';
import foto from '../Images/laptop-image.png'
import ArrowIcon from "../Images/arrow-icon.png"
import { useNavigate  } from "react-router-dom";
import { useParams } from "react-router-dom"
import {useState,useEffect} from 'react';
import { getOurProductSingle } from "../axios";

function UrunSayfası() {

  const { id } = useParams()
  const navigate = useNavigate();


const [items, setItems] = useState([])

/* async function fetchData() {

  getOurProductSingle({id})
  .then((res) => {
      setItems((res.data).product) 

  })

} */
/* 
useEffect(()=>{

  fetchData()  
  
},[])

useEffect(()=>{

  
  },[items]) */


    return (
      ( items !== undefined)? (<p>{
        <center> 
        <div className="row">
          <div className="col-4 offset-2">
            <div className="card" style={{marginTop:15,marginBottom:15,height:460}}>
                  <ul className="list-group list-group-flush m-0">
                  <li className="product-header list-group-item">Title

                    <center>
                  <img style={{marginTop:50,marginBottom:15}} src={foto} alt="foto" width="300" height="300"/>
                  </center>
                  </li>

                  </ul>
              </div>
            </div>

          <div  className="col-4">
                  <div className="card" style={{marginTop:15,marginBottom:15,height:460}}>
                  <ul className="list-group list-group-flush m-0">
                          
                      <li className="product-header list-group-item">props.site1_name
                      <li className="product-cost list-group-item">props.site1_price TL
                      <a href=""> 
                      <button  className="list-group-item  w-100" style={{fontSize:20,backgroundColor:'#E16428',color:'white',borderColor:'white'}}> 
                            
                              Mağazaya git
                              <img src={ArrowIcon}  alt="arrow-icon" style={{width:25,height:25,marginLeft:5}}/>
                          
                      </button>
                        </a>
                      </li>
                      </li>
               
                      <hr style={{margin:0}}/>
                      <li className="product-header list-group-item">props.site2_name
                      <li className="product-cost list-group-item">props.site2_price TL
                      <a href="{props.site2_link}"> 
                      <button  className="list-group-item  w-100" style={{fontSize:20,backgroundColor:'#E16428',color:'white',borderColor:'white'}}> 
                            
                              Mağazaya git
                              <img src={ArrowIcon}  alt="arrow-icon" style={{width:25,height:25,marginLeft:5}}/>
                          
                              

                      </button>
                        </a>
                      </li>
                      </li>

                      <hr style={{margin:0}}/>
                      <li className="product-header list-group-item">props.site3_name
                      <li className="product-cost list-group-item">props.site3_price TL
                      <a href="{props.site3_link}"> 
                      <button  className="list-group-item  w-100" style={{fontSize:20,backgroundColor:'#E16428',color:'white',borderColor:'white'}}> 
                            
                              Mağazaya git
                              <img src={ArrowIcon}  alt="arrow-icon" style={{width:25,height:25,marginLeft:5}}/>
                          
                              

                      </button>
                        </a>
                      </li>
                      </li>
                  </ul>
              </div>
             </div>
          </div>
          <div className="row">
         <div className="offset-2 col-8">
         <div className="card" style={{marginTop:15,marginBottom:15,height:460}}>
         <ul className="list-group list-group-flush m-0">
         <li className="product-header list-group-item">Özellikler
         </li>
        </ul>
         </div>
   

         </div>
          </div>



        </center>
        }</p>):(<p>Loading</p>)

    );  }
  
  export default UrunSayfası;
