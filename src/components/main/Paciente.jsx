import React from "react";

export default function Paciente({ paciente }) {
      return (
            <article className="paciente">
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
                                    <span>{paciente.edad} Años</span>
                              </h5>
                              <div>
                                    <p className="pCard__text ">
                                          {paciente.descripcion}
                                    </p>
                              </div>
                              <button className="pCard__btn">
                                    Historia Clinica
                              </button>
                        </div>
                  </div>
            </article>
      );
}
