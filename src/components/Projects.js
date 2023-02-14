import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/p-1.png";
import projImg2 from "../assets/img/p-2.png";
import projImg3 from "../assets/img/p-3.png";
import projImg4 from "../assets/img/p-4.png";
import projImg5 from "../assets/img/p-5.png";
import projImg6 from "../assets/img/p-6.png";
import projImg7 from "../assets/img/p-7.png";
import projImg8 from "../assets/img/p-8.png";
import projImg9 from "../assets/img/p-9.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Flipkart Clone",
      description: "Tailwind CSS",
      imgUrl: projImg1,
    },
    {
      title: "React - Native",
      description: "Mern Stack android and ios",
      imgUrl: projImg2,
    },
    {
      title: "E-comerce Site",
      description: "MERN Stack",
      imgUrl: projImg3,
    },
  
     {
      title: "Amazon Clone",
      description: "Material UI",
      imgUrl: projImg4,
    },
     {
      title: "Social Media",
      description: "Mern Stack",
      imgUrl: projImg5,
    },
    {
      title: "Business Startup-Yucco company",
      description: "Design & Development",
      imgUrl: projImg6,
    },
    {
      title: "RealTime chat app",
      description: "Sociket io",
      imgUrl: projImg7,
    },
    {
      title: "E-commerce Site",
      description: "React",
      imgUrl: projImg8,
    },
    {
      title: "YouTube Clone",
      description: "HTML ,CSS and JavaScript",
      imgUrl: projImg9,
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
                <h2>Projects</h2>
                <p>Project was based on modern interface development with emerging
                 tools like tailwind css, state management with Redux, backend development with node js , express , mongoose(connect MongoDB DataBase),
                 bcrypt (Password hash) and many more</p>
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
