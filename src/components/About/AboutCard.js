import React from "react";
import Card from "react-bootstrap/Card";
import { ImLeaf } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
        <p style={{ textAlign: "justify" }}>
          ¡Hola! Soy <span className="mustard">Raymundo Zamora</span>, originario de la{" "}
          <span className="mustard">Ciudad de México.</span>
          <br />
          <br />
          Soy{" "}
          <span className="mustard">Ingeniero Mecatrónico</span>, egresado de la Facultad de Ingeniería de la UNAM,
          con una gran pasión por la tecnología y la innovación. Actualmente, desarrollo
          software para distintos proyectos, colaborando tanto con el{" "}<span className="mustard">Centro de Ciencias
          de la Complejidad (UNAM)</span>, como con el sector privado.
          <br />
          Además, soy co-propietario de{" "}
          <span className="mustard">Vita Nova</span>, una empresa dedicada a crear
          soluciones tecnológicas para diversas industrias, siempre con un enfoque en la
          accesibilidad y la sustentabilidad.
          <br />
          <br />
          Cuando no estoy programando, disfruto de algunas de mis grandes pasiones:
        </p>

        <ul>
          <li className="about-activity">
            <ImLeaf /> El cine
          </li>
          <li className="about-activity">
            <ImLeaf /> Los gatos
          </li>
          <li className="about-activity">
            <ImLeaf /> Las motocicletas
          </li>
          <li className="about-activity">
            <ImLeaf /> La lectura 
          </li>
          <li className="about-activity">
            <ImLeaf /> Las plantas 
          </li>
          <br />
        </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          "La verdadera generosidad con el futuro, consiste en darlo todo en el presente." {" "}
          <br />
          </p>
          <footer className="blockquote-footer">Albert Camus</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
