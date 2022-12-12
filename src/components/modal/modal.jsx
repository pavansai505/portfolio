import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" >
          Contact me
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfZ5hzm7UD5huE45Jq_FNt836XdtBowk1LVCQCQbyFndKsMPQ/viewform?embedded=true" width="100%" height="812" frameborder="0" marginheight="0" marginwidth="0" >Loading…</iframe>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

