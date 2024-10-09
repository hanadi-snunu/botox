import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./component/layout/Navbar";
import Footer from "./component/layout/Footer"; 
import Hem from "./component/js/Hem";
import Behandlingsutbud from "./component/js/behandlingsutbud/Behandlingsutbud";
import Huvudbehandling from "./component/js/Huvudbehandlingar";
import Underbehandling from "./component/js/behandlingsutbud/Underbehandlingar";
import Hittabehandling from "./component/js/HittaBehandling";
import Kontakt from "./component/js/Kontakt";
import Omoss from "./component/js/Omoss";
import Priser from "./component/js/Priser";
import Utbildning from "./component/js/Utbildningar";
import Namnbehandling from "./component/js/behandlingsutbud/Namnbehandlingar";
import BokaTid from "./component/js/Bokatid";
import Integritetspolicy from "./component/js/Integritetspolicy";
import "./App.css";

function App() {
  return (
    <div className="App"> {/* App-klass för layout */}
      <Navbar />
      <div className="main-content"> {/* Main-content-klass för att placera innehåll rätt */}
        <Routes>
          <Route path="/Hem" element={<Hem />} />
          <Route path="/Behandlingsutbud" element={<Behandlingsutbud />} />
          <Route path="/Huvudbehandlingar" element={<Huvudbehandling />} />
          <Route path="/Namnbehandlingar" element={<Namnbehandling />} />
          <Route path="/Underbehandlingar" element={<Underbehandling />} />
          <Route path="/Hittabehandling" element={<Hittabehandling />} />
          <Route path="/Kontakt" element={<Kontakt />} />
          <Route path="/Omoss" element={<Omoss />} />
          <Route path="/Priser" element={<Priser />} />
          <Route path="/Utbildningar" element={<Utbildning />} />
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
