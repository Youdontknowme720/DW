import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./Home";
import Impressum from "./pages/Impressum";

export default function App() {
  return (
    <BrowserRouter>
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
