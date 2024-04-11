import Navbar from "./layouts/Navbar";
import HomePage from "./pages/HomePage";
import GetStarted from "./pages/GetStarted";
import GetStartedTest from "./pages/GetStartedTest";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainProvider } from "./contexts/MainContext";

function App() {
  return (
    <div className="w-full h-full">
      <Router>
        <Navbar />
        <MainProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />

            <Route path="/getstarted" element={<GetStartedTest />} />
          </Routes>
        </MainProvider>
        <span className=" fixed z-50 text-[10px]  text-black sm:text-sm text-opacity-70 sm:text-opacity-60 bottom-2 right-3">
          © Laboratory for Processing Image, Signals and Computer Science
        </span>
      </Router>
    </div>
  );
}

export default App;
