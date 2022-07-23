import { useState, useEffect } from "react";

function AgregarEvento({ stockEventos, initial }) {
      const [eventos, setEventos] = useState(initial);
      const [stock, setStock] = useState(stockEventos);

      useEffect(() => {
            stock === 0 ? setEventos(0) : setEventos(initial);
      }, [stock]);

      function onAdd() {
            setStock(stock - eventos);

            alert(eventos);
       
      }

      function sumar() {
            setEventos(eventos + 1);
      }
      function restar() {
            setEventos(eventos - 1);
      }

      return (
            <>
                  <div className="contadorContainer">
                        <h2>Agregar Eventos ,Cantidad Disponible {stock}</h2>
                        <div className="contador">
                              <button
                                    disabled={eventos === 0}
                                    onClick={restar}
                                    className="btn-cont"
                              >
                                    -
                              </button>
                              <h3 className="cont">{eventos}</h3>
                              <button
                                    disabled={eventos >= stock}
                                    onClick={sumar}
                                    className="btn-cont"
                              >
                                    +
                              </button>
                        </div>
                        <div className="agregar">
                              <button
                                    disabled={eventos === 0}
                                    onClick={onAdd}
                                    className="btnAgregar"
                              >
                                    AGREGAR EVENTOS
                              </button>
                        </div>
                  </div>
            </>
      );
}
export default AgregarEvento;
