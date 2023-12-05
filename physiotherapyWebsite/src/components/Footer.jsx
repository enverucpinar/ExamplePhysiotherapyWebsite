import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <div className="bg-dark text-light">
        <footer className="row container mx-auto py-3 mt-4 ">
          <div className="col-md-3 text-start">
            <div className="border-bottom">
              <h3 className="my-3">Newsletters</h3>
            </div>
            <p className="text-secondary my-2">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam,
              provident.
            </p>
          </div>
          <div className="col-md-3 text-start">
            <div className="border-bottom">
              <h3 className="my-3">Terapiler</h3>
            </div>
            <div className="text-secondary">
              <ul style={{ padding: "0" }}>
                <li className="list-group-item my-2">Masaj Terapisi</li>
                <li className="list-group-item my-2">Fizyoterapi</li>
                <li className="list-group-item my-2">Akupunktur</li>
              </ul>
            </div>
          </div>
          <div className="col-md-3 text-start">
            <div className="border-bottom">
              <h3 className="my-3">Sosyal Medya</h3>
            </div>
            <div className="text-secondary">
              <ul style={{ padding: "0" }}>
                <li className="list-group-item my-2">
                  {" "}
                  <Link
                    className="nav-link"
                    style={{ fontSize: "25px" }}
                    aria-disabled="true"
                    to="#"
                  >
                    <i class="fa-brands fa-facebook"></i>
                  </Link>
                </li>
                <li className="list-group-item my-2">
                  {" "}
                  <Link
                    className="nav-link"
                    style={{ fontSize: "25px" }}
                    aria-disabled="true"
                    to="#"
                  >
                    <i class="fa-brands fa-instagram"></i>
                  </Link>
                </li>
                <li className="list-group-item my-2">
                  {" "}
                  <Link
                    className="nav-link"
                    style={{ fontSize: "25px" }}
                    aria-disabled="true"
                    to="#"
                  >
                    <i class="fa-brands fa-youtube"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3 text-start">
            <div className="border-bottom">
              <h3 className="my-3">Adres</h3>
            </div>
            <div className="text-secondary">
              <ul style={{ padding: "0" }}>
                <li className="list-group-item my-2">
                  <Link className="nav-link" aria-disabled="true" to="#">
                    <div className="d-flex">
                      <i className="fa-solid fa-location-dot me-4"></i>
                      <p>Lorem ipsum dolor sit.</p>
                    </div>
                  </Link>
                </li>
                <li className="list-group-item my-2">
                  <Link className="nav-link" aria-disabled="true" to="#">
                    <div className="d-flex">
                      <i class="fa-solid fa-phone me-4"></i>
                      <p>05346457898</p>
                    </div>
                  </Link>
                </li>
                <li className="list-group-item my-2">
                  <Link className="nav-link" aria-disabled="true" to="#">
                    <div className="d-flex">
                      <i class="fa-solid fa-envelope me-4"></i>
                      <p>hhaahahhahah@gmail.com</p>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
