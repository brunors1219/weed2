import React from "react";
import CountUp from "react-countup";
import icon1 from "../img/counter/1.svg";
import icon2 from "../img/counter/2.svg";
import icon3 from "../img/counter/3.svg";
import icon4 from "../img/counter/4.svg";
const Counter = () => {
  return (
    <>
      <div
        id="marcoscounter-area"
        className="marcoscounter-area mb-70 wow fadeInUp"
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
              <div className="about-single-counter text-center">
                <img src={icon1} alt="icon" />
                <h2 className="counter">
                  <CountUp start={0} end={653} duration={10.75} />
                </h2>
                <span>Clientes felizes</span>
              </div>
            </div>

            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
              <div className="about-single-counter text-center">
                <img src={icon2} alt="icon" />
                <h2 className="counter">
                  <CountUp start={0} end={465} duration={10.75} />
                </h2>
                <span>Casos resolvidos</span>
              </div>
            </div>

            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
              <div className="about-single-counter text-center">
                <img src={icon3} alt="icon" />
                <h2 className="counter">
                  <CountUp start={0} end={784} duration={10.75} />
                </h2>
                <span>Projetos feitos</span>
              </div>
            </div>

            {/* <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
              <div className="about-single-counter text-center">
                <img src={icon4} alt="icon" />
                <h2 className="counter">
                  <CountUp start={0} end={123} duration={2.75} />
                </h2>
                <span>coffe cup</span>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Counter;
