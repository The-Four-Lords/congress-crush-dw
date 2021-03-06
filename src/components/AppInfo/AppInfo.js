import React from "react";
import GooglePlayApp from "../../assets/images/Android-app-on-google-play.png";
import MobilePreview from "../../assets/images/mobile_preview.png";
import "./AppInfo.css";

const AppInfo = () => {
  return (
    <main className="container">
      <section className="hero container">
        <h1>Congress Crush</h1>
        <p>
          Juego de estilo puzzle en el que deberás combinar fichas para
          conseguir 350 escaños. Consigue combinaciones y escucha las frases mas
          emblematicas de nuestros políticos.
        </p>
        <div className="links">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://play.google.com/store/apps/details?id=thefourlords.congressCrush"
          >
            <img src={GooglePlayApp} alt="App on Google Play" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://the-four-lords.github.io/congress-crush-web-v/"
          >
            <div className="web-promo">
              <span>WEB VERSION</span>
              <span></span>Play without installs
            </div>
          </a>
        </div>
      </section>
      <figure>
        <img src={MobilePreview} alt="Mobile preview" />
      </figure>
    </main>
  );
};

export default AppInfo;
