import React, { useState, useEffect } from "react";
import { Box } from '@chakra-ui/react';

const Header = (props) => {
  const [scroll, setScroll] = useState(false);
  const [whidth, setWhidth] = useState(false);

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
      <Box>
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
                    <a
                      className="navbar-brand"
                      href="#"
                    >
                      <img src="/img/logo.png" alt="logo" style={{width: "200px"}}/>
                    </a>
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
                          <a
                            className="nav-a"
                            href="#"
                          >
                            Quem Somos
                          </a>
                        </li>
                        <li className="nav-item dropdown">
                          <a
                            className="nav-a dropdown-toggle"
                            href="#"
                            id="navbarDropdown"
                            role="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            Serviços
                          </a>
                          <div
                            className="dropdown-menu fade-down"
                            aria-labelledby="navbarDropdown"
                          >
                            <a
                              className="dropdown-item"
                              href="#"
                            >
                              Lista de convidados
                            </a>
                            <div className="separet-divider"></div>
                            <a
                              className="dropdown-item"
                              href="#"
                            >
                              Confirmação de presença
                            </a>
                            <div className="separet-divider"></div>
                            <a
                              className="dropdown-item"
                              href="#"
                            >
                              Controle de entrada (Qr-Code)
                            </a>
                            <a
                              className="dropdown-item"
                              href="#"
                            >
                              Lista de presentes
                            </a>
                            <a
                              className="dropdown-item"
                              href="#"
                            >
                              Fotos on-line
                            </a>
                          </div>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-a"
                            href="#"
                          >
                            Fotos on-line
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-a"
                            href="#"
                          >
                            Contato
                          </a>
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
      </Box>
    </>
  );
};

export default Header;
