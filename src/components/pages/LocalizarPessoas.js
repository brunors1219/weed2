import React from "react";
import Menu2 from "./Menu2";
import FooterSubject from "./FooterSubjetcs";

const LocalizarPessoas = () => {
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
                <h4>Localizar Pessoas</h4>
              </div>
              <div className="about-content">
                <p>
                  {/* Quando o assunto é localizar uma pessoa, cada caso deve ser tratado como único.
                  <br />
                  <br /> */}
                  Tentar localizar alguém pode parecer uma tarefa fácil; na prática não é e, quando se tenta fazer uma busca pessoal, sem ajuda de um profissional, acaba-se revelando um esforço frustrante, demorado e, na maioria das vezes, infrutífero. Trata-se de um trabalho minucioso que demanda experiência e um envolvimento em tempo integral.
                  <br />
                  
                  <FooterSubject />
                  {/* Na maioria das vezes, nessa procura, você não tem nenhuma informação do indivíduo que deseja investigar. Em alguns casos, a pessoa dificulta a sua localização de forma proposital.
                  <br />
                  <br />
                  Por isso, ao invés de realizar esta difícil tarefa de encontrar pessoas desconhecidas ou desaparecidas, a decisão mais correta a ser tomada é: confiar em nossa equipe altamente qualificada e treinada de detetives particulares. Estes conduzem investigações detalhadas e discretas, de maneira profissional, que se adaptam às circunstâncias e a cada fragmento de evidência para obter resultados verdadeiros e positivos.
                  <br />
                  <br />
                  A nossa equipe, tem a expertise associada com o uso de tecnologias  avançadas, por meio de informações como, o número de telefone, nome, RG, CPF, endereço, página de rede social, fotos, placa de veículo, tem a capacidade de encontrar, desde devedores, até familiares, passando por situações como as de trapaceiros, eventuais réus, até, sujeitos que se ocultam propositalmente, no território nacional ou fora dele.
                  <br />
                  <br />
                  Encontrar quem você precisa pode ser uma tarefa árdua; mas nossa equipe está pronta para te ajudar. Conte conosco! Nosso serviço de detetive particular tem acesso a um relevante número de bancos de dados necessários para encontrar quem você procura.
                  <br />
                  <br />
                  Entre em contato hoje mesmo com Marcos Detetive e sua equipe e tenha um atendimento individualizado e diferenciado para o seu caso. Tenha em mente que o seu problema também é nosso e estamos prontos para te ajudar. */}
                </p>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LocalizarPessoas;
