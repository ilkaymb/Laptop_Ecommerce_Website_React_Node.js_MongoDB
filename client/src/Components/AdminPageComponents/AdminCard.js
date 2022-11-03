import { Link } from "react-router-dom";
import LaptopImage from "../../Images/laptop-image.png"
import "../../Styles/AdminCard.css"
import {useState,useEffect} from 'react';
import updateIcon from "../../Images/update-icon.png"
import deleteIcon from "../../Images/delete-icon.png"
import { postDelete } from "../../axios";

//

function AdminCard(props) {
    
    const [id,setId] =useState(props.id);
   
    async function deleteData() {

      console.log(id)

        postDelete({id})
         .then((res) => {
            alert("Başarıyla Silindi")
             window.location.reload();             
         })  
     }
     useEffect(()=>{
    
        setId(props.id)
        
    },[])
    useEffect(()=>{
    
      setId(props.id)

    },[props.id])
    
    const [imgSrc, setImgSrc] = useState(props.img_url)

    useEffect(() => {
      setImgSrc(props.img_url)
    }, [props.img_url])

    return (
      <div >
        <div className="card" style={{width:350,height:550,marginTop:15,marginBottom:15}}>
          <center>
            <img className="card-img-top"   
              src={imgSrc ? imgSrc :LaptopImage}
              onError={() => {
              setImgSrc(LaptopImage)
              }} style={{width: 250,height:275}} alt="img"/>
          </center>
          <div className="card-body" style={{minHeight:100,maxHeight:175}}>
            <h5 className="product-name card-title">{props.title}</h5>
          </div>
          <ul className="list-group list-group-flush">
              <li className="product-cost list-group-item">{props.price} TL</li>                 
          </ul>
          <div className="card-body d-flex justify-content-between align-items-rigth w-100" style={{padding:0,height:55,textAlign:'center',width:'100%',paddingRight:0}}>
            <Link to={{pathname:`/Guncelle/${props.title}/${props.id}`}} className="product-update"style={{padding:0,height:55,paddingRight:15,paddingLeft:15}}>
              <div style={{marginTop:10}}>
                Güncelle 
                <img src={updateIcon}  alt="update-icon" style={{width:30,height:30,float:'right',marginLeft:15}}/>
              </div>
            </Link>
            <button onClick={deleteData} className="product-delete " style={{padding:0,height:55,paddingRight:15,paddingLeft:30}}>Sil  <img src={deleteIcon}  alt="delete-icon" style={{width:30,height:30,float:'right',marginLeft:15}}/></button>
          </div>
        </div>
      </div>

    );
  }

  AdminCard.defaultProps = {
    img_url:{LaptopImage}
       
  }
  
  
  export default AdminCard;
  