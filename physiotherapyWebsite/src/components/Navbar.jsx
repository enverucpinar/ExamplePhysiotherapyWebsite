import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg"
        style={{ backgroundColor: "#5B645D" }}
      >
        <div className="container my-3">
          <Link className="navbar-brand" to="/">
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Anasayfa
                </Link>
              </li>
              <li className="nav-item mx-3">
                <Link className="nav-link" to="/hakkimizda">
                  Hakkımızda
                </Link>
              </li>
              <li className="nav-item mx-3">
                <Link className="nav-link" to="/hizmetlerimiz">
                  Hizmetlerimiz
                </Link>
              </li>
              <li className="nav-item mx-3">
                <Link className="nav-link" aria-disabled="true" to="/iletisim">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
