import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

// ADD TO PARENT:
//   const [show, setShow] = useState(false);
//   const handleShow = () => setShow(true);
//   conse [message, setMessage] = useState("");
///////////////////////////////////////

function MessageModal({ show, setShow, message }) {
   const handleClose = () => setShow(false);

   return (
      <>
         <Modal
          show={show}
           onHide={handleClose}
           >
            <Modal.Body>{message}</Modal.Body>
            <Modal.Footer>
               <Button variant="secondary" onClick={handleClose}>
                  Close
               </Button>
            </Modal.Footer>
         </Modal>
      </>
   );
}

export default MessageModal;
