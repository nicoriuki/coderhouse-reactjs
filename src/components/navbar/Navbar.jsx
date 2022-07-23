import CartWidget from "./CartWidget";

const navBar = () => {
      return (
            <nav className="nav">
                  <ul className="nav__links">
                        <li className="nav__item">
                              <a className="nav__link " href="">
                                    Inicio
                              </a>
                        </li>
                        <li className="nav__item">
                              <a className="nav__link" href="">
                                    Pacientes
                              </a>
                        </li>
                        <li className="nav__item">
                              <a className="nav__link" href="">
                                    Agenda
                              </a>
                        </li>
                        <li className="nav__item">
                              <a className="nav__link" href="">
                                    Consultas
                              </a>
                        </li>
                  </ul>
                  <div className="icon">
                        <CartWidget />
                  </div>
            </nav>
      );
};
export default navBar;
