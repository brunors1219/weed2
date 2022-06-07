import React from "react";
import Menu2 from "./Menu2";
import Footer from "./FooterSubjetcs";
import FooterSubject from "./FooterSubjetcs";

const Investigation = () => {
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
                <h4>Investigação nas redes sociais</h4>
              </div>
              <div className="about-content">
                <p>
                  As redes sociais se tornaram uma vitrine, através da qual é possível acompanhar o que as pessoas fazem, pensam e compartilham o tempo todo.
                    <br />
                  <br />
                  Mas e aquilo que as pessoas não mostram ou, até mesmo, escondem, nas redes sociais: como descobrir? Você sabia que é possível estar bem informado e atualizado sobre tudo o que está acontecendo?
                  <br />

                  <FooterSubject />
                  {/* 
                  Entre os diversos tipos de investigação que a empresa Marcos Detetive Particular e sua equipe propõem, um deles é a desenvolvida nas redes sociais. Este é um meio relevante, para descobrir casos de traição conjugal, verificar o comportamento de filhos, espionagem empresarial, entre outros.
                  <br />
                  <br />

                  Agora, o Detetive Marcos conta com uma equipe especialista em redes sociais, com profissionais altamente capacitados e treinados, em investigar todas as plataformas digitais existentes. Nesse contexto, a união do nosso conhecimento prévio associado à expertise dos nossos profissionais especialistas no assunto, fez com o que nossa empresa se tornasse a pioneira nesse ramo específico de investigação.
                  <br />
                  <br />

                  Com o conhecimento de nossa equipe aliado à tecnologia que possuímos, informações tidas como absolutamente ocultas podem acabar sendo desvendadas por nossa equipe.  Além desses meios citados, temos outros métodos de enorme eficiência!
                  <br />
                  <br />

                  Você está com dúvidas relacionadas a Redes Sociais como: WhatsApp, Instagram, LinkedIn, Twitter, Tinder, Happn e outras diversas redes?
                  <br />
                  <br />

                  Entre em contato com nossa equipe para obter mais detalhes sobre todas as opções que possuímos nessa área.
                  <br />
                  <br />


                  <strong>“SE ESTÁ CONECTADO, PODE SER INVESTIGADO!!!”.</strong>
                  */}
                </p>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Investigation;
