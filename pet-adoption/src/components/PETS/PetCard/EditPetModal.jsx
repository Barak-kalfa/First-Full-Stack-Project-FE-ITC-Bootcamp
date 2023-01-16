import {useState} from 'react'
import { Modal } from "react-bootstrap";
import { RiEdit2Fill } from "react-icons/ri";
import EditPetForm from '../../ADMIN/EditPet/EditPetForm';

function EditPetModal() {
     const [show, setShow] = useState(false);
     const handleClose = () => setShow(false);
     const handleShow = () => setShow(true);
  return (
       <div>
            <RiEdit2Fill className='edit-pet-button' variant="primary" onClick={handleShow}>
                 Edit Pet
            </RiEdit2Fill>
            <Modal show={show} onHide={handleClose}>
                 <EditPetForm />
            </Modal>
       </div>
  );
}

export default EditPetModal