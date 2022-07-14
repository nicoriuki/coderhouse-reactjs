import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar/Navbar";

function App() {
      const [count, setCount] = useState(0);

      return (
            <>
                  <Navbar />
                  <div className="App mt-5">
                        <img src={logo} className="App-logo" alt="logo" />
                  </div>
            </>
      );
}

export default App;
