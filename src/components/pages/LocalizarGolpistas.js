import React from "react";
import Menu2 from "./Menu2";
import FooterSubject from "./FooterSubjetcs";

const LocalizarGolpistas = () => {
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
                <h4>Localização de golpista</h4>
              </div>
              <div className="about-content">
                <p>
                  O nosso trabalho de localização de golpistas é desenvolvido com seriedade e agilidade. Normalmente, quem busca esse tipo de serviço é alguém que foi vítima de pessoas ou empresas que já se valem dessa prática, com o intuito de dar golpes.
                  <br />
                  <FooterSubject />
                  
                  {/* <br />
                  Se você foi ou está desconfiado que está prestes a ser vítima de um estelionatário, nosso serviço de localização desses malfeitores é exatamente o que você precisa! Contamos com uma equipe altamente qualificada, especializada em pesquisar e localizar golpistas de todos os tipos.
                  <br />
                  <br />
                  Além de localizar ativos e devedores contumazes, investigar empresas que tentaram fugir sem a devida quitação de débitos, entre outros. Para que seja possível realizar este trabalho é necessário que o interessado possua qualquer informação do golpista, por exemplo, nome, endereços, telefones, fotos ou outro meio de identificação. Essas informações são usadas como ponto de partida para nosso trabalho.
                  <br />
                  <br />
                  O tempo necessário e o custo para se localizar um golpista vai depender das características de cada caso. Em algumas situações a localização é realizada em até 24 horas após a contratação.
                  <br />
                  <br />
                  Nossa equipe é formada por especialistas em encontrar devedores, golpistas e estelionatários. Contamos com técnicas inovadoras, parcerias diferenciadas, equipes estrategicamente posicionadas em diferentes partes do país e conhecimento tecnológico avançado.Temos todos os instrumentos necessários para iniciar a busca do que você precisa, usando todas nossas habilidades e conhecimentos, para desenvolver a investigação de maneira criativa e eficiente na localização desse devedor.
                  <br />
                  <br />
                  Ajudamos você que sofreu algum dano a localizar golpistas, com excelentes resultados em nossas buscas, utilizando de todas as medidas possíveis de solução.
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

export default LocalizarGolpistas;
