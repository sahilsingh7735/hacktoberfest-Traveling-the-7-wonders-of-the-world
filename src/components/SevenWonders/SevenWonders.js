/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const SevenWonders = () => {
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
      <h1>Welcome to Seven Wonders of the World</h1>
      <hr />
      <table className="center">
        <tr>
          <td>
            <p>
              <img
                src="D:\GitHubContribution\web\SevenWonders\Images\Taj-Mahal-Agra-India.webp"
                alt="Taj-Mahal"
              />
            </p>
          </td>
          <td>
            <h2>1. TajMahal</h2>
            <hr />
            <p>
              <ul>
                <li>place: India, Agra.</li>
                <li>Built by: Saha Jahan.</li>
                <li>Architecture: Mughal.</li>
                <li>
                  It took about 22 years and 20,000 workers to construct the
                  complex.
                </li>
              </ul>
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <h2>2. Colosseum</h2>
            <hr />
            <p>
              <ul>
                <li>place: Italy, Rome.</li>
                <li>Built by: Vespasian.</li>
                <li>
                  It was capable of holding 50,000 spectators, <br />
                  who watched a variety of events.
                </li>
                <li>
                  According to some estimates, about 500,000 people died <br />{" "}
                  in the Colosseum.
                </li>
              </ul>
            </p>
          </td>
          <td>
            <p>
              <img
                src="D:\GitHubContribution\web\SevenWonders\Images\Colosseum-Rome-Italy.webp"
                alt="Colosseum"
              />
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <p>
              <img
                src="D:\GitHubContribution\web\SevenWonders\Images\Great-Wall-of-China-Beijing.webp"
                alt="Great-Wall-of-China"
              />
            </p>
          </td>
          <td>
            <h2>3. Great Wall of China</h2>
            <hr />
            <p>
              <ul>
                <li>place: China, Beijing.</li>
                <li>Work began in: 7th Century BCE.</li>
                <li>
                  It is widely thought to be about 5,500 miles (8,850 km) or
                  13,170 miles(21,200 km) long.
                </li>
                <li>
                  {" "}
                  Although it was built to prevent invasions and raids, <br />
                  the wall largely failed to provide actual security
                </li>
              </ul>
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <h2>4. Chichén Itzá</h2>
            <hr />
            <p>
              <ul>
                <li>place: Italy, Rome.</li>
                <li>Built by: Vespasian.</li>
                <li>
                  It was capable of holding 50,000 spectators, <br />
                  who watched a variety of events.
                </li>
                <li>
                  According to some estimates, about 500,000 people died <br />{" "}
                  in the Colosseum.
                </li>
              </ul>
            </p>
          </td>
          <td>
            <p>
              <img
                src="D:\GitHubContribution\web\SevenWonders\Images\El-Castillo-pyramid-plaza-Toltec-state-Yucatan.webp"
                alt="El-Castillo-pyramid-plaza-Toltec-state-Yucatan"
              />
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <p>
              <img
                src="D:\GitHubContribution\web\SevenWonders\Images\statue-Christ-the-Redeemer-Rio-de-Janeiro.webp"
                alt="statue-Christ"
              />
            </p>
          </td>
          <td>
            <h2>5. Christ the Redeemer</h2>
            <hr />
            <p>
              <ul>
                <li>place: Brazil, Rio de Janeiro.</li>
                <li>
                  designed by: Heitor da Silva Costa, Carlos Oswald, and Paul
                  Landowski
                </li>
                <li>Construction began: 1926 and completed: 1931-32</li>
                <li>Height: 98 feet (30 meters) ,Not Including base.</li>
              </ul>
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <h2>6. Machu Picchu</h2>
            <hr />
            <p>
              <ul>
                <li>place: Peru, Chuzco.</li>
                <li>discovered: in 1911</li>
                <li>discovered by: Hiram Bigham</li>
                <li>It was likely a pilgrimage site.</li>
              </ul>
            </p>
          </td>
          <td>
            <p>
              <img
                src="D:\GitHubContribution\web\SevenWonders\Images\Machu-Picchu.webp"
                alt="Machu-Picchu"
              />
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <p>
              <img
                src="D:\GitHubContribution\web\SevenWonders\Images\Khaznah-Petra-Jordan.webp"
                alt="Khaznah"
              />
            </p>
          </td>
          <td>
            <h2>7. Petra</h2>
            <hr />
            <p>
              <ul>
                <li>place: Jordan, Agra.</li>
                <li>
                  Located in a remote valley, Petra reportedly had a population
                  of 30,000.
                </li>
                <li>Rediscovered: 1912</li>
                <li>
                  Largely ignored by archaeologists, and many questions remain
                  about the city.
                </li>
              </ul>
            </p>
          </td>
        </tr>
      </table>
    </>
  );
};

export default SevenWonders;
