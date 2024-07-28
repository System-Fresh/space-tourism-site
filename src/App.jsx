import {
  BrowserRouter as Router,
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
// import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Destination from "./components/Destination/Destination";
import Crew from "./components/Crew/Crew";
import Technology from "./components/Technology/Technology";
import DestinationMoon from "./components/Destination/DestinationMoon";
import DestinationMars from "./components/Destination/DestinationMars";
import DestinationEuropa from "./components/Destination/DestinationEuropa";
import DestinationTitan from "./components/Destination/DestinationTitan";
import CrewTwo from "./components/Crew/CrewTwo";
import CrewThree from "./components/Crew/CrewThree";
import CrewFour from "./components/Crew/CrewFour";
import TechTwo from "./components/Technology/TechnologyTwo";
import TechThree from "./components/Technology/TechnologyThree";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />

        <Routes>
          <Route  path="/" Component={Home} />

          <Route path="/destination" Component={Destination} />
          {/* <Route index element={<DestinationMoon />} /> */}
          <Route path="/Mars" element={<DestinationMars />} />
          
          <Route path="/Europa" element={<DestinationEuropa />} />
          <Route path="/Titan" element={<DestinationTitan />} />

          <Route path="/crew" Component={Crew} />

          <Route path="technology" Component={Technology} />
          <Route path="/Ctwo" Component={CrewTwo} />
          <Route path="/Cthree" Component={CrewThree} />
          <Route path="/Cfour" Component={CrewFour} />
          <Route path="/TechTwo" Component={TechTwo} />
          <Route path="/TechThree" Component={TechThree} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
 