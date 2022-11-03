import { useParams } from "react-router-dom"
import {useState,useEffect} from 'react';
import { getOurProductSingle,ourProductUpdate } from "../axios";
import "../Styles/AdminPageUpdate.css"
import { useNavigate  } from "react-router-dom";

function AdminCardUpdate(props) {

    const { id } = useParams()
    const navigate = useNavigate();


const [items, setItems] = useState([])

async function fetchData() {

    getOurProductSingle({id})
    .then((res) => {
        setItems((res.data).product) 

    })
  
}

async function updateData() {

    ourProductUpdate({formData})
    .then((res) => {
        alert("Başarıyla Güncellendi, Admin Sayfasına Yönlendiriliyorsunuz")
        navigate("/AdminPage/1");
    })
  
}
useEffect(()=>{

    fetchData()  
    
},[])

useEffect(()=>{

setFormData({ ...formData, id:items._id ,name: items.name, price: items.price, score: items.score, img_url: items.img_url})

},[items])

const [formData, setFormData] = useState({
    id: "",
    name: "",
    price: "",
    score: "",
    img_url: "",

  });


    return (

        ( items !== undefined)? (<p>{
            <div className="container" >
                     
                    <div className="container">  
                    <div className="update-box">
                     <div className="update">
                     <div className="container">  

                        <div className="mb-3">
                            <label className="form-label update-header">Ürün İsim</label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" defaultValue={items?.name}                          
                              onChange={(e) =>
                                setFormData({ ...formData, name: e.target.value })
                              }/>                            
                        </div>

                        <div className="mb-3">
                            <label className="form-label update-header">Ürün Fiyat</label>
                            <input type="number" className="form-control" id="exampleFormControlInput1" defaultValue={items?.price}
                               onChange={(e) =>
                                setFormData({ ...formData, price: e.target.value })
                              }/>
                        </div>

                        <div className="mb-3">
                            <label className="form-label update-header">Ürün Puan</label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" defaultValue={items?.score}
                               onChange={(e) =>
                                setFormData({ ...formData, score: e.target.value })
                              }/>
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Ürün Resim URL</label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" defaultValue={items?.img_url}
                               onChange={(e) =>
                                setFormData({ ...formData, img_url: e.target.value })
                              }/>
                        </div>
                            
                        <div className="mb-3">
                            <label className="form-label">Ürün Açıklama</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div >
                        <div className="mb-3">
                             <button onClick={updateData} style={{float:"right",marginRight:20,marginTop:20}} className="product-update">Güncelle</button>

                        </div >
                        </div>

                        </div>
                </div>
               
            </div>


            </div>
            }</p>):(<p>Loading</p>)

       
       


     

    );
  }
  
  export default AdminCardUpdate;
  