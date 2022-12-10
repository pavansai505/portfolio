import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import { Fade } from "react-awesome-reveal";
import { Paper } from "@mui/material";
import { FiArrowDown } from "react-icons/fi";
export default function MainInfo(props) {
  return (
    <Container style={{ display:'flex',justifyContent:'center',alignItems:'center' , height:'50rem' }}>
        <Row
          lg={1}
          xs={1}
          md={1}
          style={{textAlign:'center'}}
        >
          <Col>
            <Fade delay={500} cascade damping={0.3}>
              <h1>BARUGALA PAVAN SAI o</h1>
              <p>FULL STACK DEVELOPER | MERN STACK DEVELOPER</p>
            </Fade>
          </Col>
          <Col className="arrowContainer">
            <Paper
              onClick={props.handleClick}
              style={{ height: "4rem", width: "4rem" }}
              className="arrow"
              elevation={24}
            >
              <FiArrowDown className="arrowIcon"></FiArrowDown>
            </Paper>
          </Col>
          
        </Row>
      </Container>
  )
}
