import React from "react";
import OwlCarousel from "react-owl-carousel";
import mulher from "../img/testimonial/mulher.svg";
import homem from "../img/testimonial/homem.svg";
import "owl.carousel/dist/assets/owl.carousel.css";

const Testimonial = () => {
  const options = {
    loop: true,
    autoplay: true,
    smartSpeed: 1000,
    dots: false,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      992: {
        items: 2,
      },
      1200: {
        items: 2,
      },
    },
  };
  return (
    <>
      <div
        id="marcostestimonial-area"
        className="marcostestimonial-area mt-100 mb-100 wow fadeInUp"
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="section-title">
                <h4>Depoimentos</h4>
                <h3>Clientes satisfeitos</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="testimonial-wraper">
                <OwlCarousel className="owl-theme owl-carousel" {...options}>
                  <div className="single-testimonial">
                    <div className="testimonial-img">
                      <img
                        src={homem}
                        className="img-fluid"
                        alt="testimonial-img"
                      />
                    </div>
                    <div className="testimonial-content">
                      <p>
                        O profissional é excelente, atendeu com rapidez, solucionou o problema muito rápido. Equipe muito atenciosa. Recomendo!
                      </p>
                      <div className="title-desig">
                        <h3>Leonardo Dutra</h3>
                      </div>
                    </div>
                  </div>

                  <div className="single-testimonial">
                    <div className="testimonial-img">
                      <img
                        src={mulher}
                        className="img-fluid"
                        alt="testimonial-img"
                      />
                    </div>
                    <div className="testimonial-content">
                      <p>
                        O trabalho prestado pelo profissional foi excelente. Respostas sempre muito rápidas. Recomendo!
                      </p>
                      <div className="title-desig">
                        <h3>Daniele Rodrigues</h3>
                      </div>
                    </div>
                  </div>

                  <div className="single-testimonial">
                    <div className="testimonial-img">
                      <img
                        src={mulher}
                        className="img-fluid"
                        alt="testimonial-img"
                      />
                    </div>
                    <div className="testimonial-content">
                      <p>
                        O profissional e sua equipe são  ótimos. Entregaram o trabalho no prazo combinado e sem problemas. Muito agradecida.
                      </p>

                      <div className="title-desig">
                        <h3>Marina Campos</h3>
                      </div>
                    </div>
                  </div>

                  <div className="single-testimonial">
                    <div className="testimonial-img">
                      <img
                        src={homem}
                        className="img-fluid"
                        alt="testimonial-img"
                      />
                    </div>
                    <div className="testimonial-content">
                      <p>
                        Os profissionais são dedicados com o serviço. Tudo o que é pedido é feito da maneira como foi pedido e bem rápido. Aprovado!
                      </p>

                      <div className="title-desig">
                        <h3>Bruno Silva</h3>
                      </div>
                    </div>
                  </div>

                  <div className="single-testimonial">
                    <div className="testimonial-img">
                      <img
                        src={homem}
                        className="img-fluid"
                        alt="testimonial-img"
                      />
                    </div>
                    <div className="testimonial-content">
                      <p>
                        Gostei muito do atendimento, atendeu minhas expectativas.
                      </p>

                      <div className="title-desig">
                        <h3>João Paulo</h3>
                      </div>
                    </div>
                  </div>

                  <div className="single-testimonial">
                    <div className="testimonial-img">
                      <img
                        src={mulher}
                        className="img-fluid"
                        alt="testimonial-img"
                      />
                    </div>
                    <div className="testimonial-content">
                      <p>
                        Detetive Particular com ética, técnica, confiabilidade e preço justo. Deu certo! Eu recomendo, muito profissional!!
                      </p>

                      <div className="title-desig">
                        <h3>Cynthia</h3>
                      </div>
                    </div>
                  </div>

                  <div className="single-testimonial">
                    <div className="testimonial-img">
                      <img
                        src={homem}
                        className="img-fluid"
                        alt="testimonial-img"
                      />
                    </div>
                    <div className="testimonial-content">
                      <p>
                        Gostei muito do atendimento, atendeu minhas espectativas. Obrigado pelo atendimento e profissionalismo.
                      </p>

                      <div className="title-desig">
                        <h3>Paulo</h3>
                      </div>
                    </div>
                  </div>

                  <div className="single-testimonial">
                    <div className="testimonial-img">
                      <img
                        src={mulher}
                        className="img-fluid"
                        alt="testimonial-img"
                      />
                    </div>
                    <div className="testimonial-content">
                      <p>
                        Fui muito bem atendida com um trabalho de qualidade. Valeu a pena, orçamento grátis e não é careiro. Meu problema foi solucionado com muita rapidez e muita clareza. Muito Obrigada!
                      </p>

                      <div className="title-desig">
                        <h3>Ana Flávia</h3>
                      </div>
                    </div>
                  </div>

                </OwlCarousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
