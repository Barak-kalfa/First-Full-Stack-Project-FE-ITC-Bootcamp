import AddPetForm from "./AddPetForm";
import React, { useState } from "react";
import {Modal, Button} from "react-bootstrap";


function AddPet() {
    const [show, setShow] = useState(false);
     return (
          <>
               <Button variant="primary" onClick={() => setShow(true)}>
                    Add New Pet
               </Button>

               <Modal
                    show={show}
                    onHide={() => setShow(false)}
                    dialogClassName="modal-90w"
                    aria-labelledby="example-custom-modal-styling-title"
               >
                    <Modal.Body>
                  <AddPetForm />
                    </Modal.Body>
               </Modal>
          </>
     );
}

export default AddPet;
