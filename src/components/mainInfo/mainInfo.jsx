import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import { Fade } from "react-awesome-reveal";
import { Paper } from "@mui/material";
import { FiArrowDown } from "react-icons/fi";
export default function MainInfo(props) {
  return (
    <Container style={{ display:'flex',justifyContent:'center',alignItems:'center' }} id="mainInfo">
      
        <Row
          lg={1}
          xs={1}
          md={1}
          style={{textAlign:'center'}}
        >
          <Col>
            <Fade delay={500} cascade damping={0.3} triggerOnce={true}>
              <h1 className='mainInfoName'>BARUGALA PAVAN SAI</h1>
              <p className='mainInfoName'><span>FULL STACK DEVELOPER</span> | <span>MERN STACK DEVELOPER</span></p>
            </Fade>
          </Col>
          <Col className="arrowContainer">
            <Paper
              onClick={() =>{
                document.getElementById("about").scrollIntoView()}
              }
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
