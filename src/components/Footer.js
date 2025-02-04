import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillMail
} from "react-icons/ai";
import { FaLinkedinIn,
  FaWhatsapp
 } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Diseñado por Raymundo Zamora</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} RDZJ</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/raymundo-daniel-zamora-juarez/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
            <a 
             href="mailto:raymundodaniel.za@gmail.com" 
             style={{ color: "white" }}
              >
                <AiFillMail />
              </a>
            </li>
               <li className="social-icons">
               <a 
                        href="https://wa.me/525613933930" 
                         style={{ color: "white" }}
                         target="_blank" 
                        rel="noopener noreferrer"
                         >
                       <FaWhatsapp />
                      </a>
                    </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
