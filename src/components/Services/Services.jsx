import React from "react";
import "./services.css"

const services = [
  {
    title: "Tirada Horoscópica",
    text: "Para la tirada horoscópica se comienzan a acomodan las cartas una por una de acuerdo al sentido de las manecillas del reloj de acuerdo a como se muestra en la imagen de abajo. Se va destapando una a una y se interpretan de acuerdo al propósito de la tirada.",
    image: "./images/cards.png",
  },
  {
    title: "Arbol de la vida",
    text: "En la tirada del árbol de la vida se deben acomodar las cartas de acuerdo a la imagen de abajo, sin contar la onceava carta ya mencionada que se colocará a un costado",
    image: "./images/cards.png",
  },
  {
    title: "La Cruz Celta",
    text: "De acuerdo a su posición en la tirada, en la cual se deben utilizar únicamente los arcanos mayores (aunque hay quien usa también los menores.",
    image: "./images/cards.png",
  },
  {
    title: "Tirada del 7 Mágico",
    text: "La tirada del 7 Mágico ayuda a que obtengamos una mejor visión de las advertencias o alertas que nos ayudarán a evitar problemas a futuro. De igual manera, es una tirada que nos permite comprender la personalidad del consultante de manera general. ",
    image: "./images/cards.png",
  },
];

export const Services = () => {
  return (
    <section className="services-bg">
      <div className="services-section">
        <h1>Servicios</h1>

        {services.map((ser, index) => {
          return (
            <div className="services-card" style={{
                flexDirection: index % 2 ? "row-reverse" : "row",
              }} key={ser.title}>
              <div className="services-texts" style={{
                textAlign: index % 2 ? "right" : "left",
                alignItems: index % 2 ? "flex-end" : "flex-start",
              }}>
                <h2>{ser.title}</h2>
                <p>{ser.text}</p>
                <button className="service-button">Solicitar
                  <img src="./vectors/arrow2.svg" alt="arrow-go-to" width="30px"/>
                </button>
              </div>
              <img src={ser.image} alt={ser.title} width="474px" />
            </div>
          );
        })}
      </div>
    </section>
  );
};
