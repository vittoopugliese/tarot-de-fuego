import React from "react";
import "./home.css"

export const Home = () => {
  return (
    <section className="home-bg" id="Inicio">
      <div className="home-section">
        <div className="side-one">
          <li className="font-tarot">Tarot del Fuego</li>

          <h1>
            LAS MARAVILAS
            <br />
            DEL UNIVERSO <br />
            EN TUS MANOS
          </h1>

          <p>
            Conocé el mágico mundo del tarotismo. <br />
            Descargá la app y sumate a un nuevo comienzo.
          </p>

          <button>Descargá Ya</button>
        </div>
        <div className="side-two">
          <div className="socials">
            <div className="social-icon-container">
              <img src="./vectors/instagram.svg" alt="Instagram" width="40px" />
            </div>
            <div className="social-icon-container">
              <img src="./vectors/twitter.svg" alt="Twitter" width="40px" />
            </div>
            <div className="social-icon-container">
              <img src="./vectors/linkedin.svg" alt="LinkedIn" width="40px" />
            </div>
          </div>

          <div className="about-container">
            <div className="about">
              <div className="about-header">
                <img src="./vectors/people.svg" alt="about-me" width="24px" />
                <p>Sobre Mí</p>
              </div>
              <p>
                Creé Tarot del Fuego para compartir la información del
                esoterismo con toda la comunidad. <br />
                Que todos los apasionados del arte tengan un sitio donde
                aprender y enseñar, todos conectados entre sí.
              </p>

              <div className="flecha">
                <img
                  src="./vectors/arrow.svg"
                  alt="arrow-go-to-link"
                  width="44px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
