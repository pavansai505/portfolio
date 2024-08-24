import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import Media from "react-media";
import { GiHamburgerMenu } from "react-icons/gi";
import resume from "../../images/resume.pdf";
import { BsSunFill, BsMoonStarsFill } from "react-icons/bs";
import { IoIosHome, IoIosInformationCircleOutline } from "react-icons/io";
import { HiOutlineDocument } from "react-icons/hi";
import Overlay from "react-bootstrap/Overlay";
import Tooltip from "react-bootstrap/Tooltip";
import { Button } from "react-bootstrap";

function NavBar() {
  const [show, setShow] = React.useState(false);
  const [mode, setMode] = React.useState(true);
  const [show2, setShow2] = React.useState(true);
  const target = React.useRef(null);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const changeTheme = () => {
    setMode(!mode);
    if (mode) {
      document.getElementById("home").classList.add("darkMode");
      document.body.classList.add("darkBody");
    } else {
      document.getElementById("home").classList.remove("darkMode");
      document.body.classList.remove("darkBody");
    }
  };
  return (
    <>
      <Navbar bg="light" variant="light" id="nav" style={{marginTop:'5px'}}>
        <Container>
          <Navbar.Brand
            href="#home"
            className="navBarFont"
            onClick={() => changeTheme()}
          >
            BARUGALA PAVAN SAI
          </Navbar.Brand>
          <Media
            query="(min-width: 801px)"
            render={() => (
              <Nav className="ms-auto">
                <Nav.Link
                  onClick={() =>
                    document.getElementById("nav").scrollIntoView()
                  }
                  className="navBarFont"
                >
                  Home
                </Nav.Link>
                <Nav.Link
                  onClick={() =>
                    document.getElementById("about").scrollIntoView()
                  }
                  className="navBarFont"
                >
                  About
                </Nav.Link>
                <Nav.Link href={resume} target="_blank" className="navBarFont">
                  Resume
                </Nav.Link>
                {/* TODO : A toggle switch for dark and light mode   */}
                {/* <Nav.Item
                  style={{
                    display: "flex",
                    alignItems: "center",
                    fontSize: "1.5rem",
                    paddingLeft: "1rem",
                  }}
                  onClick={()=>changeTheme()}
                >
                  {
                    mode?<BsSunFill style={{color:"orange"}}></BsSunFill>:<BsMoonStarsFill  style={{color:"#39FF14"}}></BsMoonStarsFill>
                  }
                </Nav.Item> */}
              </Nav>
            )}
          />

          <Media
            query="(max-width: 800px)"
            render={() => (
              <Nav className="ms-auto">
                <GiHamburgerMenu onClick={handleShow}></GiHamburgerMenu>
                <Offcanvas
                  show={show}
                  onHide={handleClose}
                  className="offCanvasNav"
                  id="offCanvasNavDark"
                  onEntered={() => {
                    if (!mode) {
                      document
                        .getElementById("offCanvasNavDark")
                        .classList.add("offCanvasNavDark");
                    }
                  }}
                  onEntering={() => {
                    if (!mode) {
                      document
                        .getElementById("offCanvasNavDark")
                        .classList.add("offCanvasNavDark");
                    }
                  }}
                  onExited={() => {
                    if (mode) {
                      document
                        .getElementById("offCanvasNavDark")
                        .classList.remove("offCanvasNavDark");
                    }
                  }}
                  onExiting={() => {
                    if (mode) {
                      document
                        .getElementById("offCanvasNavDark")
                        .classList.remove("offCanvasNavDark");
                    }
                  }}
                >
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Menu</Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <Nav>
                      <Nav.Link
                        onClick={() => {
                          document.getElementById("nav").scrollIntoView();
                          handleClose();
                        }}
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        <IoIosHome></IoIosHome>&nbsp; Home
                      </Nav.Link>
                      <Nav.Link
                        onClick={() => {
                          document.getElementById("about").scrollIntoView();
                          handleClose();
                        }}
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        <IoIosInformationCircleOutline></IoIosInformationCircleOutline>
                        &nbsp; About
                      </Nav.Link>
                      <Nav.Link
                        href={resume}
                        target="_blank"
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        <HiOutlineDocument></HiOutlineDocument>&nbsp; Resume
                      </Nav.Link>
                    </Nav>
                  </Offcanvas.Body>
                </Offcanvas>
              </Nav>
            )}
          />
          <Nav.Item
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: "1rem",
              paddingLeft: "1rem",
            }}
            onClick={() => changeTheme()}
          >
            {mode ? (
              <>
              <Button variant="link" ref={target} onClick={() => setShow2(false)}><BsSunFill style={{ color: "orange" }} ></BsSunFill></Button>
              <Overlay target={target.current} show={show2} placement="bottom">
              {(props) => (
                <Tooltip id="overlay-example" {...props}>
                  <strong>Click here.</strong>
                </Tooltip>
              )}
            </Overlay>
              </>
            ) : (
              <BsMoonStarsFill style={{ color: "#39FF14" }}></BsMoonStarsFill>
            )}
            
          </Nav.Item>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
