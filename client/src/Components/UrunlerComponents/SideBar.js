import "../../Styles/SideBar.css"
import Card from "./CollapseCard";
import Collapse from "../UrunlerComponents/Collapse"
import React ,{useState,useEffect} from 'react'
import { useNavigate  } from "react-router-dom";
import searchIcon from "../../Images/search-icon.png"

function Sidebar({ min,max,searchButton,setsearchState,setMarka,setRam ,getmarka,getRam}) {


    const navigate = useNavigate();

//#region Sidebar className

const Markalar = [
  {
    name: "Apple",
    checked: false
  },
  {
    name: "Lenovo",
    checked: false
  },
  {
      name: "HP",
      checked: false
    },
    {
      name: "Asus",
      checked: false
    },
    {
      name: "Acer",
      checked: false
    },
    {
      name: "Toshiba",
      checked: false
    },
    {
      name: "Dell",
      checked: false
    },
    {
      name: "Huawei",
      checked: false
    },
    {
      name: "Casper",
      checked: false
    },
    {
      name: "MSI",
      checked: false
    },
    {
      name: "Dark",
      checked: false
    },
    {
      name: "Everest",
      checked: false
    },
    {
      name: "Microsoft",
      checked: false
    },
    {
      name: "Intel",
      checked: false
    },
    {
      name: "Monster Notebook",
      checked: false
    },
];

const Ram = [
  {
    name: "16",
    checked: false
  },
  {
    name: "20",
    checked: false
  },
  {
      name: "24",
      checked: false
    },
    {
      name: "32",
      checked: false
    },
    {
      name: "36",
      checked: false
    },
    {
      name: "40",
      checked: false
    },
    {
      name: "48",
      checked: false
    },
    {
      name: "64",
      checked: false
    },
    {
      name: "128",
      checked: false
    },
    {
      name: "256",
      checked: false
    },
];


//#endregion



      
    const Buton1Fun = () => {

        navigate("/WS-Sayfasi/1");
      };

      const Buton2Fun = () => {

        navigate("/Urunler/1");
      };

      const Buton3Fun = () => {

        navigate("/N11Sayfasi/1");
      };

      const Buton4Fun = () => {

        navigate("/VatanSayfasi/1");
      };

      const Buton5Fun = () => {

        navigate("/TeknosaSayfasi/1");
      };
      const handleChange = event => {
        min(event.target.value);
      };

      const handleChangemax = event => {
        max(event.target.value);
      };

      const handlebutton = event => {
        console.log(searchButton)
        setsearchState(true);       
      };





//#region deneme

const [markalarState, setMarkalarState] = useState(Markalar)
const [ramState, setRamState] = useState(Ram)

const updateCheckStatus = index => {
  setMarkalarState(
    markalarState.map((marka, currentIndex) =>
      currentIndex === index
        ? { ...marka, checked: !marka.checked }
        : marka
    )   
  )


}

const updateCheckStatusRam = index => {
  setRamState(
    ramState.map((ram, currentIndex) =>
      currentIndex === index
        ? { ...ram, checked: !ram.checked }
        : ram
    )   
  )
  
}

const checkedMarkalar = markalarState.filter((p) => p.checked===true)
const checkedRam = ramState.filter((p) => p.checked===true)

useEffect(()=>{
  
  setRam(checkedRam)


},[ramState])



 useEffect(()=>{
  
  setMarka(checkedMarkalar)


},[markalarState])
 




 //setMarka(checkedMarkalar);




 const Checkbox = ({ isChecked, label, checkHandler, index }) => {
  return (
    <div> 
    <label style={{marginLeft:10}} htmlFor={`checkbox-${index}`}>
      <input style={{width:20,height:20,marginRight:10}}
        type="checkbox"
        id={`checkbox-${index}`}
        checked={isChecked}
        onChange={checkHandler}
      />
     {label}</label>
    </div>
  )
}

//#endregion
   




        
    


    return (
      <div id="side-bar-box">

     

        <center className="m-5">
            <button onClick={Buton1Fun}  className="magaza-buton">Bütün Siteler</button>

            <button onClick={Buton2Fun}  className="all-buton">Ürünlerimiz</button>  

            <button onClick={Buton3Fun}  className="all-other mt-3 ">N11</button>  
            <button onClick={Buton4Fun}  className="all-other mx-2">Vatan</button>  
            <button onClick={Buton5Fun}  className="all-other">Teknosa</button>  
        </center>
        <div className="fiyat-box" style={{backgroundColor:'white',width:300,margin:0,marginLeft:15,borderRadius:10,paddingBottom:10}}>
           <div className="row">
                    <div className="col">
                         <p style={{fontSize:24,marginTop:10,marginBottom:10,marginLeft:20,fontWeight:'bold'}}>Fiyat</p>

                    </div>
                    <div className="col">
                    <button onClick={handlebutton} id="product-search-bar" className="mb-3  mt-1 d-inline-flex" style={{fontSize:18,paddingRight:20,paddingLeft:20,borderRadius:25,marginLeft:15,color:'white',backgroundColor:'#045757',border:'1px solid grey'}}>
                      
                      <img src={searchIcon}  alt="search-icon" style={{width:25,height:25,marginTop:10,marginRight:10}}/>
                      <p style={{marginTop:10}}>Ara</p>
  
                      </button>
                    </div>
           </div>
           
          
                <input type="number"   onChange={handleChange} style={{marginLeft:10,width:125,height:35,borderRadius:8}}
                placeholder="Minimum fiyat"/>
               
                &nbsp;&nbsp;-&nbsp;&nbsp;
               
                <input type="number" onChange={handleChangemax} style={{width:125,height:35,borderRadius:8}}
                placeholder="Maximum fiyat"/>
                  
          
        </div>
        <div className="fiyat-box" style={{backgroundColor:'white',width:300,margin:0,marginLeft:15,borderRadius:10}}>

          <ul className="nav nav-pills nav-stacked anyClass" style={{display:'block',height:300,fontSize:16,marginTop:10,marginBottom:10,marginLeft:10}}>
          <p style={{fontSize:24,marginTop:10,marginBottom:10,fontWeight:'bold'}}>Marka</p>
              <div className="App">
              {markalarState.map((marka, index) => (
              <Checkbox
              key={marka.name}
              isChecked={marka.checked}
              checkHandler={()=>updateCheckStatus(index)}
              label={marka.name}
              index={index}
              />
              ))}

            </div>

          </ul>


     
      

     
      </div>

        <div className="fiyat-box" style={{backgroundColor:'white',width:300,margin:0,marginLeft:15,borderRadius:10}}>
          <ul className="nav nav-pills nav-stacked anyClass" style={{display:'block',height:300,fontSize:16,marginTop:10,marginBottom:10,marginLeft:10}}>
            <p style={{fontSize:24,marginTop:10,marginBottom:10,fontWeight:'bold'}}>Ram</p>
                <div className="App">
                {ramState.map((ram, index) => (
                <Checkbox
                key={ram.name}
                isChecked={ram.checked}
                checkHandler={()=>updateCheckStatusRam(index)}
                label={ram.name+' GB'}
                index={index+`Ram`}
                />
                ))}

              </div>

            </ul>
        </div>




          <div className=" row d-block" style={{margin:0,width:300,marginLeft:15,marginTop:10}}>
            <div className="collapse-box col">
            <Collapse>
           
            <Card 
            cardTitle="Ekran Boyutu"
            />
            </Collapse>
            </div>
            <div className="collapse-box col">
            <Collapse>
            <Card 
            cardTitle="Grafik Taban Frekansı" 
            /> 
            </Collapse>           
            </div>
            <div className="collapse-box col">
            <Collapse images>
            <Card 
            cardTitle="İşlemci Serisi" 
            />     
            </Collapse>      
             </div>
             <div className="collapse-box col">
            <Collapse>
            <Card 
            cardTitle="4K Desteği" 
            /> 
            </Collapse>           
            </div>
            <div className="collapse-box col">
            <Collapse>
            <Card 
            cardTitle="İşletim Sistemi" 
            /> 
            </Collapse>           
            </div>
            <div className="collapse-box col">
            <Collapse>
            <Card 
            cardTitle="Harici Ekran Kartı Belleği" 
            /> 
            </Collapse>           
            </div>
            <div className="collapse-box col">
            <Collapse>
            <Card 
            cardTitle="DirectX" 
            /> 
            </Collapse>           
            </div>
            <div className="collapse-box col">
            <Collapse>
            <Card 
            cardTitle="İşlemci Çekirdek Sayısı" 
            /> 
            </Collapse>           
            </div>
            <div className="collapse-box col">
            <Collapse>
            <Card 
            cardTitle="SSD" 
            /> 
            </Collapse>           
            </div>
        </div>






    </div>


    );
  }
  
  export default Sidebar;
  