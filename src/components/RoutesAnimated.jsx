import AppLayout from "../pages/AppLayout";
import Home from "../pages/Home";
import Portfolio from "../pages/Portfolio";
import Contact from "../pages/Contact";
import About from "../pages/About";
import MigthyMiniMinds from "../pages/MigthyMiniMinds";
import BigBang from "../pages/BigBang";
import ThisPortfolio from "../pages/ThisPortfolio";
import ElDorado from "../pages/ElDorado";
import DistractionDefender from "../pages/DistractionDefender";
import ShowsLatinos from "../pages/ShowsLatinos";
import IbbUploader from "../pages/IbbUploader";

import {
    Route,
    Routes,
    useLocation
  } from "react-router-dom";
  
  

export default function RoutesAnimated(){
   const location = useLocation();
    return (
    <Routes location={location} key={location.pathname}>
        <Route path="/"element={<AppLayout/>}>
            <Route path="/" element={<Home/>} />
            <Route path="Portfolio" element={<Portfolio/>} />
            <Route path="Contact" element={<Contact/>} />
            <Route path="About" element={<About/>} />
            <Route path="MigthyMiniMinds" element={<MigthyMiniMinds/>} />
            <Route path="ThisPortfolio" element={<ThisPortfolio/>} />
            <Route path="BigBang" element={<BigBang/>} />
            <Route path="ElDorado" element={<ElDorado/>} />
            <Route path="DistractionDefender" element={<DistractionDefender/>} />
            <Route path="ShowsLatinos" element={<ShowsLatinos/>} />
            <Route path="IbbUploader" element={<IbbUploader/>} />
        </Route>
      </Routes>
    )
}