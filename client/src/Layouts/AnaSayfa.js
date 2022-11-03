import WelcomePage from "../Components/AnaSayfaComponents/WelcomePage";
import BestSelling from "../Components/AnaSayfaComponents/BestSelling";
import AboutUs from "../Components/AnaSayfaComponents/AboutUs";
import BottomInfo from "../Components/AnaSayfaComponents/BottomInfo";

function MainPage() {
    return (
      <div>
        <WelcomePage/>
        <BestSelling/>
        <AboutUs/>
        <BottomInfo/>
      </div>
    );  }
  
  export default MainPage;
