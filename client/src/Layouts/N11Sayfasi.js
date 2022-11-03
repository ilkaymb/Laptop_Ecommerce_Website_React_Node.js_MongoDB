import Sidebar from "../Components/UrunlerComponents/SideBar";
import N11Frame from "../Components/UrunlerComponents/N11Frame";
import React from "react";


function N11Sayfasi() {
  const [minState, setMinState] = React.useState("");

  const [maxState, setMaxState] = React.useState("");

  const [marka, setMarka] = React.useState([]);
  const [searchState, setsearchState] = React.useState(false);

  const [ram, setRam] = React.useState([]);
      return (
        <div>   
            <N11Frame/>
            <Sidebar min={setMinState}max={setMaxState}searchButton={searchState}setsearchState={setsearchState}
          setMarka={setMarka} setRam={setRam}/>        </div>
      );  }
    
    export default N11Sayfasi;