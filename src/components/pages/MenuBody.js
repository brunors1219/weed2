import React from "react";
import { Link } from "react-router-dom";
import serv1 from "../img/services/1.png";
import serv2 from "../img/services/2.png";
import serv3 from "../img/services/3.png";
import serv4 from "../img/services/4.png";
import servbg from "../img/services/menus.jpg";
import Menu2 from "./Menu2";
const MenuBody = () => {
  return (
    <>
      <div
        id="marcosservices-area"
        className="marcosservices-area"
        style={{backgroundColor: "#FFF"}}
      >
        {/* <div className="marcosservices-area-img">
          <img src={servbg} alt="img" />
        </div> */}
        <div className="container">
          <div className="row">
            
            <div className="col-xl-12 col-lg-8 wow fadeInLeft menu-investicaco shadow p-2 mb-5 rounded" style={{marginTop: "50px", zIndex: 1}}>
            <div className="footer-single-wedget m-0">
                <div className="widget_nav_menu">
                <h3>Nossos Serviços</h3>
                  <Menu2 />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuBody;
