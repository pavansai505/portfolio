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
import { SiTypescript, SiFlask } from "react-icons/si";
import { MdMiscellaneousServices } from "react-icons/md";
import { Fade } from "react-awesome-reveal";
export default function Skills(props) {
  return (
    <Container
      ref={props.refs}
      className="skills mt-5"
      style={{ paddingBottom: "5rem", textAlign: "center" }}
      id="skills"
    >
      <h4 className="mainInfoName text-uppercase">Skills</h4>
      <Fade delay={500} cascade damping={0.3} triggerOnce={true}>
        <Row className="mt-3 mb-5" sm={4} lg={4}>
          <Col className="mt-3">
            <Stack direction="vertical">
              <center>
                <Paper className="skillsBox gradient-border " elevation={8}>
                  <FaReact style={{ color: "#5ed3f3" }}></FaReact>
                </Paper>
              </center>
              <h6
                style={{ textAlign: "center", marginTop: "1rem" }}
                className="mainInfoName"
              >
                React
              </h6>
            </Stack>
          </Col>
          <Col className="mt-3">
            <Stack direction="vertical">
              <center>
                <Paper className="skillsBox gradient-border" elevation={8}>
                  <FaDatabase style={{ color: "#00ed64" }}></FaDatabase>
                </Paper>
              </center>
              <h6
                style={{ textAlign: "center", marginTop: "1rem" }}
                className="mainInfoName"
              >
                MongoDB
              </h6>
            </Stack>
          </Col>
          <Col className="mt-3">
            <Stack direction="vertical">
              <center>
                <Paper className="skillsBox gradient-border" elevation={8}>
                  <FaJsSquare style={{ color: "#f0b400" }}></FaJsSquare>
                </Paper>
              </center>
              <h6
                style={{ textAlign: "center", marginTop: "1rem" }}
                className="mainInfoName"
              >
                Express Js
              </h6>
            </Stack>
          </Col>
          <Col className="mt-3">
            <Stack direction="vertical">
              <center>
                <Paper className="skillsBox gradient-border" elevation={8}>
                  <FaNode style={{ color: "#008E36" }}></FaNode>
                </Paper>
              </center>
              <h6
                style={{ textAlign: "center", marginTop: "1rem" }}
                className="mainInfoName"
              >
                Node
              </h6>
            </Stack>
          </Col>
          <Col className="mt-3">
            <Stack direction="vertical">
              <center>
                <Paper className="skillsBox gradient-border" elevation={8}>
                  <SiTypescript style={{ color: "#2f74c0" }}></SiTypescript>
                </Paper>
              </center>
              <h6
                style={{ textAlign: "center", marginTop: "1rem" }}
                className="mainInfoName"
              >
                Typescript
              </h6>
            </Stack>
          </Col>
          <Col className="mt-3">
            <Stack direction="vertical">
              <center>
                <Paper className="skillsBox gradient-border" elevation={8}>
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
              <h6
                style={{ textAlign: "center", marginTop: "1rem" }}
                className="mainInfoName"
              >
                Python
              </h6>
            </Stack>
          </Col>
          <Col className="mt-3">
            <Stack direction="vertical">
              <center>
                <Paper className="skillsBox gradient-border" elevation={8}>
                  <SiFlask className="flaskDark"></SiFlask>
                </Paper>
              </center>
              <h6
                style={{ textAlign: "center", marginTop: "1rem" }}
                className="mainInfoName"
              >
                Flask
              </h6>
            </Stack>
          </Col>
          <Col className="mt-3">
            <Stack direction="vertical">
              <center>
                <Paper className="skillsBox gradient-border" elevation={8}>
                  <MdMiscellaneousServices style={{color:'#008e36'}}></MdMiscellaneousServices>
                </Paper>
              </center>
              <h6
                style={{ textAlign: "center", marginTop: "1rem" }}
                className="mainInfoName"
              >
                Micro Services
              </h6>
            </Stack>
          </Col>
        </Row>
        {/* <Row lg={2} md={1} className="skillProgress ps-5 pe-5" >
          <Col className="skillbar">
            <Stack className="ms-5">
              <p style={{fontWeight:'bolder'}}>JS</p>
              <progress value={80} min={10} max={100} disabled className="progressItem"/>
            </Stack>
          </Col>
          <Col className="skillbar">
            <Stack  className="ms-5">
              <p style={{fontWeight:'bolder'}}>HTML</p>
              <progress value={80} min={10} max={100} disabled className="progressItem"/>
            </Stack>
          </Col>
          <Col className="skillbar">
            <Stack className="ms-5">
              <p style={{fontWeight:'bolder'}}>FLASK</p>
              <progress value={70} min={10} max={100} disabled className="progressItem"/>
            </Stack>
          </Col>
          <Col className="skillbar">
            <Stack className="ms-5">
              <p style={{fontWeight:'bolder'}}>MICRO-SERVICES</p>
              <progress value={70} min={10} max={100} disabled className="progressItem"/>
            </Stack>
          </Col>
          <Col className="skillbar">
            <Stack className="ms-5">
              <p style={{fontWeight:'bolder'}}>python</p>
              <progress value={70} min={10} max={100} disabled className="progressItem"/>
            </Stack>
          </Col>
          <Col className="skillbar">
            <Stack className="ms-5">
              <p style={{fontWeight:'bolder'}}>python</p>
              <progress value={70} min={10} max={100} disabled className="progressItem"/>
            </Stack>
          </Col>
          <Col className="skillbar">
            <Stack className="ms-5">
              <p style={{fontWeight:'bolder'}}>python</p>
              <progress value={70} min={10} max={100} disabled className="progressItem"/>
            </Stack>
          </Col>
          <Col className="skillbar">
            <Stack className="ms-5">
              <p style={{fontWeight:'bolder'}}>python</p>
              <progress value={70} min={10} max={100} disabled className="progressItem"/>
            </Stack>
          </Col>
          <Col className="skillbar">
            <Stack className="ms-5">
              <p style={{fontWeight:'bolder'}}>python</p>
              <progress value={70} min={10} max={100} disabled className="progressItem"/>
            </Stack>
          </Col>
          <Col className="skillbar">
            <Stack className="ms-5">
              <p style={{fontWeight:'bolder'}}>python</p>
              <progress value={70} min={10} max={100} disabled className="progressItem"/>
            </Stack>
          </Col>
        </Row> */}
      </Fade>
    </Container>
  );
}
