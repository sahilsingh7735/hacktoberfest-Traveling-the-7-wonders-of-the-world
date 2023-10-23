/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const WhatToPack = () => {
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

      <div className="heading">
        <h1>Things to Pack for Your Next Travel</h1>
      </div>

      <section className="justify-content-center align-items-center h-100 min-vh-100">
        <div className="container ">
          <div className="row gy-2 ">
            <div className="col-sm-6 col-md-3">
              <div className="shadow-sm card h-100 ">
                <img
                  className="card-img-top"
                  src="images/backpack.png"
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">Backpacks</h5>
                  <p className="card-text">
                    {" "}
                    Experienced hikers will almost always carry a suitable
                    hiking backpack.Unlike standard backpacks, a hiking backpack
                    design helps them work well out in the wilderness.{" "}
                  </p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="card h-100 ">
                <img
                  className="card-img-top"
                  src="images/tent.png"
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">Tents</h5>
                  <p className="card-text">
                    Whether you’re going out on a long or short trip that will
                    have you and someone else sleeping outdoors overnight, a
                    2-person tent is a must-have.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="card h-100">
                <img
                  className="card-img-top"
                  src="images/camera.png"
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">Camera</h5>
                  <p className="card-text">
                    You can also take better pictures with a travel camera. Most
                    cameras include larger image sensors compared to the sensors
                    used in smartphones.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="card h-100">
                <img
                  className="card-img-top"
                  src="images/watch.png"
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">Watch</h5>
                  <p className="card-text">
                    It’s crucial to have navigational tools with you when you’re
                    exploring trails in case of emergencies. When your watch is
                    a compass.It is easy to carry.{" "}
                  </p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="card h-100">
                <img
                  className="card-img-top"
                  src="images/gloves.png"
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">Gloves</h5>
                  <p className="card-text">
                    If you are planning on traveling to a cold place, gloves
                    will come in handy by not only keeping your hands warm but
                    also not making them dry.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="card h-100">
                <img
                  className="card-img-top"
                  src="images/sweater.png"
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">Sweaters</h5>
                  <p className="card-text">
                    The softness of knits makes them perfect for traveling, it's
                    low maintence, and keeps you warm from the cold atmosphere.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="card h-100">
                <img
                  className="card-img-top"
                  src="images/sunglasses.png"
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">Sunglass</h5>
                  <p className="card-text">
                    This accessory is vital for protecting your eyes and skin
                    from harmful UV rays that can cause skin damage including
                    wrinkles, cataracts, and glaucoma.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="card h-100">
                <img
                  className="card-img-top"
                  src="images/blanket.png"
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">Blankets</h5>
                  <p className="card-text">
                    A blanket should be large enough to cover most of the user's
                    body and thick enough to keep the body warm by trapping
                    radiant body heat that otherwise would be lost through
                    convection.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="card h-100">
                <img
                  className="card-img-top"
                  src="images/pillow.png"
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title"> Travel Pillows</h5>
                  <p className="card-text">
                    A travel pillow is a small pillow that can support your head
                    and neck when you can’t recline to a prone position.
                  </p>
                  {/* <a href="#" className="btn btn-primary">Go somewhere</a */}
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="card h-100">
                <img
                  className="card-img-top"
                  src="images/boots.png"
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">Hiking Boots</h5>
                  <p className="card-text">
                    Hiking boots bring much-needed stability and comfort to any
                    hiking experience. More importantly, they do a far better
                    job of protecting your feet and ankles from injury than
                    shoes.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="card h-100">
                <img
                  className="card-img-top"
                  src="images/towel.png"
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">Towels</h5>
                  <p className="card-text">
                    A travel towel is useful if you are planning to go on many
                    outdoor adventures.You can use it to dry off your gear if
                    you get caught in the rain,etc.{" "}
                  </p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="card h-100">
                <img
                  className="card-img-top"
                  src="images/water-bottles (1).png"
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">Filter Bottles</h5>
                  <p className="card-text">
                    Filtered water bottles are designed to filter chemical
                    impurities from municipal sources, while others can handle
                    microbiologically unsafe water from any global source.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhatToPack;
