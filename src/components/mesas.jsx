import React from "react";
import "../components/css/mesas.css";

const Mesas = ({ setTable, table }) => {
  return (
    <div className=" Menu-dropdown">
      {table === "" && (
        <button
          className="btnMesa btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton2"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          ESCOGE MESA
        </button>
      )}
      {table === "" && (
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton2">
          <li>         
            <button className="dropdown-item" onClick={() => setTable("1")}>
              Mesa 1
            </button>
          </li>
          <li>
            <button className="dropdown-item" onClick={() => setTable("2")}>
              Mesa 2
            </button>
          </li>
          <li>
            <button className="dropdown-item" onClick={() => setTable("3")}>
              Mesa 3
            </button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Mesas;
