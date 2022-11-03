import'../../Styles/WelcomePage.css'
import { Link } from "react-router-dom";
import urunlerIcon from '../../Images/urunler-icon.png'


function WelcomePage() {
    return (

      <div id="welcomePage container-fluid" style={{background:'url(D:/yazlab-project/src/Images/laptop-g2a13aaaed_1920.jpg)'}}>
       <div id="welcomePage2"/>
       <h1 id="welcomePageText1">Aradığın Bilgisayarın En Uygun Fiyatını</h1>
       <h1 id="welcomePageText2">Ürünler Kısmında Bulabilirsin</h1>
       <Link to="/Urunler/1" id="wp-button">Ürünler  
        <img src={urunlerIcon}  alt="urunler-icon" style={{marginLeft:10,height:50,width:50}}/>
       </Link>
      </div>
    );  }
  
  export default WelcomePage;
