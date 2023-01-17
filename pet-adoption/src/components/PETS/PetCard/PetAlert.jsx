import { Modal, Button } from "react-bootstrap";

function PetAlert({ show, handleClose }) {

   return (
      <>
         <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
         >
            <Modal.Header closeButton>
               <Modal.Title>We Like Your Enthusiasm!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
               But you must first Sign Up or Log In to do that.
            </Modal.Body>
            <Modal.Footer>
               <Button variant="secondary" onClick={handleClose}>
                  Close
               </Button>
               <Button href="/" variant="primary">
                  Let's Do It
               </Button>
            </Modal.Footer>
         </Modal>
      </>
   );
}

export default PetAlert;
