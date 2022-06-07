import React from "react";
import { Link, useParams } from "react-router-dom";
import serv1 from "../img/services/1.png";
import serv2 from "../img/services/2.png";
import serv3 from "../img/services/3.png";
import serv4 from "../img/services/4.png";
import servbg from "../img/services/services-bg.jpg";
const Services = () => {
  const {uf} = useParams()
  return (
    <>
      <div
        id="marcosservices-area"
        className="marcosservices-area pt-130 pb-130"
      >
        <div className="marcosservices-area-img">
          <img src={servbg} alt="img" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-4 offset-xl-1 col-lg-4 order-2 wow fadeInRight">
              <div className="section-title lite">
                <h4>Vantagens</h4>
                <h3>Serviços</h3>
                <Link to={`${process.env.PUBLIC_URL + "/" + uf + "/rede_sociais"}`} 
                  className="btn btn-type-3">
                  Saiba mais{" "}
                  <i className="fa fa-long-arrow-right"></i>{" "}
                </Link>
              </div>
            </div>
            <div className="col-xl-7 col-lg-8 wow fadeInLeft">
              <div className="services-box">
                <div className="single-services">
                  <img src={serv1} alt="icon" />
                  <div className="services-content-box">
                    <h3>Prazo</h3>
                    <p>
                      Solução em 24/48 horas
                      ou no máximo 5 dias
                    </p>
                  </div>
                </div>

                <div className="single-services">
                  <img src={serv2} alt="icon" />
                  <div className="services-content-box">
                    <h3>Agilidade</h3>
                    <p>
                      Agilidade nos serviços e soluções rapidas
                    </p>
                  </div>
                </div>

                <div className="single-services">
                  <img src={serv3} alt="icon" />
                  <div className="services-content-box">
                    <h3>Atendimento</h3>
                    <p>
                      Discreto sem
                      necessidade de exposição.
                    </p>
                  </div>
                </div>

                <div className="single-services">
                  <img src={serv4} alt="icon" />
                  <div className="services-content-box">
                    <h3>Compromisso</h3>
                    <p>
                      Atuação comprometida
                      e discreta.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
