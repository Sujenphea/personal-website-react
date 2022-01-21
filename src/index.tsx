import React from "react";
import ReactDOM from "react-dom";
// import * as serviceWorker from "./../archive/serviceWorker";
import "./reset.css";
import "./index.css";
import Home from "./pages/home";
import Biography from "./pages/biography";
import Projects from "./pages/projects";
import Experiences from "./pages/experiences";
import Contact from "./pages/contact";

const Index = () => {
  return (
    <div>
      <section id="home">
        <Home />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="experiences">
        <Experiences />
      </section>
      <section id="biography">
        <Biography />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
