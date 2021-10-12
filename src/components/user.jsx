import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "../components/css/user.css";
import data from "./data/menu.json";

const User = ({ setWaiter }) => {
  const dataUsers = data.users;
  return (
    <Fragment>
      <div className="containerUser">
           {dataUsers.map((user) => (
          <div key={user.id} className="cardUser">
             <Link className='buttonUser' to={{ pathname: "/menu" }} onClick={() => setWaiter(user.name)} >
              <img src={user.img} className="imgUser" alt="..." />
              <p className="card-text">{user.name}</p>
              </Link>
          </div>
        ))}
          </div>

    </Fragment>
  );
};

export default User;
