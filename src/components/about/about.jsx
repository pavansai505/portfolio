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
          {/* <span style={{ fontWeight: "bolder" }}>" I am</span> an enthusiastic{" "}
          <span style={{ fontWeight: "bold" }}>UI/UX developer</span> from
          India, who has a strong grasp of the{" "}
          <span style={{ fontWeight: "bold" }}>MERN stack</span>, having
          recently completed a 4-month course in MERN from GreatLearning. My
          expertise lies in{" "}
          <span style={{ fontWeight: "bold" }}>full-stack development</span>
          &nbsp; and creating responsive websites. Aside from this, I have good
          leadership skills and am committed to continually improving my craft.
          <span style={{ fontWeight: "bolder" }}>"</span> */}
          <span style={{ fontWeight: "bolder" }}>I am</span>{" "} a skilled <span style={{ fontWeight: "bolder" }}>full stack developer</span> with frameworks such as <span style={{ fontWeight: "bolder" }}>Flask,
          React and Node.js,</span> as well as knowledge of software development
          methodologies and best practices. Ability to quickly adapt and learn
          new technologies, optimize existing applications and develop effective
          solutions. Possess excellent communication and collaboration skills
          and a passion for creating high-quality applications. Looking to work
          with a team that values collaboration and creativity in order to
          continuously improve applications, processes and procedures.
        </p>
      </Container>
      </Fade>
    </Container>
  );
}
