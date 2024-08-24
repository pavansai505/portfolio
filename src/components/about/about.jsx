import { Typography } from "@mui/material";
import React from "react";
import { Container, Image } from "react-bootstrap";
import { Fade } from "react-awesome-reveal";
export default function About() {
  return (
    <Container id="about" className="pt-5">
      <h4 className="mainInfoName text-uppercase">About</h4>
      <Fade delay={300} cascade damping={0.3} triggerOnce={true}>
      <Container className="about">
        <Image
          src={require("../../images/snapFilter.jpg")}
          className="aboutImage"
        ></Image>
        <p
  style={{
    width: "55vw",
    minWidth: "20rem",
    wordBreak: "keep-all",
    textAlign: "justify",
    fontSize: "1.2rem",
    fontWeight: "450",
  }}
  className="mainInfoName mt-5"
>
  <span style={{ fontWeight: "bold", color: "#2c3e50" }}>I am</span> a skilled{" "}
  <span style={{ fontWeight: "bold", color: "#e74c3c" }}>full-stack developer</span> with expertise in frameworks such as{" "}
  <span style={{ fontWeight: "bold", color: "#3498db" }}>Angular</span>,{" "}
  <span style={{ fontWeight: "bold", color: "#1abc9c" }}>React</span>, and{" "}
  <span style={{ fontWeight: "bold", color: "#f39c12" }}>Spring Boot</span>. I possess a strong understanding of software development methodologies and best practices.

  With the ability to quickly adapt and learn new technologies, I focus on optimizing existing applications and developing effective solutions. I am committed to creating high-quality applications and possess excellent communication and collaboration skills.

  I am looking to work with a team that values collaboration and creativity to continuously improve applications, processes, and procedures.
</p>

      </Container>
      </Fade>
    </Container>
  );
}
