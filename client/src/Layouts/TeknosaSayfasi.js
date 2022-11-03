import Sidebar from "../Components/UrunlerComponents/SideBar";
import TeknosaFrame from "../Components/UrunlerComponents/TeknosaFrame";
import React from "react";


function TeknosaSayfasi() {
  const [minState, setMinState] = React.useState("");

  const [maxState, setMaxState] = React.useState("");

  const [marka, setMarka] = React.useState([]);
  const [searchState, setsearchState] = React.useState(false);

  const [ram, setRam] = React.useState([]);
      return (
        <div>   
            <TeknosaFrame/>
            <Sidebar min={setMinState}max={setMaxState}searchButton={searchState}setsearchState={setsearchState}
          setMarka={setMarka} setRam={setRam}/>        </div>
      );  }
    
    export default TeknosaSayfasi;