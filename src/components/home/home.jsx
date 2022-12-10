import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import NavBar from "../navBar/navBar";
import "./home.css";
import { Fade } from "react-awesome-reveal";
import { Paper } from "@mui/material";
import { FiArrowDown } from "react-icons/fi";
import { useRef } from "react";
import Card from "react-bootstrap/Card";
import Skills from "../skills/skills"; 
import MainInfo from "../mainInfo/mainInfo";
import Projects from "../projects/projects";
function Home() {
  const ref = useRef(null);
  const handleClick = () => {
    console.log("ok",ref);
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="home">
      <NavBar></NavBar>
      <MainInfo handleClick={handleClick}></MainInfo>
      <Skills refs={ref}></Skills>
      <Projects></Projects>
    </div>
  );
}

export default Home;
