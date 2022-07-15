import CartWidget from "./CartWidget";

const navBar = () => {
      return (
            <div className="container">
                  <nav className="navbar navbar-expand-lg bg-dark">
                        <div className="container-fluid ">
                              <a
                                    className="navbar-brand text-bg-dark p-3"
                                    href="#"
                              >
                                    Consultorio
                              </a>
                              <div className="d-flex justify-content-end">
                                    <div
                                          className="collapse navbar-collapse "
                                          id="navbarNav"
                                    >
                                          <ul className="navbar-nav d-flex">
                                                <li className="nav-item">
                                                      <a
                                                            className="nav-link text-bg-dark p-3"
                                                            aria-current="page"
                                                            href="#"
                                                      >
                                                            Inicio
                                                      </a>
                                                </li>
                                                <li className="nav-item">
                                                      <a
                                                            className="nav-link text-bg-dark p-3"
                                                            href="#"
                                                      >
                                                            <p>
                                                                  Pacientes
                                                                  {"      "}
                                                                  <CartWidget />
                                                            </p>
                                                      </a>
                                                </li>
                                                <li className="nav-item">
                                                      <a
                                                            className="nav-link text-bg-dark p-3"
                                                            href="#"
                                                      >
                                                            Agenda
                                                      </a>
                                                </li>
                                          </ul>
                                    </div>
                              </div>
                        </div>
                  </nav>
            </div>
      );
};
export default navBar;
