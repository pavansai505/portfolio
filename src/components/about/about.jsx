import { Typography } from "@mui/material";
import React from "react";
import { Container, Image } from "react-bootstrap";

export default function About() {
  return (
    <Container id="about" className="pt-5">
      <h4 className='mainInfoName'>About</h4>
      <Container className="about">
        <Image
          src={require("../../images/snapFilter.jpg")}
          className="aboutImage"
        ></Image>
        <p
          style={{ width: "60vw", minWidth: "20rem", wordBreak: "keep-all" }}
          className='mainInfoName mt-5' 
        >
          <span style={{fontWeight:'bolder'}}>" I am</span> an enthusiastic <span style={{fontWeight:'bold'}}>UI/UX developer</span> from Salur, who has a strong
          grasp of the <span style={{fontWeight:'bold'}}>MERN stack</span>, having recently completed a 4-month course in
          MERN from GreatLearning. My expertise lies in <span style={{fontWeight:'bold'}}>full-stack development</span>&nbsp;
          and creating responsive websites. Aside from this, I have good
           leadership skills and am committed to continually improving my craft.
          <span style={{fontWeight:'bolder'}}>"</span>
        </p>
      </Container>
    </Container>
  );
}
