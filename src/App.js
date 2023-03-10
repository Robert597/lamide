import Accreditation from "./Components/Accreditation/accreditation";
import Banner from "./Components/Banner/Banner";
import Benefits from "./Components/Benefits/benefits";
import Event from "./Components/Events/event";
import Footer from "./Components/Footer/footer";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/home.js";
import {Routes, Route, useLocation} from "react-router-dom";
import Program from "./Pages/Programs/program";
import About from "./Pages/About/about";
import Contact from "./Pages/Contact/contact";
import Detail from "./Pages/Project/detail";
import React from 'react';

function App() {
  const {pathname} = useLocation();

  React.useEffect(() => {
   window.scrollTo(0, 0);
  }, [pathname])
  
  return (
    <div className="App">
     <Navbar/>
    <Routes>
      <Route index path="/" element={<Home/>}/>
      <Route path="/programs" element={<Program/>}/>
      <Route  path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/detail/:id" element={<Detail/>}/>
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
