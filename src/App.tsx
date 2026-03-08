import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import ScrollToTop from "./components/ScrollTo";
import Home from "./pages/Home";
import Impressum from "./pages/Impressum";
import Schilder from "./pages/Schilder";
import Industriepanels from "./pages/Industriepanels";
import Fraesteile from "./pages/Fraesteile";
import Aluprofile from "./pages/Aluprofile";
import Schweissen from "./pages/Schweissen";
import Fertigungsverfahren from "./pages/Fertigungsverfahren";

export default function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/impressum" element={<Impressum />} />  
          <Route path="/schilder" element={<Schilder />} />  
          <Route path="/industriepanels" element={<Industriepanels />} />  
          <Route path="/fraesteile" element={<Fraesteile />} />  
          <Route path="/aluprofile" element={<Aluprofile />} />  
          <Route path="/schweissen" element={<Schweissen />} />  
          <Route path="/fertigungsverfahren" element={<Fertigungsverfahren />} />  
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
