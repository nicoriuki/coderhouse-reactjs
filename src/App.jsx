import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import paciente1 from "./paciente1.png";
import paciente2 from "./paciente2.png";
import ItemListContainer from "./components/itemList/ItemListContainer";

function App() {
      return (
            <>
                  <Navbar />
                  <div className="row mt-4 justify-content-center">
                        <div className="col-4">
                              <ItemListContainer
                                    nombre="Pepita Perez"
                                    edad="35"
                                    descripcion="Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus nostrum dolorum dolorem itaque enim tenetur voluptas recusandae? Asperiores quibusdam delectus vero! Error est quo explicabo nisi ratione rem rerum nam."
                                    imagen={paciente1}
                              />
                        </div>
                        <div className="col-4">
                              <ItemListContainer
                                    nombre="Pepito Perez"
                                    edad="41"
                                    descripcion="Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dolores voluptatibus nostrum vero itaque incidunt dolorem deserunt repudiandae eveniet cumque impedit, illum architecto ab placeat nobis ipsum tempora quia a?"
                                    imagen={paciente2}
                              />
                        </div>
                  </div>
            </>
      );
}

export default App;
