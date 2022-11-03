import'../Styles/NavBar.css'
import {Link } from "react-router-dom";
import anaSayfaIcon from '../Images/anaSayfa-icon.png'
import urunlerIcon from '../Images/urunler-icon.png'
import iletisimIcon from '../Images/iletisim-icon.png'
import ayarlarIcon from '../Images/ayarlar-icon.png'

import logo from '../Images/yazilim-cizim.png'


function NavBar() {
    return (
      <div >
      <div id="box">
            <div id="logo"> <img src={logo}  alt="logo" style={{width: 100,height: 100,textAlign:'center',marginLeft:15,marginTop:15}}/></div>
            <div>
                <h1 id="header1">NYAM</h1>
                <h1 id="header2">ELEKTRONIK</h1>
                <h1 id="header3">MARKET</h1>
            </div>
            <center>

           <div style={{display:'inline-block'}}>
                <Link to="/AnaSayfa" className="nav-text" style={{marginLeft:100}}>AnaSayfa <img src={anaSayfaIcon}  alt="anasayfa-icon" style={{marginLeft:10,height:40,width:40}}/></Link>
                <Link to="/Urunler/1" className="nav-text">Ürünler  <img src={urunlerIcon}  alt="urunler-icon" style={{marginLeft:10,height:40,width:40}}/></Link>
                <Link to="/Iletisim" className="nav-text">İletişim  <img src={iletisimIcon}  alt="iletisim-icon" style={{marginLeft:10,height:40,width:40}}/></Link>
                <Link to="/Ayarlar" className="nav-text">Ayarlar  <img src={ayarlarIcon}  alt="ayarlar-icon" style={{marginLeft:10,height:40,width:40}}/></Link>
            </div>

          </center>
      </div>
      
      </div>

    );
  }
  
  export default NavBar;
  