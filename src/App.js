import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Start from "./Start";
import './App.css'
function App() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <BrowserRouter>
        <Routes>
          <Route path="/getNews" element={<Home />} />
          <Route path="/" element={<Start />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
