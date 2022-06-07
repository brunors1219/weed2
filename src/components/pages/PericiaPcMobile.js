import React from "react";
import Menu2 from "./Menu2";
import FooterSubject from "./FooterSubjetcs";

const PericiaPcMobile = () => {
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
                <h4>Perícia em computadores e celulares</h4>
              </div>
              <div className="about-content">
                <p>
                  Na atualidade, os aparelhos celulares fazem parte da vida de milhões de pessoas trazendo comodidade e recursos cada vez mais sofisticados aos seus usuários através da massificação da internet nesses dispositivos.
                  <br />
                  <FooterSubject />
                  {/* <br />
                  Vivemos em uma sociedade completamente voltada à informação e a disseminação de crimes virtuais que vêm crescendo exponencialmente, através destes aparelhos.
                  Assim, para combater esse tipo de crime, meios convencionais de investigação são ineficazes, uma vez que um serviço desse porte requer tempo, recursos e conhecimento.
                  <br />
                  <br />
                  Mesmo já fazendo parte das nossas vidas há algum tempo e nos mantendo em constante comunicação, com a evolução da tecnologia os dispositivos móveis estão atuando, entre outras funções, como escritório portátil, ferramenta social e entretenimento.
                  <br />
                  <br />
                  Com isso, milhares de pessoas estão fazendo cada vez mais o uso desenfread/o desses aparelhos digitais, gerando assim um grande repositório de informações. A perícia em meios práticos, busca formas de coletar provas e evidências digitais em aparelhos suspeitos.
                  <br />
                  <br />
                  <li>Você tem sentido que está vulnerável?</li>
                  <li>Você não se sente protegido por completo?</li>
                  <li>Você está suspeitando que pode estar sendo espionado ou rastreado através do seu aparelho?</li>
                  <li>Você acha que suas ligações podem estar sendo ouvidas por outras pessoas?</li>
                  <br />
                  Ajudamos você que está preocupado com alguma dessas dúvidas a solucioná-la de vez, através de uma perícia completa e eficaz em seu celular, computador ou tablet, com os melhores sistemas, softwares e equipamentos do mercado.
                  <br />
                  Entre em contato com Marcos Detetive e sua equipe e não seja mais uma vítima do roubo de dados! Agende um horário com nossa empresa e fique completamente protegido e despreocupado. */}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PericiaPcMobile;
