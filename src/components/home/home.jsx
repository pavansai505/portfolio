import React from "react";
import NavBar from "../navBar/navBar";
import "./home.css";
import "./homeDark.scss";
import { useRef } from "react";
import Skills from "../skills/skills";
import MainInfo from "../mainInfo/mainInfo";
import Projects from "../projects/projects";
import Footer from "../footer/footer";
import Experience from "../experience/experience";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import About from "../about/about";
import MyVerticallyCenteredModal from "../modal/userInfoModal";
import AboutV2 from "../aboutV2/aboutV2";
function Home() {
  const [modalShow, setModalShow] = React.useState(true);

  
  const ref = useRef(null);
  const handleClick = () => {
    console.log("ok", ref);
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="home" id="home">
      <div className="starshow" id="stars"></div>
      <div className="starshow" id="stars2"></div>
      <div className="starshow" id="stars3"></div>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      ></MyVerticallyCenteredModal>
      <NavBar></NavBar>
      <MainInfo handleClick={handleClick}></MainInfo>
      <About></About>
      {/* This is a test for a new model. */}
      {/* <AboutV2></AboutV2> */}
      <Skills refs={ref}></Skills>
      <Projects></Projects>
      <Experience></Experience>
      <Footer></Footer>
    </div>
  );
}

export default Home;
