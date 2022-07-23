import React from "react";
import ItemListContainer from "./ItemListContainer";
import AgregarEvento from "./AgregarEvento";
import data from "./../../helper/datospaciente.json";
const stockEventos = 12,
      initial = 1;

export default function MainHtml() {
      return (
            <>
                  <main className="main">
                        <AgregarEvento
                              stockEventos={stockEventos}
                              initial={initial}
                        />
                        <hr />

                        <ItemListContainer data={data} />
                  </main>
            </>
      );
}
