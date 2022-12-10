import { Paper } from "@mui/material";
import React from "react";
import { Container, Row, Col, Stack } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { FaReact, FaJsSquare, FaNode, FaDatabase } from "react-icons/fa";
export default function Skills(props) {
  return (
    <Container
      ref={props.refs}
      className="skills"
      style={{paddingBottom:'5rem', textAlign: "center" }}
    >
      <h4>SKILLS </h4>
      <Row className="mt-5 mb-5" sm={4} lg={4}>
        <Col>
          <Stack direction="vertical">
            <center>
              <Paper className="skillsBox">
                <FaReact style={{ color: "blue" }}></FaReact>
              </Paper>
            </center>
            <h6 style={{ textAlign: "center",marginTop:'1rem' }}>React</h6>
          </Stack>
        </Col>
        <Col>
          <Stack direction="vertical">
            <center>
              <Paper className="skillsBox">
                <FaDatabase style={{ color: "#18634b" }}></FaDatabase>
              </Paper>
            </center>
            <h6 style={{ textAlign: "center",marginTop:'1rem' }}>MongoDB</h6>
          </Stack>
        </Col>
        <Col>
          <Stack direction="vertical">
            <center>
              <Paper className="skillsBox">
                <FaJsSquare style={{ color: "#f0b400" }}></FaJsSquare>
              </Paper>
            </center>
            <h6 style={{ textAlign: "center",marginTop:'1rem' }}>Express Js</h6>
          </Stack>
        </Col>
        <Col>
          <Stack direction="vertical">
            <center>
              <Paper className="skillsBox">
                <FaNode style={{ color: "#18634b" }}></FaNode>
              </Paper>
            </center>
            <h6 style={{ textAlign: "center",marginTop:'1rem' }}>Node</h6>
          </Stack>
        </Col>
      </Row>
    </Container>
  );
}
