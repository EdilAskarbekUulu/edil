import Cotolog from "./cotolog/catalol";
import HeaderOne from "./components/headerOne/headerOne";
import HeaderTwo from "./components/headerTwo/headerTwo";
import Desires from "./components/desires/desires";
import Shvetcia from "./components/shvetcia/shvetcia";
import Company from "./components/Company/Company";
import Payment from "./components/Payment/Payment";
import Email from "./components/Email/Email";
import Footer from "./components/Footer/Footer";
import Section1 from "./components/section1/section1";
import Section2 from "./components/section2/section2";
import Section3 from "./components/section3/section3";

function App() {
  return (
    <div className="App">
      <HeaderOne/>
      <HeaderTwo/>
      <Cotolog/>
      <Desires/>
      <Shvetcia/>
      <Section1/>
      <Section2/>
      <Section3/>
      <Company/>
      <Payment/>
      <Email/>
      <Footer/>
    </div>
  );
}

export default App;
