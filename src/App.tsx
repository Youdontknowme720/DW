import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import ScrollToTop from "./components/ScrollTo";
import Home from "./pages/Home";
import Impressum from "./pages/Impressum";

export default function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/impressum" element={<Impressum />} />  
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
