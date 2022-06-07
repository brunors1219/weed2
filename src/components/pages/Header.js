import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams, withRouter } from "react-router";
import brand from "../img/logo-3.png";

const Header = (props) => {
  const [scroll, setScroll] = useState(false);
  const [whidth, setWhidth] = useState(false);

  const {uf} = useParams()

  useEffect(() => {

    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 10);
    });

    setWhidth(window.innerWidth <= 1200);

  }, []);

  // form class add & delete
  const classadd = () => {
    document.querySelector("#search-btn");
    document.querySelector(".search-form-area").classList.add("active");
  };

  const classdelet = () => {
    document.querySelector("#close-btn");
    document.querySelector(".search-form-area").classList.remove("active");
  };

  return (
    <>
      <header>
        <div
          className={
            scroll ? "header-area sticky animated slideInDown" : whidth ? "header-area sticky" : "header-area"
          }
        >
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="marcosmain-menu-area">
                  <nav className="navbar navbar-expand-xl navbar-light main-menu">
                    <Link
                      className="navbar-brand"
                      to={`${process.env.PUBLIC_URL + "/" + uf}`}
                    >
                      <img src={brand} alt="logo" style={{width: "200px"}}/>
                    </Link>
                    <button
                      className="navbar-toggler"
                      type="button"
                      data-toggle="collapse"
                      data-target="#navbarSupportedContent"
                      aria-controls="navbarSupportedContent"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <i className="fa fa-align-left"></i>
                    </button>

                    <div
                      className="collapse navbar-collapse"
                      id="navbarSupportedContent"
                    >
                      <ul className="navbar-nav ml-auto mr-auto">
                        <li className="nav-item">
                          <Link
                            className="nav-link"
                            to={`${process.env.PUBLIC_URL + "/" + uf}`}
                          >
                            Home
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            className="nav-link"
                            to={`${process.env.PUBLIC_URL + "/" + uf + "/sobre"}`}
                          >
                            Sobre
                          </Link>
                        </li>
                        <li className="nav-item dropdown">
                          <Link
                            className="nav-link dropdown-toggle"
                            to="#"
                            id="navbarDropdown"
                            role="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            Serviços
                          </Link>
                          <div
                            className="dropdown-menu fade-down"
                            aria-labelledby="navbarDropdown"
                          >
                            <Link
                              className="dropdown-item"
                              to={`${process.env.PUBLIC_URL + "/" + uf + "/rede_sociais"}`}
                            >
                              Investigação nas redes sociais
                            </Link>
                            <div className="separet-divider"></div>
                            <Link
                              className="dropdown-item"
                              to={`${process.env.PUBLIC_URL + "/" + uf + "/localizar_pessoas"}`}
                            >
                              Localizar Pessoas
                            </Link>
                            <div className="separet-divider"></div>
                            <Link
                              className="dropdown-item"
                              to={`${process.env.PUBLIC_URL + "/" + uf + "/localizar_devedores"}`}
                            >
                              Localização de devedores
                            </Link>
                            <Link
                              className="dropdown-item"
                              to={`${process.env.PUBLIC_URL + "/" + uf + "/localizar_golpista"}`}
                            >
                              Localização de Golpista
                            </Link>
                            <Link
                              className="dropdown-item"
                              to={`${process.env.PUBLIC_URL + "/" + uf + "/levantamento"}`}
                            >
                              Levantamento de informações
                            </Link>
                            <Link
                              className="dropdown-item"
                              to={`${process.env.PUBLIC_URL + "/" + uf + "/rastreamento"}`}
                            >
                              Rastreamento de bens desviados
                            </Link>
                            <Link
                              className="dropdown-item"
                              to={`${process.env.PUBLIC_URL + "/" + uf + "/pericia"}`}
                            >
                              Perícia em computadores e celulares
                            </Link>
                            <Link
                              className="dropdown-item"
                              to={`${process.env.PUBLIC_URL + "/" + uf + "/dossie"}`}
                            >
                              Dossiê completo pessoa/empresa
                            </Link>
                          </div>
                        </li>
                        <li className="nav-item">
                          <Link
                            className="nav-link"
                            to={`${process.env.PUBLIC_URL + "/" + uf + "/investigacao"}`}
                          >
                            Investigação Online
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            className="nav-link"
                            to={`${process.env.PUBLIC_URL + "/" + uf +  "/contato"}`}
                          >
                            Contato
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="search-form-area">
          <div className="search-form-centered">
            <div id="search-box">
              <i
                id="close-btn"
                className="fa fa-times fa-2x"
                onClick={classdelet}
              ></i>
              <form className="search-form">
                <input
                  className="form-control"
                  placeholder="Type your text"
                  type="text"
                />
                <button type="submit">
                  <span>Search</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default withRouter(Header);
