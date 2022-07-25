import { useState, useEffect } from "react";
import PacienteListContainer from "../components/paciente/PacienteListContainer";
import data from "../helper/datospaciente.json";
import Cargando from "../common/Cargando";

function Pacientes() {
      const [pacientes, setPacientes] = useState([]);

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

      return (
            <>
                  <main className="main">
                        <hr />

                        {pacientes.length === 0 ? (
                              <Cargando />
                        ) : (
                              <PacienteListContainer data={pacientes} />
                        )}
                  </main>
            </>
      );
}
export default Pacientes;
