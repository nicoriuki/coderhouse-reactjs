import Paciente from "./Paciente";

function PacienteListContainer({ data }) {
      return (
            <>
                  <section className="pacientes">
                        {data.pacientes.map((paciente) => (
                              <Paciente key={paciente.id} paciente={paciente} />
                        ))}
                  </section>
            </>
      );
}

export default PacienteListContainer;
