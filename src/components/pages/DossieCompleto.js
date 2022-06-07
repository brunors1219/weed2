import React from "react";
import Menu2 from "./Menu2";
import FooterSubject from "./FooterSubjetcs";

const DossieCompleto = () => {
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
                <h4>Dossiê completo pessoa / empresa</h4>
              </div>
              <div className="about-content">
                <p>
                  {/* “Dossiê” é um conjunto de dados e informações sigilosas colhidas, relacionadas a um indivíduo. Elas vão desde o seu nascimento, até a data de contratação do serviço, obtendo dados públicos e privados, seja no âmbito pessoal, conjugal, profissional, entre outros, fazendo com que o cliente tenha uma visão real e elucidativa da pessoa investigada.
                  <br /> */}
                  <br />
                  Essa modalidade é feita, sob medida, pela Marcos Detetives e sua equipe de detetives particulares, conforme as necessidades de cada cliente. Desta forma, o caso é particularmente estudado, fazendo com que a investigação seja realizada de acordo com a necessidade do cliente. As informações obtidas são compiladas em um dossiê, podendo ser de pessoa física ou jurídica.
                  <br />
                  <FooterSubject />
                  {/* <br />
                  É importante destacar que as provas colhidas durante a investigação são válidas judicialmente.
                  <br />
                  <br />
                  Seguem alguns exemplos de informações que conseguimos alcançar:
                  <br />
                  <br />
                  <li>Emprego atual e anteriores;</li>
                  <li>Confirmação de dados;</li>
                  <li>Irregularidades junto a órgãos públicos;</li>
                  <li>Endereço atual e antigos;</li>
                  <li>Telefones cadastrados (fixos e celulares);</li>
                  <li>Veículos cadastrados;</li>
                  <li>Empresas no nome;</li>
                  <li>Ficha criminal, entre outros.</li>
                  <br />
                  Surpreenda-se com as informações e provas concretas que podemos encontrar para você.
                  <br />
                  <br />
                  Entre em contato com a empresa Detetive Marcos e tenha o seu problema resolvido! */}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DossieCompleto;
