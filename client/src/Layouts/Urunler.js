import Sidebar from "../Components/UrunlerComponents/SideBar";
import OurProductFrame from "../Components/UrunlerComponents/OurProductFrame";
import React from "react";


function Urunler() {
  const [minState, setMinState] = React.useState("");

  const [maxState, setMaxState] = React.useState("");

  const [marka, setMarka] = React.useState([]);

  const [ram, setRam] = React.useState([]);


  const [searchState, setsearchState] = React.useState(false);

    return (
      <div>   

          <Sidebar min={setMinState}max={setMaxState}searchButton={searchState}setsearchState={setsearchState}
          setMarka={setMarka} setRam={setRam}/>
          <OurProductFrame minValue={minState} maxValue={maxState}searchButton={searchState} marka={marka} ram={ram}/>

      </div>
    );  }
  
  export default Urunler;
