import meter1 from "../assets/img/1.png";
import meter2 from "../assets/img/2.png";
import meter3 from "../assets/img/3.png";
import meter4 from "../assets/img/4.png";
import meter5 from "../assets/img/node.png";
import meter6 from "../assets/img/6.png";
import meter7 from "../assets/img/7.png";
import meter8 from "../assets/img/tailwind-css-icon.svg";
import meter9 from "../assets/img/8.png";
import meter10 from "../assets/img/10.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Fluent grip on HTML, CSS and Javascript concepts.
Understanding of core react concepts like DOM manipulation,<br></br> Babel transpiler and directory structure.
Knows how to sync workflows from different modules.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="html-img" />
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="css-img" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="js-img" />
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <img src={meter4} alt="react-img" />
                                <h5  style={{marginTop:16}}>React</h5>
                            </div>
                            <div className="item">
                                <img src={meter5} alt="node.js-img" />
                                <h5  style={{marginTop:26}}>Node.js</h5>
                            </div>
                            <div className="item">
                                <img src={meter6} alt="mongodb-img" />
                                <h5>MongoDB</h5>
                            </div>
                            <div className="item">
                                <img src={meter7} alt="ex-img" />
                                <h5>Express</h5>
                            </div>
                            <div className="item">
                                <img src={meter9} alt="github-img" />
                                <h5>GitHub</h5>
                            </div>
                            <div className="item" style={{marginTop:10}}>
                                <img src={meter8} alt="t-css-img" />
                                <h5 style={{marginTop:26}}>Tailwind CSS</h5>
                            </div>
                            <div className="item">
                                <img src={meter10} alt="vscode-img" />
                                <h5 >VS Code</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="back-img" />
    </section>
  )
}
