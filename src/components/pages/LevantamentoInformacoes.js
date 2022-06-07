import React from "react";
import FooterSubject from "./FooterSubjetcs";
import Menu2 from "./Menu2";

const LevantamentoInformacoes = () => {
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
                <h4>Levantamento de informações</h4>
              </div>
              <div className="about-content">
                <p>
                  {/* Uma das demandas mais frequentes da empresa Detetive Marcos é o levantamento de informações. Para isso realizamos busca de dados de pessoa física ou jurídica, de veículos, imóveis, barcos, lanchas, máquinas de pequeno, médio e grande porte, entre outros.
                  <br />
                  <br />
                  Temos como objetivo fornecer ao cliente informações precisas, atualizadas e que possam atender completamente aos seus objetivos. Nesse âmbito, o tempo necessário e o custo para levantar as informações concretas variam de acordo com o tipo de investigação solicitada. Em algumas situações, a informação é fornecida ao cliente em até 24 horas após a contratação.
                  <br />
                  <br />
                  Utilizamos as melhores tecnologias disponíveis no mercado que contribuem com resultados de excelência. Os trabalhos realizados pelo Detetive Marcos e sua equipe são desenvolvidos de acordo com a demanda do cliente, garantindo os melhores métodos, preços, produtos e resultados para cada situação.
                  <br />
                  <br /> */}
                  Entre em contato conosco e tenha um atendimento individualizado. Tenha em mente que o seu problema também é nosso, e estamos prontos para te ajudar.
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

export default LevantamentoInformacoes;
