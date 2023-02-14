
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/120.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import Resume from "./cv.pdf"
import { ArrowRightCircle } from 'react-bootstrap-icons';
export const Contact = () => {


  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2 > Download Resume</h2>
                <a href={Resume} download>
                  <button>Download CV <ArrowRightCircle size={25} /></button>
                  </a>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
