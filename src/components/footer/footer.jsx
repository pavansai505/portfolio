import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Container, Row, Col, Stack, Button } from "react-bootstrap";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import {BsPen} from 'react-icons/bs'
import resume from "../../images/resume.pdf";
import Modal from "react-bootstrap/Modal";
import MyVerticallyCenteredModal from "../modal/modal";

export default function Footer() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <MDBFooter bgColor="light" className="text-center text-lg-start text-muted footerMain">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected on social networks:</span>
        </div>

        <Stack
          direction="horizontal"
          className="gap-4"
          style={{ fontSize: "1.5rem" }}
        >
          <FaGithub
            className="footerIcon"
            onClick={() =>
              window.open("https://github.com/pavansai505", "_blank")
            }
          ></FaGithub>
          <FaLinkedin
            className="footerIcon"
            style={{ color: "#0a66c2" }}
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/pavan-sai-barugala/",
                "_blank"
              )
            }
          ></FaLinkedin>
          <FcGoogle
            className="footerIcon"
            onClick={() =>
              window.open(
                "mailto:pavansaibarugala@gmail.com",
                "_blank"
              )
            }
          ></FcGoogle>
          <FaInstagram
            className="footerIcon"
            style={{ color: "#d02eb5" }}
            onClick={() =>
              window.open(
                "https://www.instagram.com/pavan_sai_barugala/",
                "_blank"
              )
            }
          ></FaInstagram>
        </Stack>
      </section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className=" fw-bold mb-4">
                <MDBIcon color="secondary" icon="gem" className="me-3" />
                Barugala Pavan Sai
              </h6>
              <p>Passionately pursuing a career in UI/UX design and development, with hands-on experience in HTML, CSS, JavaScript, Flask, and the MERN stack.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className=" fw-bold mb-4">Skills</h6>
              <p>Full Stack</p>
              <p>MERN Stack</p>
              <p>Flask</p>
              <p>Python</p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className=" fw-bold mb-4">About</h6>
              <p>
                <a
                  href={resume}
                  target="_blank"
                  className="text-reset text-decoration-none"
                >
                  Resume
                </a>
              </p>
              <p>
                <a
                  onClick={() =>
                    document.getElementById("projects").scrollIntoView()
                  }
                  style={{ cursor: "pointer" }}
                >
                  Projects
                </a>
              </p>
              <p>
                <a
                  onClick={() =>
                    document.getElementById("experience").scrollIntoView()
                  }
                  style={{ cursor: "pointer" }}
                >
                  Experience
                </a>
              </p>
              <p>
                <a
                  onClick={() =>
                    document.getElementById("nav").scrollIntoView()
                  }
                  style={{ cursor: "pointer" }}
                >
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className=" fw-bold mb-4">Contact</h6>
              <p>
                <MDBIcon color="secondary" icon="home" className="me-3" />
                Rama Colony , Salur
              </p>
              <p>
                <MDBIcon color="secondary" icon="envelope" className="me-3" />
                pavansaibarugala@gmail.com
              </p>
              <p className="me-3" style={{marginLeft:'1rem'}}>
               
                 <Button className="footerButton" onClick={() => setModalShow(true)} style={{backgroundColor:'white',color:'black',width:'100%'}}>
                    Contact me &nbsp; <BsPen></BsPen>
                  </Button>

                  <MyVerticallyCenteredModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                  />
                
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        Copyright: ©
        <span
          className="text-reset fw-bold text-uppercase"
          href="https://mdbootstrap.com/"
        >
          barugala pavan sai
        </span>
      </div>
    </MDBFooter>
  );
}
