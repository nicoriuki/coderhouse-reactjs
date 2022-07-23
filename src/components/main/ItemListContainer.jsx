function ItemListContainer(props) {
      return (
            <>
                  <section className="pacientes">
                        {props.data.pacientes.map((paciente) => (
                              <article key={paciente.id} className="paciente">
                                    <div className="pCard">
                                          <div>
                                                <img
                                                      className="pCard__img"
                                                      src={paciente.imagen}
                                                      alt={paciente.name}
                                                />
                                          </div>
                                          <div className="pCard__body">
                                                <h5 className="pCard__title">
                                                      {paciente.name}
                                                      {"  "}
                                                      <span>
                                                            {paciente.edad} Años
                                                      </span>
                                                </h5>
                                                <div>
                                                      <p className="pCard__text ">
                                                            {
                                                                  paciente.descripcion
                                                            }
                                                      </p>
                                                </div>
                                                <button className="pCard__btn">
                                                      Historia Clinica
                                                </button>
                                          </div>
                                    </div>
                              </article>
                        ))}
                  </section>
            </>
      );
}

export default ItemListContainer;
