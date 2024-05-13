import Cotolog from "./cotolog/catalol";
import HeaderOne from "./components/headerOne/headerOne";
import HeaderTwo from "./components/headerTwo/headerTwo";
import Desires from "./components/desires/desires";
import Shvetcia from "./components/shvetcia/shvetcia";
import Company from "./components/Company/Company";
import Payment from "./components/Payment/Payment";
import Email from "./components/Email/Email";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <HeaderOne/>
      <HeaderTwo/>
      <Cotolog/>
      <Desires/>
      <Shvetcia/>
      <Company/>
      <Payment/>
      <Email/>
      <Footer/>
    </div>
  );
}

export default App;
