import { Paper } from "@mui/material";
import React from "react";
import { Container, Row, Col, Stack } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import {
  FaReact,
  FaJsSquare,
  FaNode,
  FaDatabase,
  FaPython,
} from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { Fade } from "react-awesome-reveal";
export default function Skills(props) {
  return (
    <Container
      ref={props.refs}
      className="skills mt-5"
      style={{ paddingBottom: "5rem", textAlign: "center" }}
      id="skills"
    >
      <h4 className='mainInfoName'>Skills</h4>
      <Fade delay={500} cascade damping={0.3} triggerOnce={true}>
        <Row className="mt-3 mb-5" sm={4} lg={4}>
          <Col className="mt-3">
            <Stack direction="vertical">
              <center>
                <Paper className="skillsBox">
                  <FaReact style={{ color: "#5ed3f3" }}></FaReact>
                </Paper>
              </center>
              <h6 style={{ textAlign: "center", marginTop: "1rem" }} className='mainInfoName'>React</h6>
            </Stack>
          </Col>
          <Col className="mt-3">
            <Stack direction="vertical">
              <center>
                <Paper className="skillsBox">
                  <FaDatabase style={{ color: "#00ed64" }}></FaDatabase>
                </Paper>
              </center>
              <h6 style={{ textAlign: "center", marginTop: "1rem" }} className='mainInfoName'>
                MongoDB
              </h6>
            </Stack>
          </Col>
          <Col className="mt-3">
            <Stack direction="vertical">
              <center>
                <Paper className="skillsBox">
                  <FaJsSquare style={{ color: "#f0b400" }}></FaJsSquare>
                </Paper>
              </center>
              <h6 style={{ textAlign: "center", marginTop: "1rem" }} className='mainInfoName'>
                Express Js
              </h6>
            </Stack>
          </Col>
          <Col className="mt-3">
            <Stack direction="vertical">
              <center>
                <Paper className="skillsBox">
                  <FaNode style={{ color: "#18634b" }}></FaNode>
                </Paper>
              </center>
              <h6 style={{ textAlign: "center", marginTop: "1rem" }} className='mainInfoName'>Node</h6>
            </Stack>
          </Col>
          <Col className="mt-3">
            <Stack direction="vertical">
              <center>
                <Paper className="skillsBox">
                  <SiTypescript style={{ color: "#2f74c0" }}></SiTypescript>
                </Paper>
              </center>
              <h6 style={{ textAlign: "center", marginTop: "1rem" }} className='mainInfoName'>
                Typescript
              </h6>
            </Stack>
          </Col>
          <Col className="mt-3">
            <Stack direction="vertical">
              <center>
                <Paper className="skillsBox">
                  <svg width="0" height="0">
                    <linearGradient
                      id="blue-gradient"
                      x1="100%"
                      y1="100%"
                      x2="0%"
                      y2="0%"
                    >
                      <stop stopColor="#3571a3" offset="50%" />
                      <stop stopColor="#f2c01c" offset="50%" />
                    </linearGradient>
                  </svg>
                  <FaPython style={{ fill: "url(#blue-gradient)" }}></FaPython>
                </Paper>
              </center>
              <h6 style={{ textAlign: "center", marginTop: "1rem" }} className='mainInfoName'>
                Python
              </h6>
            </Stack>
          </Col>
        </Row>
      </Fade>
    </Container>
  );
}
