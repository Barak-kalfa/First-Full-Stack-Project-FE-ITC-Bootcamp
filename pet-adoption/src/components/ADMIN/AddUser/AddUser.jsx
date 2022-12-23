
import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import UserForm from "./UserForm";

function AddUser() {
     const [show, setShow] = useState(false);
     return (
          <>
               <Button variant="primary" onClick={() => setShow(true)}>
                    Add New User
               </Button>

               <Modal
                    show={show}
                    onHide={() => setShow(false)}
                    dialogClassName="modal-90w"
                    aria-labelledby="example-custom-modal-styling-title"
               >
                    <Modal.Body>
                      <UserForm />
                    </Modal.Body>
               </Modal>
          </>
     );
}

export default AddUser;
