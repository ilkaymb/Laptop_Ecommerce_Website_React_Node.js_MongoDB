import'../../Styles/BestSelling.css'
import  Carousel  from '../Carosel';

function BestSelling() {
    return (
      <div>
       <div id="left-box"></div>

        <center>
                <div id="bs-header">
                  <p></p>
                  <p id="txt">En Popüler Bilgisayarlar</p>  
                </div>
                <div>
                  
                <div id="bs-card1">
                    <center>
                      <Carousel/>
                    </center>
                  </div>
                </div>
        </center>
      <div id="rigth-box"></div>
      </div> 

    );  }
  
  export default BestSelling;
