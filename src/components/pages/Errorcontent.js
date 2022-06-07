import React from "react";

const Errorcontent = () => {
  return (
    <>
      <div
        id="marcoserror-area"
        className="marcoserror-area text-center mt-100 mb-100"
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 mx-auto">
              <div className="marcoscontent-box">
                <h2>404</h2>
                <h3>oops! essa página não pode ser encontrada.</h3>
                <p>
                parece que nada foi encontrado neste local.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Errorcontent;
