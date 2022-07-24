import React, { useState, useEffect } from "react";
import ItemListContainer from "./ItemListContainer";
import AgregarEvento from "./AgregarEvento";
import data from "./../../helper/datospaciente.json";
import Cargando from "./Cargando";
const stockEventos = 12,
      initial = 1;

export default function MainHtml() {
      const [pacientes, setPacientes] = useState([]);
      const [div, setDiv] = useState();
      useEffect(() => {
            let misPacientes = new Promise((resolve) => {
                  setTimeout(() => {
                        const paciente = data;
                        return resolve(paciente);
                  }, 5000);
            });

            function obtenerPacientes(listaPacientes) {
                  return listaPacientes.then((paciente) => {
                        return paciente;
                  });
            }

            const pacientesObtenidos = obtenerPacientes(misPacientes);

            pacientesObtenidos.then(setPacientes);
      }, []);

      console.log(pacientes);
      return (
            <>
                  <main className="main">
                        <AgregarEvento
                              stockEventos={stockEventos}
                              initial={initial}
                        />
                        <hr />

                        {pacientes.length === 0 ? (
                              <Cargando />
                        ) : (
                              <ItemListContainer data={pacientes} />
                        )}
                  </main>
            </>
      );
}
