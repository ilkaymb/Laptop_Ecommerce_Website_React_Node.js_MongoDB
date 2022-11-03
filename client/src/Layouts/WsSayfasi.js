import Sidebar from "../Components/UrunlerComponents/SideBar";
import ProductCardFrame from "../Components/UrunlerComponents/ProductCardFrame";
import React from "react";


function Urunler() {

  const [minState, setMinState] = React.useState("");

  const [maxState, setMaxState] = React.useState("");

  const [marka, setMarka] = React.useState([]);

  const [ram, setRam] = React.useState([]);


  const [searchState, setsearchState] = React.useState(false);

    return (
      <div>   
          <ProductCardFrame/>
          <Sidebar min={setMinState}max={setMaxState}searchButton={searchState}setsearchState={setsearchState}
          setMarka={setMarka} setRam={setRam}/>
      </div>
    );  }
  
  export default Urunler;