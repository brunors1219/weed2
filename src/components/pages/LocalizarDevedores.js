import React from "react";
import Menu2 from "./Menu2";
import FooterSubject from "./FooterSubjetcs";

const LocalizarDevedores = () => {
  return (
    <>
      <div
        id="marcosteam-area"
        className="marcosteam-area mt-100 mb-70 wow fadeInUp"
      >

        <div className="container ">
          <div className="row">
            <div className="col-xl-4 col-lg-3 col-md-6 col-sm-12 menu-investicaco shadow p-2 mb-5 rounded">
              <div className="footer-single-wedget m-0">
                <div className="widget_nav_menu">
                <h3>Nossos Serviços</h3>
                  <Menu2 />
                </div>
              </div>
            </div>

            <div className="col-xl-8 col-lg-3 col-md-6 col-sm-12 ">
              <div className="section-title">
                <h4>Localização de devedores</h4>
              </div>
              <div className="about-content">
                <p>
                  {/* <strong>
                    Você está com problemas para localizar uma pessoa que te deve, à sua empresa ou para algum conhecido?
                    Precisa de um endereço ou número de telefone de alguém que desapareceu sem deixar vestígios?
                  </strong>
                  <br />
                  <br />
                  <h2>Então você está no lugar certo!</h2>
                  Nosso serviço de localização de devedores é, exatamente, o que você precisa.
                  <br />
                  <br />

                  Marcos Detetive e sua equipe dispõem de muitos meios, para fazer com que a localização de devedores se torne uma tarefa possível. No entanto, é um trabalho que exige tempo, já que, normalmente, quando devedores mal-intencionados querem fugir, eles trocam todos os seus meios de contato. Contudo, o Detetive Marcos e toda sua equipe possuem várias formas de localizar pessoas, profissionalmente, através de:
                  <br />
                  <br />

                  <li>Consulta às redes sociais;</li>
                  <li>Consulta aos familiares e amigos;</li>
                  <li>Consulta aos órgãos municipais, estaduais e federais, entre outros.</li>
                  <br />
                  Como se trata de detetive particular, todo serviço – claro – é feito com muita discrição e total sigilo

                  <br />
                  <br /> */}

                  Se você está precisando de um serviço de localização de devedores, entre em contato com Marcos Detetive Particular e nossa equipe, teremos o enorme prazer em ajudar você a receber o que lhe é devido. O seu problema também é nosso e nós estamos prontos para resolvê-lo e te ajudar!

                  <br />
                  
                  <FooterSubject />
                </p>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LocalizarDevedores;
