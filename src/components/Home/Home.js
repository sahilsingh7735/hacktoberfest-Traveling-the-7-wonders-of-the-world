/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Home = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-white">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Travel
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a
                className="nav-link active"
                aria-current="page"
                href="/index.html"
              >
                Home
              </a>
              <a className="nav-link" href="/sevenWonders.html">
                Wonders
              </a>
              <a className="nav-link" href="/tent.html">
                Tent
              </a>
              <a className="nav-link" href="/about.html">
                About
              </a>
              <a className="nav-link" href="/whatToPack.html">
                whatToPack
              </a>
              <a className="nav-link" href="/hostel.html">
                Hostel
              </a>
              <a className="nav-link" href="/profile.html">
                Profile
              </a>
            </div>
          </div>
        </div>
      </nav>
      <h1 className="headText ">Welcome to Seven Wonders of World.</h1>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="images/seven_wonder images/tajmahal.jpg"
              className="d-block w-100"
              alt="Taj Mahal"
            />
          </div>
          <div className="carousel-item">
            <img
              src="images/seven_wonder images/petra.jpg"
              className="d-block w-100"
              alt="Petra"
            />
          </div>
          <div className="carousel-item">
            <img
              src="images/seven_wonder images/machupicchu.jpg"
              className="d-block w-100"
              alt="Machu Pichu"
            />
          </div>
          <div className="carousel-item">
            <img
              src="images/seven_wonder images/Great_wall_of_china.jpg"
              className="d-block w-100"
              alt="Great Wall of China"
            />
          </div>
          <div className="carousel-item">
            <img
              src="images/seven_wonder images/christ_the_redeemer.jpg"
              className="d-block w-100"
              alt="Christ the Redeemer Statue"
            />
          </div>
          <div className="carousel-item">
            <img
              src="images/seven_wonder images/chichen_itza_pyramid.jpg"
              className="d-block w-100"
              alt="Chichen Itza"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Home;
