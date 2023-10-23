/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Hostel = () => {
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
        <h1>
          <b> Top 10 Hostel Essentials</b>
        </h1>
        <h2>Essential Hostel accessories</h2>
        <br />
        <p>
          So if you are preparing for a Hostel tour, here are 10 hostel
          accessories you must have in your backpack.
        </p>
      </div>
      <div className="container">
        <div className="row gy-2">
          <div className="col-sm-6 col-md-3">
            <div className="card h-100">
              <img
                className="card-img-top"
                src="images/sleeping-mask.png"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">Sleeping Masks</h5>
                <p className="card-text">
                  You can use it for long flights or taking a nap during the day
                  too. Make sure you get one made with silk. These are the most
                  comfortable!
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-3">
            <div className="card h-100">
              <img
                className="card-img-top"
                src="images/toilet papers.png"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">Toilet Papers</h5>
                <p className="card-text">
                  Going without a sleeping bag risks an uncomfortable night's
                  sleep at best, exposure at worst.
                </p>
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
                <h5 className="card-title">Water Bottles</h5>
                <p className="card-text">
                  Filtered water bottles are designed to filter chemical
                  impurities from municipal sources, while others can handle
                  microbiologically unsafe water from any global source.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-3">
            <div className="card h-100">
              <img
                className="card-img-top"
                src="images/first-aid-kit.png"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">First Aid Kit</h5>
                <p className="card-text">
                  {" "}
                  Your first aid kit should include other necessities as well:
                  scissors, adhesive, gauze, soap, a CPR mouth barrier and an
                  emergency whistle. Be sure to toss in bottles of sunscreen .{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-3">
            <div className="card h-100">
              <img
                className="card-img-top"
                src="images/knife.png"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">Pocket Knife</h5>
                <p className="card-text">
                  The pocket knife is the ultimate multipurpose tool of the
                  outdoors.If you leave your knife at home, expect to feel
                  frustrated–often.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-3">
            <div className="card h-100">
              <img
                className="card-img-top"
                src="images/UNO.png"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">Cards Game</h5>
                <p className="card-text">
                  Some people find it hard to communicate with others. Playing
                  card games is an effective way of breaking the ice in a group
                  of people where communication may otherwise be tense, awkward,
                  or stilted.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-3">
            <div className="card h-100">
              <img
                className="card-img-top"
                src="images/wireless-charger.png"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">Wireless Charger</h5>
                <p className="card-text">
                  A wireless mobile charger can power all Qi-compatible devices,
                  including phones, tablets, headsets, and wireless earbuds.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-3">
            <div className="card h-100">
              <img
                className="card-img-top"
                src="images/torch.png"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">Torch</h5>
                <p className="card-text">
                  . If you need to locate an item within your tent or visit the
                  latrine during the night, a portable, battery-powered light is
                  invaluable.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-3">
            <div className="card h-100">
              <img
                className="card-img-top"
                src="images/Trash Bin.png"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">Trash Bin</h5>
                <p className="card-text">
                  Use of proper trash bins is essential for segregation and
                  degradation/incineration purposes.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-3">
            <div className="card h-100">
              <img
                className="card-img-top"
                src="images/noise.png"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">Ear Plugs</h5>
                <p className="card-text">
                  They are noise cancelling and come with a small box to clip
                  inside your toiletry bag, for instance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hostel;
