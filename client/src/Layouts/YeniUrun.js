import {useState} from 'react';
import { newProduct } from "../axios";
import { useNavigate  } from "react-router-dom";

function AdminCardUpdate(props) {




const navigate = useNavigate();


async function newData() {
if(formData.name !=='' && formData.price !==''&& formData.score !==''&& formData.img_url !=='')
{
    newProduct({formData})
    .then((res) => {
        alert("Ürün Eklendi, Admin Sayfasına Yönlendiriliyorsunuz")
        navigate("/AdminPage/1");

    })
}
else
alert("Lütfen Alanları Doldurun")


}

const [formData, setFormData] = useState({
    name: "",
    price: "",
    score: "",
    img_url: "",

  });


console.log(formData)
    return (    
            <div className="container" >
                     
                    <div className="container">  
                    <div className="update-box">
                     <div className="update">
                     <div className="container">  

                        <div className="mb-3">
                            <label className="form-label update-header">Ürün İsim</label>
                            <input type="text" className="form-control" id="exampleFormControlInput1"           
                              onChange={(e) =>
                                setFormData({ ...formData, name: e.target.value })
                              }/>                            
                        </div>

                        <div className="mb-3">
                            <label className="form-label update-header">Ürün Fiyat</label>
                            <input type="number" className="form-control" id="exampleFormControlInput1" 
                               onChange={(e) =>
                                setFormData({ ...formData, price: e.target.value })
                              }/>
                        </div>

                        <div className="mb-3">
                            <label className="form-label update-header">Ürün Puan</label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" 
                               onChange={(e) =>
                                setFormData({ ...formData, score: e.target.value })
                              }/>
                        </div>

                        <div className="mb-3">
                            <label className="form-label update-header">Ürün Resim URL</label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" 
                               onChange={(e) =>
                                setFormData({ ...formData, img_url: e.target.value })
                              }/>
                        </div>
                            
                        <div className="mb-3">
                            <label className="form-label update-header">Ürün Açıklama</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div >
                        <div className="mb-3">
                             <button onClick={newData} style={{float:"right",marginRight:20,marginTop:20,backgroundColor:'#2C89E7',borderColor:'#2C89E7'}} className="product-update">Yeni Ürün Ekle</button>

                        </div >
                        </div>

                        </div>
                </div>      
            </div>
            </div>
    );
  }
  
  export default AdminCardUpdate;
  