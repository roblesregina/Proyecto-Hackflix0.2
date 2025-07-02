import React from "react";
import {Link} from "react-router-dom";

function Navbar({onToggleSearch}) {
  return (
    <nav className="navbar navbar-expand-lg bg-black px-4">
      <Link className="navbar-brand" to="/">
        <img
          src="/img/logo.png"
          alt="Hackflix"
          style={{height: "40px", objectFit: "contain"}}
        />
      </Link>
      <div className="ms-auto d-flex">
        <button
          onClick={onToggleSearch}
          className="btn bg-black text-white me-2"
          type="button">
          Buscar
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
