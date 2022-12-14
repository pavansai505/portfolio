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
function Home() {
  const [theme, setTheme] = React.useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: theme,
    },
  });
  const ref = useRef(null);
  const handleClick = () => {
    console.log("ok", ref);
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="home homeOverFlow" id="home" >
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>

      <NavBar></NavBar>
      <MainInfo handleClick={handleClick}></MainInfo>
      <About></About>
      <Skills refs={ref}></Skills>
      <Projects></Projects>
      <Experience></Experience>
      <Footer></Footer>
    </div>
  );
}

export default Home;
