import Banner from "./Components/Banner/Banner";
import Benefits from "./Components/Benefits/benefits";
import Event from "./Components/Events/event";
import Navbar from "./Components/Navbar/Navbar";
import Programs from "./Components/Programs/programs";

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Banner/>
     <Programs/>
     <Benefits/>
    <Event/>
    </div>
  );
}

export default App;
