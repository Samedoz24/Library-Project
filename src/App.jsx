import { useState } from "react";
import Navbar from "./components/Navbar";
import SiteContext from "./context/SiteContext";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <SiteContext />
    </>
  );
}

export default App;
