import { Link } from "react-router-dom";
import LaptopImage from "../../Images/laptop-image.png"
import "../../Styles/AdminCard.css"
import {useState,useEffect} from 'react';


//

function AdminCard(props) {
    
    const [id,setId] =useState('');
   
    useEffect(()=>{
        setId(props.id)   
    },[])

    useEffect(()=>{

    },[id])

    return (
      <div >
                <div className="card" style={{width:350,height:550,marginTop:15,marginBottom:15}}>
                    <center>
                        <img className="card-img-top" src={props.img_url} alt="Card cap" style={{width: 250,height:275}}/>

                    </center>
                    <div className="card-body" style={{minHeight:100,maxHeight:175}}>
                        <h5 className="product-name card-title">{props.title}</h5>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="product-cost list-group-item">{props.price} TL</li>              
                        
                    </ul>
                    <div className=" d-flex justify-content-between align-items-rigth w-100" style={{padding:0,height:55,textAlign:'center',width:'100%',paddingRight:0}}>
                    <a href={`${props.link}`} className="product" style={{height:40,fontSize:20}}>Ürünü İncele</a>
                    <span className="badge-info text-white " style={{height:40,fontSize:28,padding:'0px 10px',textAlign:'center',backgroundColor:'#E16428',borderRadius:8,textTransform:'capitalize'}}>{props.score}</span>
                    </div>
                </div>
      </div>

    );
  }

  AdminCard.defaultProps = {
    img_url:{LaptopImage}
       
  }
  
  
  export default AdminCard;
  