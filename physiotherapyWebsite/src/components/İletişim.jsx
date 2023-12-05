import React from "react";
import map from "../map.png";
import { Link } from "react-router-dom";

function İletişim() {
  return (
    <div>
      <div
        className="row container mx-auto my-5"
        style={{ marginTop: "100px", fontSize: "20px" }}
      >
        <div className="col-md-6">
          <h3 className="text-start">Adres:</h3>
          <p className="text-start">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ab
            doloribus perspiciatis.
          </p>
          <h5 className="text-start">Yol Tarifi:</h5>
          <p className="text-start">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero
            nostrum cumque cupiditate aut. Repellendus?
          </p>
          <div className=" p-3" style={{ border: "1px solid black" }}>
            <h3>İletişim Formu</h3>
            <form action="">
              <input
                type="text"
                className="form-control my-3 w-50 m-auto"
                placeholder="Ad Soyad"
              />
              <input
                type="text"
                className="form-control my-3 w-50 m-auto"
                placeholder="E-posta"
              />
              <input
                type="text"
                className="form-control my-3 w-50 m-auto"
                placeholder="Mesaj"
              />
              <button className="btn btn-success " style={{ width: "50%" }}>
                GÖNDER
              </button>
            </form>
          </div>
        </div>
        <div className=" col-md-6 mt-5 container mx-auto">
          <div className="col-md-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6012.923102316549!2d28.982263919339225!3d41.10260993137638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cabac5f6ca7e2f%3A0xf6cc00022ab036c6!2sDesignFloor!5e0!3m2!1str!2str!4v1698258832673!5m2!1str!2str"
              width={600}
              height={450}
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default İletişim;
