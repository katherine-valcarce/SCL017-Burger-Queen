import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "../components/identify.css";

const Identify = () => {
return (
    <Fragment>
    <div className="container">
        <img
        src={"https://imgur.com/1tvsB1K.png"}
        alt="burgir"
        className="logo"
        />
        <div className="selectWorker">
        <h1 className="text1">SELECCIONA UNA OPCIÓN</h1>
        <Link className="btn-primary" to="/user">
            Mesero
        </Link>
        <button className="btn-secondary" disabled>
            {" "}
            Cocina
        </button>
        </div>
    </div>
    </Fragment>
);
};

export default Identify;
