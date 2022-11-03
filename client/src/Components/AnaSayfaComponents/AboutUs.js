import'../../Styles/AboutUs.css'
import foto from "../../Images/about-foto.png"

function AboutUs() {
    return (
      <div >
            <div id="top-line"></div>
                 


            <div className="container-fluid">

        
            <div className="container">
              <center>
                  <div id="as-header">
                  <p id="txt">Hakkımızda</p>

                  </div>  
                </center>

              
              <div className="row">
                <div className="col-6">
                              <div id="as-text">
                                <p> Yazılım laboratuvarı için yaptığımız<br/>bu projenin amacı başka sitelerden<br/>
                                başka sitelerden aldığımız laptop<br/>fiyatlarını kullanıcıya sunarak en<br/>
                                uygun bilgisayarı seçmesinde<br/>yardımcı olmak.
                                </p>
                              </div>
                </div>
                <div className="col-6 mt-5 mb-5">
                              <img id="image-1" src={foto}  alt="Grapefruit slice atop a pile of other slices"/>

                </div>
              </div>


                              

                    
                 
                    
                  
              
                </div>  
             
      </div>  

       <div id="bottom-line"></div>
      </div>
    );  }
  
  export default AboutUs;
