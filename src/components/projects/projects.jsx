import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Fade } from "react-awesome-reveal";
import {BsChevronDoubleRight} from 'react-icons/bs';
export default function Projects() {
  const goToGitHub = (link) => {
    window.open(link, "_blank");
  };
  return (
    <Container id="projects">
      <div className="projectsHeading"><h4 className='mainInfoName'>Projects</h4><a href="https://github.com/pavansai505" target="_blank" style={{color:'blue',fontSize:'1.2rem'}}>view more <BsChevronDoubleRight></BsChevronDoubleRight></a></div>

      <Row
        className="mt-5 pb-5"
        lg={4}
        md={1}
        xs={1}
        style={{ justifyContent: "space-around" }}
      >
        <Fade delay={500} cascade damping={0.3} triggerOnce={true}>
          <Col>
            <center>
              <Card
                style={{ width: "20rem", padding: "1rem", textAlign: "start" }}
                className="projectCard h-100 mt-3 "
              >
                <Card.Img
                  variant="top"
                  src={require("../../images/ecommerce.png")}
                  className="projectImg"
                />
                <Card.Body className="mt-3">
                  <Card.Title className='mainInfoName'>E-Commerce</Card.Title>
                  <Button
                    className="mt-2 projectButton"
                    onClick={() =>
                      goToGitHub("https://github.com/pavansai505/E-Commerce")
                    }
                  >
                    GitHub
                  </Button>
                </Card.Body>
              </Card>
            </center>
          </Col>
          <Col>
            <center>
              <Card
                style={{ width: "20rem", padding: "1rem", textAlign: "start" }}
                className="projectCard h-100 mt-3"
              >
                <Card.Img
                  variant="top"
                  src={require("../../images/videoSearch.jpg")}
                  className="projectImg"
                />
                <Card.Body className="mt-3">
                  <Card.Title className='mainInfoName'>Search Engine</Card.Title>
                  <Button
                    className="mt-2 projectButton"
                    onClick={() =>
                      goToGitHub(
                        "https://github.com/pavansai505/AN-AUTOMATED-SEARCH-ENGINE-BASED-CONTENT-CATEGORIZATION-OF-VIDEO-USING-"
                      )
                    }
                  >
                    GitHub
                  </Button>
                </Card.Body>
              </Card>
            </center>
          </Col>
          <Col>
            <center>
              <Card
                style={{ width: "20rem", padding: "1rem", textAlign: "start" }}
                className="projectCard h-100 mt-3"
              >
                <Card.Img
                  variant="top"
                  src={require("../../images/elearning.png")}
                  className="projectImg"
                />
                <Card.Body className="mt-3">
                  <Card.Title className='mainInfoName'>E-Learning</Card.Title>
                  <Button
                    className="mt-2 projectButton"
                    onClick={() =>
                      goToGitHub("https://github.com/pavansai505/DeepCodecGuru")
                    }
                  >
                    GitHub
                  </Button>
                </Card.Body>
              </Card>
            </center>
          </Col>
        </Fade>
      </Row>
    </Container>
  );
}
