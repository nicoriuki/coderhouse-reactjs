function ItemListContainer({ nombre, descripcion, imagen, edad }) {
      return (
            <>
                  <div
                        className="card row  justify-content-center"
                        style={{ width: 300 }}
                  >
                        <div>
                              <img
                                    className="card-img-top imgPaciente"
                                    src={imagen}
                                    alt="Card image cap"
                              />
                        </div>
                        <div className="card-body">
                              <h5 className="card-title">
                                    {nombre}
                                    {"  "}
                                    <span>{edad} Años</span>
                              </h5>
                              <div>
                                    <p className="card-text ">{descripcion}</p>
                              </div>
                              <a href="#" className="btn btn-primary mt-3">
                                    Historia Clinica
                              </a>
                        </div>
                  </div>
            </>
      );
}

export default ItemListContainer;
