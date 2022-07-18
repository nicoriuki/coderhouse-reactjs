function ItemListContainer(props) {
      return (
            <>
                  <div className="row mt-4 ms-4 justify-content-center ">
                        {props.data.pacientes.map((paciente) => (
                              <div
                                    key={paciente.id}
                                    className="col-4 mb-2 mt-2"
                              >
                                    <div
                                          className="card row  justify-content-center"
                                          style={{ width: 300 }}
                                    >
                                          <div>
                                                <img
                                                      className="card-img-top imgPaciente"
                                                      src={paciente.imagen}
                                                      alt="Card image cap"
                                                />
                                          </div>
                                          <div className="card-body">
                                                <h5 className="card-title">
                                                      {paciente.name}
                                                      {"  "}
                                                      <span>
                                                            {paciente.edad} Años
                                                      </span>
                                                </h5>
                                                <div>
                                                      <p className="card-text ">
                                                            {
                                                                  paciente.descripcion
                                                            }
                                                      </p>
                                                </div>
                                                <a
                                                      href="#"
                                                      className="btn btn-primary mt-3"
                                                >
                                                      Historia Clinica
                                                </a>
                                          </div>
                                    </div>
                              </div>
                        ))}
                  </div>
            </>
      );
}

export default ItemListContainer;
