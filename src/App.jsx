import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
      const [count, setCount] = useState(0);

      return (
            <div className="App">
                  <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <h1>HOLA MUNDO</h1>
                  </header>
            </div>
      );
}

export default App;
