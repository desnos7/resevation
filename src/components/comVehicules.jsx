import React from "react";

import { Link} from "react-router-dom";

function comVehicules({ voiture }) {

    return (
  <div className="container ">
    <div className="card  mt-5">
      <div className="row">
        <div className="col-sm-5">
          <img
            className="d-block w-100"
            src={voiture.imageurls[0]}
            alt=""
          />
        </div>
        <div className="col-sm-7 ">
          <div className="card-block ">
            <h4 className="card-title">{voiture.name}</h4>

            <p>Copy paste the HTML and CSS.</p>
            <p>Change around the content for awsomenes</p>
            <p>Copy paste the HTML and CSS.</p>
            <p>Change around the content for awsomenes</p>
            <p>Copy paste the HTML and CSS.</p>
            <p>{voiture.description}</p>
            <br />
            <a href="#" className="btn btn-primary btn-sm float-right  p-4 ">
            VOIR PLUS
            </a>
            <Link to={`/reservation/${voiture._id}`} className="btn btn-primary btn-sm float-right p-4">
              RESERVEZ
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default comVehicules;
