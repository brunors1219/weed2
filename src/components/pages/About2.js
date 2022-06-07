import React from "react";
import abimg1 from "img/about/about-1.jpg";
import { Link } from "react-router-dom";
const About2 = () => {
  return (
    <>
      <div id="marcosabout-area" className="marcosabout-area mt-100 mb-70">
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-6 col-md-12 wow fadeInLeft">
              <div className="about-img-area">
                <img src={abimg1} alt="about" />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 offset-xl-1 wow fadeInRight">
              <div className="section-title">
                <h4>Conhecendo</h4>
                <h3>
                  Detetive <span>Marcos</span>
                </h3>
              </div>
              <div className="about-content">
                <p>
                  Detetive Marcos é muito mais que um expert em serviços de Investigação Particular, é um profissional com formação superior em ciência da computação e multe-disciplinares, tendo 20 anos de estudos, sendo especialista em casos virtuais, voltado a prover soluções para problemas gerais, com qualidade incomparável, metodologias e tecnologias exclusivas, contando com especialização em investigações cibernéticas, especialização essa, que o levou a criar seus próprios softwares.
                    <br />
                  <br />
                  Detetive Marcos atuou em grandes empresas de softwares, como também participou de projetos que hoje são os principais meios de pesquisas mundiais. Projetos estes que agregaram para que se tornasse reconhecido e respeitado como grande profissional não só no mercado Nacional, como também fora dele.
                  <br />
                  <br />
                  O Detetive Marcos sempre prezou pela relação de confiança com os clientes e parceiros, tornando esse contato de extrema relevância.
                  <br />
                  <br />
                  Detetive Marcos está no mercado há 15 anos, oferecendo alta qualidade nos produtos e serviços prestados, com total respeito, visando a excelência no atendimento para a total satisfação de seus clientes.
                </p>
                <ul className="about-content-list">
                  <li>
                    <i className="fa fa-check"></i> Formado em ciência da computação
                  </li>
                  <li>
                    <i className="fa fa-check"></i> 20 anos de estudos
                  </li>
                  <li>
                    <i className="fa fa-check"></i> Softwares própio
                  </li>
                  <li>
                    <i className="fa fa-check"></i> 15 anos de mercado
                  </li>
                </ul>
                <p>
                  <strong>“SEU PROBLEMA, MEU PROBLEMA”.</strong>
                  <br />
                  Esta é a filosofia do Detetive Marcos e de toda sua equipe de profissionais.
                  <br />
                  Soluções rápidas para problemas difíceis.
                  <br />
                  Conte conosco!
              </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About2;
