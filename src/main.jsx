import React from "react";
import ReactDOM from "react-dom/client";
import {Header} from "./components/Header/Header";
import {Home} from "./components/Home/Home";
import {Recomendations} from "./components/Recomendations/Recomendations";
import {Services} from "./components/Services/Services";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <main>
    <Header />
    <Home />
    <Services />
    <Recomendations />
  </main>
);
