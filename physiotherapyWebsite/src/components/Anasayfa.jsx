import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Anasayfa() {
  const navigate = useNavigate();

  return (
    <div>
      {/* Slider */}
      <div
        id="carouselExampleCaptions"
        className="carousel slide "
        style={{ maxHeight: "100vh" }}
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={2}
            aria-label="Slide 3"
          />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://fitveform.com/wp-content/uploads/2021/09/fizyoterapi-merkezi-istanbul.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://sportoteam.com.tr/wp-content/uploads/2019/10/fizyoterapi-1-960x640.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://fitveform.com/wp-content/uploads/2021/09/fizyoterapi-merkezi-istanbul.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* Hakkımızda */}
      <div
        className="row mx-auto my-5  py-4"
        style={{ paddingInline: "100px" }}
      >
        <div className="col-md-7">
          <h3 className="text-start" style={{ fontSize: "40px" }}>
            <span>Biz </span>
            <span style={{ color: "orange" }}>Kimiz?</span>
          </h3>
          <p className="text-start mt-3" style={{ fontSize: "25px" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas harum
            dignissimos ex consectetur ducimus illum. Lorem ipsum dolor, sit
            amet consectetur adipisicing elit. Minima doloribus voluptate eum
            architecto sit velit.
          </p>
        </div>
        <div className="col-md-5">
          <img
            style={{ height: "300px" }}
            className="rounded-circle mt-3"
            src="https://www.therapath.org/wp-content/uploads/2019/09/about-3.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Anasayfa;
