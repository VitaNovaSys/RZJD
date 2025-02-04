import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Mucho gusto, <span className="purple"> ¡Permíteme </span> presentarme!
            </h1>
            <p className="home-about-body">
              Soy ingeniero mecatrónico y desarrollador de software, apasionado por la ingeniería, el diseño y la innovación tecnológica. Me motiva crear soluciones que integren accesibilidad y sustentabilidad, buscando un impacto positivo en cada proyecto.
              <br />
              <br />Actualmente, me dedico al
              <i>
                <b className="purple"> desarrollo de software para el sector privado, </b>
              </i>
              diseñando e implementando soluciones tecnológicas a la medida, enfocadas en la eficiencia y la innovación.
              <br />
              <br />Tengo habilidades para&nbsp;
              <i>
                <b className="purple">el trabajo en equipo, el aprendizaje continuo y la adaptación a distintos entornos.  </b> Soy {" "}
                <b className="purple">
                proactivo, orientado a objetivos 
                </b>
                {" "} y siempre busco nuevos retos para seguir creciendo profesionalmente.
              </i>
              <br />
              <br />
            Además, cuento con experiencia en diversas áreas:
            <br />
            <br />
            <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
              <li>
                <b>Desarrollo Web:</b>{" "}
                <i>
                  <b className="purple">HTML5, JavaScript, CSS3, React</b>
                </i>
              </li>
              <li>
                <b>Desarrollo de Apps:</b>{" "}
                <i>
                  <b className="purple">Kotlin, Swift, React Native, Expo</b>
                </i>
              </li>
              <li>
                <b>Lenguajes de Programación:</b>{" "}
                <i>
                  <b className="purple">Python, JavaScript</b>
                </i>
              </li>
              <li>
                <b>Diseño:</b>{" "}
                <i>
                  <b className="purple">Illustrator, Photoshop, Figma, Inventor</b>
                </i>
              </li>
              <li>
                <b>Herramientas y Tecnologías:</b>{" "}
                <i>
                  <b className="purple">Git, Miro</b>
                </i>
              </li>
              <li>
                <b>Otros:</b>{" "}
                <i>
                  <b className="purple">Gestión de Inventarios Físicos, Venta y Contacto de Proveedores Internacionales, Manejo de Paquetería Office, Análisis de Procesos y Realización de Mantenimiento Preventivo para Maquinaria</b>
                </i>
              </li>
            </ul>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/raymundo-daniel-zamora-juarez/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
