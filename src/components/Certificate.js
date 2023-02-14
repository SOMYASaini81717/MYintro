import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/C-1.png";
import projImg2 from "../assets/img/C-2.jpg";
import projImg3 from "../assets/img/C-3.jpg";

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Certificate = () => {
    const projects = [
        {
          title: "O Level",
          description: "NIELIT",
          imgUrl: projImg1,
        },
        {
          title: "CCC",
          description: "NIELIT",
          imgUrl: projImg2,
        },
        {
          title: "MERN Stack E-commerce App using React-Native",
          description: "udemy",
          imgUrl: projImg3,
        },
      
      ];
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Certificate</h2>
               
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
             
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                   
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt={"img-right"}></img>
    </section>
  )
}
