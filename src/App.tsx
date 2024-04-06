import { useState } from "react";
import Navbar from "./layouts/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-full h-screen bg-[#E7E3E4]">
      <Navbar></Navbar>
    </div>
  );
}

export default App;
