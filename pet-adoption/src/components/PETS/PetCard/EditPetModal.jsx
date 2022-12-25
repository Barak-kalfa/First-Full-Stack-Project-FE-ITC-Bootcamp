import {useState} from 'react'
import { Button, Modal } from "react-bootstrap";
import EditPetForm from '../../ADMIN/EditPet/EditPetForm';

function EditPetModal() {
     const [show, setShow] = useState(false);
     const handleClose = () => setShow(false);
     const handleShow = () => setShow(true);
  return (
       <div>
            <Button variant="primary" onClick={handleShow}>
                 Edit Pet
            </Button>
            <Modal show={show} onHide={handleClose}>
                 <EditPetForm />
            </Modal>
       </div>
  );
}

export default EditPetModal