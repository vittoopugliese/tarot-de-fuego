import React from "react";
import "./recomendations.css"

const recomendations = [
  {
    title: "La dinámica del inconsciente",
    text: "Esta obra nos presenta el aspecto mas oscuro de la personalidad adulta, es decir, la dinmica del inconsciente, que es preciso confrontar para que podamos crecer hacia el encuentro de nuestra sabidura interior",
    image: "./images/card1.png",
  },
  {
    title: "Los planetas interiores",
    text: "Si el universo es una proyección de nuestro interior y el horóscopo un símbolo de nuestro potencial, la colección Nuevas Tendencias en Astrología se propone explorar el movimiento de los cuerpos.",
    image: "./images/card2.png",
  },
];

export const Recomendations = () => {
  return (
    <section className="recomendations-bg" id="Recomendaciones">
      <div className="recomendations-section">
        <h1>Recomendaciones</h1>

        {recomendations.map((rec, index) => {
          return (
            <div className="recomendations-card" style={{
                flexDirection: index % 2 ? "row-reverse" : "row",
              }} key={rec.title}>
              <div className="recomendations-texts">
                <h2>{rec.title}</h2>
                <p>{rec.text}</p>
              </div>
              <img src={rec.image} alt={rec.title} width="300px" />
            </div>
          );
        })}
      </div>
    </section>
  );
};
