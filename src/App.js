import Accreditation from "./Components/Accreditation/accreditation";
import Banner from "./Components/Banner/Banner";
import Benefits from "./Components/Benefits/benefits";
import Event from "./Components/Events/event";
import Footer from "./Components/Footer/footer";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/home.js";
import {Routes, Route} from "react-router-dom";
import Program from "./Pages/Programs/program";

function App() {
  return (
    <div className="App">
     <Navbar/>
    <Routes>
      <Route index path="/" element={<Home/>}/>
      <Route index path="/programs" element={<Program/>}/>
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
