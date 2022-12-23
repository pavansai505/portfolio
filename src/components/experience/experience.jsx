import { Paper } from "@mui/material";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { Fade } from "react-awesome-reveal";
export default function Experience() {
  return (
    <Container
      className="mt-5 mb-5 p-5"
      id="experience"
    >
      <h4 className='mainInfoName text-uppercase' style={{alignItems:'start'}}>Experience</h4>
      <Fade delay={500} cascade damping={0.3} triggerOnce={true} style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
        <Paper
          elevation={24}
          className=" mt-5 experienceCard"
          sx={{ borderRadius: "25px", width: "60vw", minWidth: "20rem" }}
        >
          <Container className="">
            <Row>
              <Col lg={8} md={12} sm={12}>
                <Row xs={1}>
                  <Col>
                    <h3>Trainee at Great Learning</h3>
                  </Col>
                  <Col  style={{fontWeight:'bold'}}>Mar 2022- Jul 2022</Col>
                  <Col>
                    <ul>
                      <li>
                        Participated in a 18 week training program of Wipro in
                        collaboration with Great learning.
                      </li>
                      <li>
                        Gained expertise in web development technologies such as
                        MongoDB, Express, React and Node.js
                      </li>
                      <li>
                        Developed a comprehensive Capstone project with
                        successful implementation
                      </li>
                      <li>
                        Demonstrated leadership skills by taking a leadership
                        role in a team
                      </li>
                    </ul>
                  </Col>
                </Row>
              </Col>
              <Col
                style={{ textAlign: "center" }}
                className="m-auto"
                lg={4}
                md={12}
                sm={12}
              >
                <Image className="experienceImage" src={require("../../images/greatlearning.png")}></Image>
              </Col>
            </Row>
          </Container>
        </Paper>

        <Paper
          elevation={24}
          className=" mt-5 experienceCard"
          sx={{ borderRadius: "25px", width: "60vw", minWidth: "20rem" }}
        >
          <Container className="">
            <Row>
              <Col lg={8} md={12} sm={12}>
                <Row xs={1}>
                  <Col>
                    <h3>Internship at virtusa</h3>
                  </Col>
                  <Col style={{fontWeight:'bold'}}>Jan 2022- Mar 2022</Col>
                  <Col>
                    <ul>
                      <li>
                        Successfully completed a 3-month internship at Virtusa,
                        acquiring essential skills and knowledge to become a
                        proficient software engineer.
                      </li>
                      <li>
                        Participated in two 9-hour work simulations on incident
                        management, successfully meeting all expectations.
                      </li>
                      <li>
                        Completed a comprehensive training course on the
                        provided platform, equipping myself with the necessary
                        tools to be successful in the software engineering
                        field.
                      </li>
                    </ul>
                  </Col>
                </Row>
              </Col>
              <Col
                style={{ textAlign: "center" }}
                className="m-auto"
                lg={4}
                md={12}
                sm={12}
              >
                <Image className="experienceImage" src={require("../../images/virtusa.png")}></Image>
              </Col>
            </Row>
          </Container>
        </Paper>
        <Paper
          elevation={24}
          className=" mt-5 experienceCard"
          sx={{ borderRadius: "25px", width: "60vw", minWidth: "20rem" }}
        >
          <Container className="">
            <Row>
              <Col lg={8} md={12} sm={12}>
                <Row xs={1}>
                  <Col>
                    <h3>Internship at Brain-O-Vision</h3>
                  </Col>
                  <Col style={{fontWeight:'bold'}}>April 2021- May 2021</Col>
                  <Col>
                    <ul>
                      <li>
                        Successfully completed the One Month Online Internship
                        program with Brain-O-vision Solutions, where I was
                        actively and assiduously engaged in projects and tasks
                        pertaining to Machine Learning.
                      </li>
                      <li>
                        Applied my knowledge and technical expertise to
                        diligently work on the assignments and adhere to the
                        deadlines.
                      </li>
                      <li>
                        During my internship, I had the opportunity to hone my
                        skills in Machine Learning, thereby gaining a better
                        understanding of the concepts.
                      </li>
                    </ul>
                  </Col>
                </Row>
              </Col>
              <Col
                style={{ textAlign: "center" }}
                className="m-auto"
                lg={4}
                md={12}
                sm={12}
              >
                <Image className="experienceImage" src={require("../../images/br2.png")}></Image>
              </Col>
            </Row>
          </Container>
        </Paper>
      </Fade>
    </Container>
  );
}
