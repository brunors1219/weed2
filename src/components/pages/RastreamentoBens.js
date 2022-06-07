import React from "react";
import Menu2 from "./Menu2";
import FooterSubject from "./FooterSubjetcs";

const RastreamentoBens = () => {
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
                <h4>Rastreamento de bens desviados</h4>
              </div>
              <div className="about-content">
                <p>
                  Não são poucos os casos de fraudes em ações judiciais que prejudicam a celeridade processual e o julgamento idôneo de diversos casos no Poder Judiciário.
                  <br />
                  Como exemplo dessas fraudes, podemos citar: acidentes, ocultação de bens e pessoas, provas falsas ou forjadas, dilapidação patrimonial, frustração de penhoras e de buscas e apreensões, alienações parentais, pensão alimentícia, entre outros.
                  <br />
                  <FooterSubject />
                  {/* <br />
                  Algumas ações judiciais de caráter litigioso possuem trâmites específicos que podem levar o processo a se arrastar por longos anos.
                  <br />
                  <br />
                  Isso acontece porque, em um processo judicial, sua instauração e prosseguimento dependem de algumas condições para seu desenvolvimento válido e regular, como a localização e citação de uma pessoa, por exemplo. Além disso, o desfecho eficaz de um processo pode depender da análise de provas produzidas pelas partes litigantes, tais como: documentos, imagens, laudos técnicos, provas testemunhais, estudos sociais e psicológicos, apresentação de bens passíveis de constrição judicial etc.
                  <br />
                  <br />
                  Se uma pessoa, um bem ou uma prova não for localizado, isso impede a formação da relação processual e o feito judicial fica impedido de ter prosseguimento.
                  <br />
                  <br />
                  Ademais, se não forem apresentadas provas com conteúdo suficientemente esclarecedor ou se houver a produção de provas falsas, simuladas ou forjadas, o Juiz da causa pode ser induzido a erro e, consequentemente, uma das partes pode ser injustiçada.
                  <br />
                  <br />
                  Por essa razão, o DETETIVE MARCOS E SUA EQUIPE, tendo conhecimento jurídico de membros de sua equipe, composta também com uma parceria com escritórios advocatícios, sedimentou o serviço de Detetive Particular voltado para investigações judiciais defensivas, que se destina a coibir */}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RastreamentoBens;
