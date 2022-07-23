import { useState } from "react";
import "./main.css";
import Navbar from "./components/navbar/Navbar";
import MainHtml from "./components/main/MainHtml";
import Footer from "./components/footer/Footer";

function App() {
      return (
            <>
                  <div className="GridArea">
                        <Navbar />
                        <MainHtml />
                        <Footer />
                  </div>
            </>
      );
}

export default App;
