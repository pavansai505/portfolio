import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useState } from "react";

export default function MyVerticallyCenteredModal(props) {
  const [userMail, setUserMail] = useState("");
  const [validUserMail, setValidUserMail] = useState(false);
  const ValidateEmail = () => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userMail)) {
      setValidUserMail(false);console.log("^^^^^^^^^^^^^");
      return true;
      
    } else {
      setValidUserMail(true);console.log("----------");
      return false;
      
    }
  };
  const sendMail = () => {
    if (ValidateEmail()) {
      fetch("https://formspree.io/f/xyyagjwd", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userMail: userMail,
        }),
      });
      props.onHide();
    }
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Welcome</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Thanks for visiting</h4>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Control
            type="text"
            placeholder="E-mail"
            style={{ border: "1px solid black" }}
            onChange={(e) => setUserMail(e.target.value)}
          />
          {validUserMail ? (
            <Form.Label style={{ color: "red", margin: "1rem 0 0 1rem", }}>
              Invalid email
            </Form.Label>
          ) : null}
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button
          onClick={() => {
            sendMail();
          }}
        >
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
