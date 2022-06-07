import React, { useState, useEffect } from "react";
import brand from "../img/logo-2.png";
import { Link, useParams } from "react-router-dom";
import Menu2 from "./Menu2";
import Unidades from "../context/Unidades"
import { setLocale } from "yup";
import HandleMask from "../context/HandleMask"

const Footer = (props) => {
  const [locale, setLocale] = useState([])
  const [address, setAddress] = useState([])
  const { uf } = useParams()


  useEffect(() => {
    setLocale(Unidades.renderRegiao(uf))
    setAddress(Unidades.renderAddress(uf))
  }, [])



  return (
    <>
      <footer>
        <div id="marcosfooter-area" className="marcosfooter-area pt-100 pb-70">
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-lg-3 col-md-6 col-sm-12">
                <div className="footer-single-wedget">
                  <div className="custom-html-widget">
                    <div className="footer-logo">
                      <Link
                      to={`${process.env.PUBLIC_URL + "/" + uf}`}>
                        <img
                          src={brand}
                          alt="footer-logo"
                          className="img-fluid"
                        />
                      </Link>
                    </div>
                    <ul className="footer-social">

                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-xl-4 col-lg-3 col-md-6 col-sm-12">
                <div className="footer-single-wedget">
                  <div className="widget_nav_menu">
                    <h3>Acesso rápido</h3>
                    <Menu2 />
                  </div>
                </div>
              </div>

              <div className="col-xl-4 col-lg-3 col-md-6 col-sm-12">
                <div className="footer-single-wedget">
                  <div className="custom-html-widget">
                    <h3>Contatos</h3>
                    <ul className="contact-details">
                      {
                        locale.map(cont =>
                          <li key={cont.contato}>
                            <a href={`https://api.whatsapp.com/send/?phone=${cont.contato}`} className="fa fa-whatsapp" target="_blank"/>
                            {cont.cidade}<br /> Whatsapp: {HandleMask(cont.contato)}
                            <br/>{cont.mensagem}
                          </li>
                        )
                      }
                      { address
                        ?address.map(value => 
                          <li>
                            <a className="fa fa-map-marker"></a> {value.address}, <br/> {value.city}, {value.cep}
                          </li>
                        )
                        :null
                      }
                      
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="marcoscopyright-area pt-30 pb-30">
          <div className="container">
            <div className="row">
              <div className="col-xl-12 col-lg-12">
                <div className="footer-copyright text-center">
                  <p>
                    © 2017 Todos os direitos reservados
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
