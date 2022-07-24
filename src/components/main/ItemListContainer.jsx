import Paciente from "./Paciente";

function ItemListContainer({ data }) {
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

export default ItemListContainer;
