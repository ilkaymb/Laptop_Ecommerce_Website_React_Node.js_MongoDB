import { BrowserRouter, Route, Link } from "react-router-dom";

import LaptopImage from "../../Images/laptop-image.png"
import ArrowIcon from "../../Images/arrow-icon.png"
import "../../Styles/ProductCard.css"
//baslik:,1.site ad,1.site fiyat,1.site link,2.site ad,2.site fiyat,2.site link,3.site ad,3.site fiyat,3.site link,?Ürün sayfası için

function ProductCard(props) {




  
    return (
      <div >

                <div className="card" style={{marginTop:15,marginBottom:15}}>
                    <img className="card-img-top" src={props.img_url} alt="Card image cap"style={{backgroundPosition: 'center'}}/>
                    <div className="card-body">
                        <h5 className="product-name card-title">{props.title}</h5>
                    </div>
                    <ul className="list-group list-group-flush m-0">
                            
                        <li className="product-header list-group-item">{props.site1_name}
                        <li className="product-cost list-group-item">{props.site1_price} TL
                         <a href={props.site1_link}> 
                        <button  className="list-group-item  w-100" style={{fontSize:20,backgroundColor:'#E16428',color:'white',borderColor:'white'}}> 
                              
                                Mağazaya git
                                <img src={ArrowIcon}  alt="arrow-icon" style={{width:25,height:25,marginLeft:5}}/>
                             
                                

                        </button>
                          </a>
                        </li>
                        </li>
                                 

                        <hr style={{margin:0}}/>
                        <li className="product-header list-group-item">{props.site2_name}
                        <li className="product-cost list-group-item">{props.site2_price} TL
                         <a href={props.site2_link}> 
                        <button  className="list-group-item  w-100" style={{fontSize:20,backgroundColor:'#E16428',color:'white',borderColor:'white'}}> 
                              
                                Mağazaya git
                                <img src={ArrowIcon}  alt="arrow-icon" style={{width:25,height:25,marginLeft:5}}/>
                             
                                

                        </button>
                          </a>
                        </li>
                        </li>

                        <hr style={{margin:0}}/>
                        <li className="product-header list-group-item">{props.site3_name}
                        <li className="product-cost list-group-item">{props.site3_price} TL
                         <a href={props.site3_link}> 
                        <button  className="list-group-item  w-100" style={{fontSize:20,backgroundColor:'#E16428',color:'white',borderColor:'white'}}> 
                              
                                Mağazaya git
                                <img src={ArrowIcon}  alt="arrow-icon" style={{width:25,height:25,marginLeft:5}}/>
                             
                                

                        </button>
                          </a>
                        </li>
                        </li>
                    </ul>
                    <div className="card-body d-flex justify-content-between align-items-rigth">
                        <p></p>
                        <Link to={`/UrunSayfasi/${props.title}/${props.id}`} className="product">Ürünü İncele</Link>

                    </div>
                </div>
      </div>

    );
  }

  
  ProductCard.defaultProps = {
    title:"Apple Macbook Pro MYD82TU-A M1 8GB RAM 256 SSD",
       
    site1_name:"trendyol.com",
    site1_price:"22.890",
    site1_link:"https://www.trendyol.com/",
   
    site2_name:"trendyol.com",
    site2_price:"22.890",
    site2_link:"https://www.trendyol.com/",

    site3_name:"trendyol.com",
    site3_price:"22.890",
    site3_link:"https://www.trendyol.com/"
  }
  
  export default ProductCard;
  