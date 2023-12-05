// KadroDetail.js
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { kadro } from "../kadro";

function KadroDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const kadroItem = kadro.find((k) => k.id === parseInt(id));

  if (!kadroItem) {
    return (
      <div>
        <div
          className="row mx-auto container"
          style={{ minHeight: "80vh", marginTop: "100px" }}
        >
          {kadro.map((k) => (
            <div className="col-md-4 mt-3">
              <img
                className="rounded"
                src={k.fotograf}
                alt={k.isim}
                style={{
                  maxWidth: "300px",
                  height: "400px",
                  cursor: "pointer",
                }}
                onClick={() => navigate(`${k.id}`)}
              />
              <h4>{k.isim}</h4>{" "}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div>
      <div
        className="row container mx-auto"
        style={{ minHeight: "90vh", marginTop: "100px" }}
      >
        <div className="col-md-4">
          <img
            style={{ maxWidth: "300px", cursor: "pointer" }}
            src={kadroItem.fotograf}
            alt={kadroItem.isim}
          />

          <div className="border-bottom">
            <h1 className=" my-2">{kadroItem.isim}</h1>
          </div>
          <div className="my-3 text-start">
            <p>
              <i className="fa-solid fa-envelope me-4"></i>
              {kadroItem.mail}
            </p>
            <p>
              <i className="fa-solid fa-phone me-4"></i>
              {kadroItem.telefon}
            </p>
            <button className="btn btn-success">Randevu Alın</button>
          </div>
        </div>
        <div className="col-md-8 text-start">
          <p>{kadroItem.ozgecmis}</p>
        </div>
      </div>
    </div>
  );
}

export default KadroDetail;
