import Navbar from "./layouts/Navbar";
import HomePage from "./pages/HomePage";
import GetStarted from "./pages/GetStarted";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className=" w-full h-screen bg-[#E7E3E4]">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/getstarted" element={<GetStarted />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
