import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Fade } from "react-awesome-reveal";
import { BsChevronDoubleRight } from "react-icons/bs";
export default function Projects() {
  const goToGitHub = (link) => {
    window.open(link, "_blank");
  };
  return (
    <Container id="projects">
      <div className="projectsHeading">
        <h4 className="mainInfoName text-uppercase">Projects</h4>
        <a
          href="https://github.com/pavansai505"
          target="_blank"
          style={{ fontSize: "1rem", textDecoration: "none",border:'1px solid black',padding:'0.3rem 0.5rem',backgroundColor:'rgba(0,0,0,0.8)',color:'white',borderRadius:'5px' }}
          className="viewMore"
        >
          Discover
        </a>
      </div>

      <Row
        className="mt-5 pb-5"
        lg={3}
        md={1}
        xs={1}
        style={{ justifyContent: "space-around" }}
      >
        {/* <Fade delay={500} cascade damping={0.3} triggerOnce={true}>
          <Col>
            <center>
              <Card
                style={{ width: "20rem",  textAlign: "start" }}
                className="projectCard h-100 mt-3 "
              >
                <Card.Img
                  variant="top"
                  src={require("../../images/ecommerce.png")}
                  className="projectImg"
                  onClick={() =>
                    goToGitHub("https://github.com/pavansai505/E-Commerce")
                  }
                />
                <Card.Body className="mt-3">
                  <Card.Title className="mainInfoName">E-Commerce</Card.Title>
                  <Card.Text>Frame work : MERN</Card.Text>
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
                style={{ width: "20rem",  textAlign: "start" }}
                className="projectCard h-100 mt-3"
              >
                <Card.Img
                  variant="top"
                  src={require("../../images/videoSearch.jpg")}
                  className="projectImg"
                  onClick={() =>
                    goToGitHub(
                      "https://github.com/pavansai505/AN-AUTOMATED-SEARCH-ENGINE-BASED-CONTENT-CATEGORIZATION-OF-VIDEO-USING-"
                    )
                  }
                />
                <Card.Body className="mt-3">
                  <Card.Title className="mainInfoName">
                    Search Engine
                  </Card.Title>
                  <Card.Text>Frame work : Flask</Card.Text>
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
                style={{ width: "20rem",  textAlign: "start" }}
                className="projectCard h-100 mt-3"
              >
                <Card.Img
                  variant="top"
                  src={require("../../images/elearning.jpg")}
                  className="projectImg"
                  onClick={() =>
                    goToGitHub("https://github.com/pavansai505/DeepCodecGuru")
                  }
                />
                <Card.Body className="mt-3">
                  <Card.Title className="mainInfoName">E-Learning</Card.Title>
                  <Card.Text>Frame work : MERN</Card.Text>
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
        </Fade> */}
        <Fade delay={500} cascade damping={0.3} triggerOnce={true}>
          {/* project 1 E-com */}
          <Col>
            <center>
              <Card
                style={{
                  width: "20rem",
                  position: "relative",
                  backgroundColor: "black",
                }}
                className="projectV2Card"
              >
                <Card.Img
                  variant="top"
                  src={require('../../images/ecommerceV2.jpg')}
                  className="projectV2Img"
                />
                <Card.Body className="projectV2CardBody">
                  <Card.Title className="projectV2Title">E-Commerce</Card.Title>
                  <Card.Text >
                  ShopForHome provides an easy-to-use, all-in-one platform to create, manage and customize a store built on the MERN stack.
                  </Card.Text>
                  <Button style={{ backgroundColor: "black" }} variant="dark"
                  onClick={() =>
                    goToGitHub("https://github.com/pavansai505/E-Commerce")
                  }>
                    GitHub
                  </Button>
                </Card.Body>
              </Card>
            </center>
          </Col>
          {/* project-2 deep learning search engine */}
          <Col>
            <center>
              <Card
                style={{
                  width: "20rem",
                  position: "relative",
                  backgroundColor: "black",
                }}
                className="projectV2Card"
              >
                <Card.Img
                  variant="top"
                  src={require('../../images/videoSearchV2.jpg')}
                  className="projectV2Img"
                />
                <Card.Body className="projectV2CardBody">
                  <Card.Title className="projectV2Title">Search Engine</Card.Title>
                  <Card.Text>
                  A video search engine providing improved search quality and user experience through specialized classification and categorization.
                  </Card.Text>
                  <Button style={{ backgroundColor: "black" }} variant="dark"
                  onClick={() =>
                    goToGitHub(
                      "https://github.com/pavansai505/AN-AUTOMATED-SEARCH-ENGINE-BASED-CONTENT-CATEGORIZATION-OF-VIDEO-USING-"
                    )
                  }>
                    GitHub
                  </Button>
                </Card.Body>
              </Card>
            </center>
          </Col>
          {/* project-3 E-learning */}
          <Col>
            <center>
              <Card
                style={{
                  width: "20rem",
                  position: "relative",
                  backgroundColor: "black",
                }}
                className="projectV2Card"
              >
                <Card.Img
                  variant="top"
                  src={require('../../images/ecommerceV2.jpg')}
                  className="projectV2Img"
                />
                <Card.Body className="projectV2CardBody">
                  <Card.Title className="projectV2Title">E-Learning</Card.Title>
                  <Card.Text>
                  A platform providing a unified experience combining multiple educational sites such as nptel and udemy for the convenience of students.
                  </Card.Text>
                  <Button style={{ backgroundColor: "black" }} variant="dark"
                  onClick={() =>
                    goToGitHub("https://github.com/pavansai505/DeepCodecGuru")
                  }>
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
