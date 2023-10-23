/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const About = () => {
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

      <div className="container-fluid d-flex align-items-center justify-content-center mt-5">
        <div className="row d-flex align-items-center justify-content-center">
          <div className="col-12 col-sm-4 col-lg-3 ">
            <img
              className="imgm shadow-lg bg-white"
              src="https://images.bstatic.de/cctruODXJQT8AnicSYceWCRepGA=/480x480/filters:focal(1490x946:1510x966)/images/d766dc92/1b09/429c/8035/f0af521741a5.jpg"
              alt="nill"
            />
          </div>
          <div className="col-12 col-sm-8 col-lg-9 ">
            <div className=" p-5 bg-dark  text-white rounded">
              <h1>Robert Downy Jr.</h1>
              <p>
                A traveller from U.S. According to him "Travel takes us out of
                our comfort zones and inspires us to see, taste and try new
                things. It constantly challenges us, not only to adapt to and
                explore new surroundings, but also to engage with different
                people, to embrace adventures as they come and to share new and
                meaningful experiences with friends and loved ones."
              </p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="container">
        <h2 className="text-center">Places Robert wanted to visit </h2>
        <div id="demo" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#demo"
              data-bs-slide-to="0"
              className="active"
            ></button>
            <button
              type="button"
              data-bs-target="#demo"
              data-bs-slide-to="1"
            ></button>
            <button
              type="button"
              data-bs-target="#demo"
              data-bs-slide-to="2"
            ></button>
            <button
              type="button"
              data-bs-target="#demo"
              data-bs-slide-to="3"
            ></button>
          </div>

          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://assets.traveltriangle.com/blog/wp-content/uploads/2017/12/Malital-snow.jpg"
                alt="nill"
                className="d-block m-auto slim"
              />
              <div className="carousel-caption">
                <h3 className="wtob">Nainital</h3>
                <p className="wtob">This snowfall is attracting me :p</p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://images.ctfassets.net/cnu0m8re1exe/6Xf1pu8Tv0tPTAiPjOs0es/13b2238fd3ea11fd658ad71596d28abd/shutterstock_1387848629.jpg?fm=jpg&fl=progressive&w=660&h=433&fit=fill"
                alt="Chicago"
                className=" d-block m-auto slim"
              />
              <div className="carousel-caption">
                <h3 className="wtob">Machu Picchu</h3>
                <p className="wtob">Ahahaha, The beauty 🥰</p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Taj_Mahal_2%2C_Agra%2C_India.jpg/1200px-Taj_Mahal_2%2C_Agra%2C_India.jpg"
                alt="New York"
                className=" d-block m-auto slim"
              />
              <div className="carousel-caption">
                <h3 className="wtob">Taj Mahal</h3>
                <p className="wtob">The sign of Love 💖</p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://interactive.wttw.com/sites/default/files/explore-chicago-from-the-air-hero_02.jpg"
                alt="New York"
                className=" d-block m-auto slim"
              />
              <div className="carousel-caption">
                <h3 className="wtob">Chicago</h3>
                <p className="wtob">Want to explore from air </p>
              </div>
            </div>
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#demo"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#demo"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
      </div>

      <br />
      <br />
      <br />
      <div className="container">
        <h2 className="text-center">Places Robert has visited with Rating </h2>
        <div id="demo1" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#demo1"
              data-bs-slide-to="0"
              className="active"
            ></button>
            <button
              type="button"
              data-bs-target="#demo1"
              data-bs-slide-to="1"
            ></button>
            <button
              type="button"
              data-bs-target="#demo1"
              data-bs-slide-to="2"
            ></button>
            <button
              type="button"
              data-bs-target="#demo1"
              data-bs-slide-to="3"
            ></button>
          </div>

          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://res.klook.com/image/upload/Mobile/City/afmqgg5h0jl9wnr1dfmf.jpg"
                alt="nill"
                className="d-block m-auto slim"
              />
              <div className="carousel-caption">
                <h3 className="wtob">Rome</h3>
                <p className="wtob">Reminded me ancient Romans stories</p>
                <div
                  className="progress d-block m-auto"
                  // style="height:10px;width: 30%;"
                >
                  <div
                    className="progress-bar"
                    // style="width:85%;height:10px"
                  ></div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://www.tripsavvy.com/thmb/qkZz_jekpKdX6QuMoz2O9G7C2Iw=/3069x1726/smart/filters:no_upscale()/Venice-5c0896c5c9e77c00018ddfa5.jpg"
                alt="Chicago"
                className=" d-block m-auto slim"
              />
              <div className="carousel-caption">
                <h3 className="wtob">Venice</h3>
                <p className="wtob">loved the City of Lakes</p>
                <div
                  className="progress d-block m-auto"
                  // style="height:10px;width: 30%;"
                >
                  <div
                    className="progress-bar"
                    // style="width:70%;height:10px"
                  ></div>
                </div>
                <br />
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://lp-cms-production.imgix.net/2019-06/GettyImages-470607634_high.jpg"
                alt="New York"
                className=" d-block m-auto slim"
              />
              <div className="carousel-caption">
                <h3 className="wtob">Ajanta Caves</h3>
                <p className="wtob">Ancient Indian culture was fantastic</p>
                <div
                  className="progress d-block m-auto"
                  // style="height:10px;width: 30%;"
                >
                  <div
                    className="progress-bar"
                    // style="width:90%;height:10px"
                  ></div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://lp-cms-production.imgix.net/2021-03/shutterstockRF_429620146.jpg"
                alt="New York"
                className=" d-block m-auto slim"
              />
              <div className="carousel-caption">
                <h3 className="wtob">Dubai</h3>
                <p className="wtob">Want to be on highest peak </p>
                <div
                  className="progress d-block m-auto"
                  // style="height:10px;width: 30%;"
                >
                  <div
                    className="progress-bar"
                    // style="width:70%;height:10px"
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#demo1"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#demo1"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
        <br />
        <br />
      </div>
    </>
  );
};

export default About;
