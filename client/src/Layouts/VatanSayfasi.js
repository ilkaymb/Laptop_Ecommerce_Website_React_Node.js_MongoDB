import Sidebar from "../Components/UrunlerComponents/SideBar";
import VatanFrame from "../Components/UrunlerComponents/VatanFrame";
import React from "react";


function VatanSayfasi() {
  const [minState, setMinState] = React.useState("");

  const [maxState, setMaxState] = React.useState("");

  const [marka, setMarka] = React.useState([]);

  const [ram, setRam] = React.useState([]);
  const [searchState, setsearchState] = React.useState(false);

      return (
        <div>   
            <VatanFrame/>
            <Sidebar min={setMinState}max={setMaxState}searchButton={searchState}setsearchState={setsearchState}
          setMarka={setMarka} setRam={setRam}/>        </div>
      );  }
    
    export default VatanSayfasi;