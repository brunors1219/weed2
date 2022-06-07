import React, { useState } from "react";
import bg1 from "../img/slider/slider-2.jpg";
import bg_mb from "../img/slider/slider_mobile1.jpg";
import bg_mb1 from "../img/slider/slider_mobile.jpg";
import bg2 from "../img/slider/slider.jpg";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import { Link, useParams } from "react-router-dom";

const Mainslider = () => {
  const {uf} = useParams()

  const options = {
    loop: true,
    autoplay: true,
    slideSpeed: 300,
    paginationSpeed: 500,
    dots: false,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  };

  if (window.innerWidth <= 800) {
    return (
      <>
        <div id="marcosslider-area" className="marcosslider-area slider-area-bg">
          <div className="marcosmain-slider">
            <OwlCarousel className="owl-theme owl-carousel" {...options}>
              <div className="marcossingle-slider">
                <div className="slid-bg-1" style={
                  { background: `url('${bg_mb}')` }
                } />
                <div className="marcossingle-table">
                  <div className="marcossingle-tablecell">
                    <div className="container">
                      <div className="row">
                        <div className="col-xl-8 col-lg-10 col-md-12">
                          <div className="marcosslider-area-content">
                            <h4> Detetive Marcos</h4>
                            {uf.toUpperCase() === "MARCOS"
                            ? <>
                                <h2> Atendemos onde você estiver </h2>
                                <p>
                                  Em qualquer lugar do mundo!
                                </p>
                              </>
                            : <>
                                <h2> Solução de seu caso <br /> em <b>24 a 48</b> horas. </h2>
                                <p>
                                  Podendo estender no máximo 5 dias
                                </p>
                                <div className="slider-area-btn">
                                  <Link to={`${process.env.PUBLIC_URL + "/" + uf + "/investigacao"}`}
                                    className="btn btn-type-2">
                                    Saiba mais{" "}
                                    <i className="fa fa-long-arrow-right"></i>{" "}
                                  </Link>
                                </div>
                              </>
                            } 
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="marcossingle-slider">
                <div
                  className="slid-bg-1"
                  style={{ background: `url('${bg_mb1}')` }}
                ></div>
                <div className="marcossingle-table">
                  <div className="marcossingle-tablecell">
                    <div className="container">
                      <div className="row">
                        <div className="col-xl-8 col-lg-8 col-md-12">
                          <div className="marcosslider-area-content">
                            <h4>Casos Internacionais</h4>
                            {uf.toUpperCase() === "MARCOS"
                            ? <>
                                <h2> Especialista <b>Virtual!</b></h2>
                                <p>
                                  Atendimento imediato e discreto
                                </p>
                              </>
                            : <>
                                <h4>Atendimento</h4>
                                <h2>
                                  Atendimento <br /> sempre <b>discreto</b>
                                </h2>
                                <p>
                                  Sem necessidade de exposição
                                </p>
                                <div className="slider-area-btn">
                                  <Link to={`${process.env.PUBLIC_URL + "/" + uf + "/investigacao"}`} 
                                  className="btn btn-type-2">
                                    Saiba mais
                                      <i className="fa fa-long-arrow-right"></i>
                                  </Link>
                                </div>
                            </>                            
                            }
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="marcossingle-slider">
                <div
                  className="slid-bg-1"
                  style={{ background: `url('${bg_mb1}')` }}
                ></div>
                <div className="marcossingle-table">
                  <div className="marcossingle-tablecell">
                    <div className="container">
                      <div className="row">
                        <div className="col-xl-8 col-lg-8 col-md-12">
                          <div className="marcosslider-area-content">
                            <h4>Excelência em Investigação</h4>
                            {uf.toUpperCase() === "MARCOS"
                            ? <>
                                <h2> Atendimento Internacional </h2>
                                <p>
                                    Não importa onde está!
                                    <br />
                                    Nós atendemos você!
                                </p>
                              </>
                            : <>
                                <h4>Atendimento</h4>
                                <h2>
                                  Atendimento em <br /> todo <b>Brasil</b> e Exterior
                                </h2>
                                {/* <p>
                                  Sem necessidade de exposição
                                  </p> */}
                                <div className="slider-area-btn">
                                  <Link to={`${process.env.PUBLIC_URL + "/" + uf + "/investigacao"}`} 
                                  className="btn btn-type-2">
                                    Saiba mais
                                      <i className="fa fa-long-arrow-right"></i>
                                  </Link>
                                </div>

                              </>
                            }
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </>
    )}

  return (
    <>
      <div id="marcosslider-area" className="marcosslider-area slider-area-bg">
        <div className="marcosmain-slider">
          <OwlCarousel className="owl-theme owl-carousel" {...options}>
            <div className="marcossingle-slider">
              <div className="slid-bg-1" style={
                { background: `url('${bg1}')` }
              } />
              <div className="marcossingle-table">
                <div className="marcossingle-tablecell">
                  <div className="container">
                    <div className="row">
                      <div className="col-xl-8 col-lg-10 col-md-12">
                        <div className="marcosslider-area-content">
                            <h4>Detetive Marcos</h4>
                            {uf.toUpperCase() === "MARCOS"
                            ? <>
                                <h2> Atendemos onde você estiver </h2>
                                <p>
                                  Em qualquer lugar do mundo!
                                </p>
                              </>
                            : <>
                              <h2> Solução de seu caso <br /> em <b>24 a 48</b> horas. </h2>
                              <p>
                                Podendo estender no máximo 5 dias
                              </p>
                            </>
                          }
                          <div className="slider-area-btn">
                            <Link to={`${process.env.PUBLIC_URL + "/" + uf + "/investigacao"}`} 
                              className="btn btn-type-2">
                              Saiba mais{" "}
                              <i className="fa fa-long-arrow-right"></i>{" "}
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="marcossingle-slider">
              <div
                className="slid-bg-1"
                style={{ background: `url('${bg2}')` }}
              ></div>
              <div className="marcossingle-table">
                <div className="marcossingle-tablecell">
                  <div className="container">
                    <div className="row">
                      <div className="col-xl-8 col-lg-8 col-md-12">
                        <div className="marcosslider-area-content">
                            <h4>Casos Internacionais</h4>
                            {uf.toUpperCase() === "MARCOS"
                            ? <>
                                <h2> Especialista <b>Virtual!</b></h2>
                                <p>
                                  Atendimento imediato e discreto
                                </p>
                              </>
                            : <>
                                <h4>Atendimento</h4>
                                <h2>
                                  Atendimento <br /> sempre <b>discreto</b>
                                </h2>
                                <p>
                                  Sem necessidade de exposição
                                </p>
                              </>
                          }
                          <div className="slider-area-btn">
                            <Link to={`${process.env.PUBLIC_URL + "/" + uf + "/investigacao"}`} 
                              className="btn btn-type-2">
                              Saiba mais
                              <i className="fa fa-long-arrow-right"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="marcossingle-slider">
              <div
                className="slid-bg-1"
                style={{ background: `url('${bg2}')` }}
              ></div>
              <div className="marcossingle-table">
                <div className="marcossingle-tablecell">
                  <div className="container">
                    <div className="row">
                      <div className="col-xl-8 col-lg-8 col-md-12">
                        <div className="marcosslider-area-content">
                          <h4>Excelência em Investigação</h4>
                          {uf.toUpperCase() === "MARCOS"
                              ? <>
                                  <h2> Atendimento Internacional </h2>                              
                                  <p>
                                    Não importa onde está!
                                    <br />
                                    Nós atendemos você!
                                  </p>
                                </>
                              : <>
                                  <h4>Atendimento</h4>
                                  <h2>
                                      Atendimento em <br /> todo <b>Brasil</b> e <b>Exterior</b>
                                  </h2>
                                  {/* <p>
                                    Sem necessidade de exposição
                                  </p> */}
                                </>
                          }
                          <div className="slider-area-btn">
                            <Link to={`${process.env.PUBLIC_URL + "/" + uf + "/investigacao"}`} 
                              className="btn btn-type-2">
                              Saiba mais
                              <i className="fa fa-long-arrow-right"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </div>
    </>
  );
};

export default Mainslider;
