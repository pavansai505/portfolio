import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
export default function Projects() {
  return (
    <Container>
      <h4 style={{ textAlign: "center" }}>Projects</h4>
      <Row className="mt-5 pb-5" xs={4} style={{justifyContent:'space-around'}}>
        <Col>
          <Card style={{width:'20rem',padding:'1rem'}} className="projectCard h-100 ">
            <Card.Img variant="top" src={require('../../images/ecommerce.png')} className="projectImg"/>
            <Card.Body className="mt-3">
              <Card.Title>E-commerce</Card.Title>
              <Button className="mt-2 projectButton">GitHub</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{width:'20rem',padding:'1rem'}} className="projectCard h-100">
            <Card.Img variant="top" src={require('../../images/videoSearch.jpg')}  className="projectImg"/>
            <Card.Body className="mt-3">
              <Card.Title>Search Engine</Card.Title>
              <Button className="mt-2 projectButton">GitHub</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{width:'20rem',padding:'1rem'}} className="projectCard h-100">
            <Card.Img variant="top" src={require('../../images/socialMedia.png')}  className="projectImg"/>
            <Card.Body className="mt-3">
              <Card.Title>Social Media</Card.Title>
              <Button className="mt-2 projectButton">GitHub</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
