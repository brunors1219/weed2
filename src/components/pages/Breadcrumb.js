import React from "react";
import { Link, useParams } from "react-router-dom";

const Breadcrumb = (props) => {
  const {uf} = useParams()

  return (
  <>
    <div id="marcosbreadcrumb-area" className="marcosbreadcrumb-area">
        <div className="container">
          <div className="row">
          <div className="col-md-12">
              <div className="breadcrumb-content-box">
                <h2>{props.name}</h2>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to={`${process.env.PUBLIC_URL + "/" + uf}`}>Home</Link>
                  </li>
                  <li className="breadcrumb-item active">{props.name}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Breadcrumb;
