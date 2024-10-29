import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./component/layout/Navbar";
import Footer from "./component/layout/Footer"; 
import Hem from "./component/js/Hem";
import Behandlingsutbud from "./component/js/behandlingsutbud/Behandlingsutbud";
import Huvudbehandling from "./component/js/Huvudbehandlingar";
import Hittabehandling from "./component/js/HittaBehandling";
import Kontakt from "./component/js/Kontakt";
import Omoss from "./component/js/Omoss";
import Priser from "./component/js/Priser";
import Utbildning from "./component/js/Utbildningar";
import BokaTid from "./component/js/Bokatid";
import Integritetspolicy from "./component/js/Integritetspolicy";
import Ansikte from "./component/js/behandlingsutbud/Ansiktsbehandlingar";
import Laser from "./component/js/behandlingsutbud/Laserbehandlingar";
import Injektion from "./component/js/behandlingsutbud/Injektionsbehandlingar";
import ScrollToTop from "./component/js/ScrollToTop";
import "./App.css";
import Trådlyft from "./component/js/behandlingsutbud/Trådlyft";
import HydraFacial from "./component/js/behandlingsutbud/HydraFacial";
import Massage from "./component/js/behandlingsutbud/massage/Massagee";
import Vaxning from "./component/js/behandlingsutbud/Vaxning";
import RelaxTime from "./component/js/behandlingsutbud/massage/RelaxingTime";
import KlippkortX5 from "./component/js/behandlingsutbud/massage/KlippkortX5";
import AnsiktsMassage from "./component/js/behandlingsutbud/massage/Ansiktsmassage";

function App() {
  return (
    <div className="App"> {/* App-klass för layout */}
      <Navbar />
      <ScrollToTop />
      <div className="main-content"> {/* Main-content-klass för att placera innehåll rätt */}
        <Routes>
          <Route path="/Hem" element={<Hem />} />
          <Route path="/Behandlingsutbud" element={<Behandlingsutbud />} />
          <Route path="/Huvudbehandlingar" element={<Huvudbehandling />} /> {/* <-- DENNA SKA BORT*/ }
          <Route path="/Trådlyft" element={<Trådlyft />} /> 
          <Route path="/HydraFacial" element={<HydraFacial />} /> 
          <Route path="/Massagee" element={<Massage />} /> 
          <Route path="/RelaxingTime" element={<RelaxTime />} /> 
          <Route path="/KlippkortX5" element={<KlippkortX5 />} /> 
          <Route path="/Ansiktsmassage" element={<AnsiktsMassage />} /> 
          <Route path="/Vaxning" element={<Vaxning />} /> 
          <Route path="/Hittabehandling" element={<Hittabehandling />} />
          <Route path="/Kontakt" element={<Kontakt />} />
          <Route path="/Omoss" element={<Omoss />} />
          <Route path="/Priser" element={<Priser />} />
          <Route path="/Utbildningar" element={<Utbildning />} />
          <Route path="/Ansiktsbehandlingar" element={<Ansikte />} />
          <Route path="/Laserbehandlingar" element={<Laser />} />
          <Route path="/Injektionsbehandlingar" element={<Injektion />} />
          <Route path="/Bokatid" element={<BokaTid />} />
          <Route path="/Integritetspolicy" element={<Integritetspolicy />} />
          <Route path="/" element={<Hem />} /> {/* Standardroute till Hem */}
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
export default App;
