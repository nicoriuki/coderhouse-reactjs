import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import ItemListContainer from "./components/itemList/ItemListContainer";
import data from "./helper/datospaciente.json";

function App() {
      return (
            <>
                  <Navbar />

                  <ItemListContainer data={data} />
            </>
      );
}

export default App;
