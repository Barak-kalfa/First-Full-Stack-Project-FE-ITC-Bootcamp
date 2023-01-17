import AddPetForm from "./AddPetForm";
import { useState } from "react";
import {Modal} from "react-bootstrap";
import "./addPet.css"

function AddPet() {
    const [show, setShow] = useState(false);
     return (
        <>
           <button className="admin-button" onClick={() => setShow(true)}>
              Add New Pet
           </button>

           <Modal
              size="lg"
              show={show}
              onHide={() => setShow(false)}
              dialogClassName="modal-90w"
              aria-labelledby="example-custom-modal-styling-title"
           >
              <Modal.Body className="add-pet-form-modal">
                 <h1>ADD NEW PET</h1>
                 <AddPetForm setShow={setShow} />
              </Modal.Body>
           </Modal>
        </>
     );
}

export default AddPet;
