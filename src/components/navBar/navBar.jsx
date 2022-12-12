import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import Media from "react-media";
import { GiHamburgerMenu } from "react-icons/gi";
import resume from "../../images/resume.pdf";
import { BsSunFill,BsMoonStarsFill } from "react-icons/bs";
function NavBar() {
  const [show, setShow] = React.useState(false);
  const [mode,setMode]=React.useState(true)
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar bg="light" variant="light" id="nav">
        <Container>
          <Navbar.Brand href="#home" className="navBarFont">
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
                  onClick={()=>setMode(!mode)}
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
                <Offcanvas show={show} onHide={handleClose}>
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
                      >
                        Home
                      </Nav.Link>
                      <Nav.Link
                        onClick={() => {
                          document.getElementById("about").scrollIntoView();
                          handleClose();
                        }}
                      >
                        About
                      </Nav.Link>
                      <Nav.Link href={resume} target="_blank">
                        Resume
                      </Nav.Link>
                    </Nav>
                  </Offcanvas.Body>
                </Offcanvas>
              </Nav>
            )}
          />
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
