import { useContext, useState } from "react";
import { Modal } from "react-bootstrap";
import { RiEdit2Fill } from "react-icons/ri";
import EditPetForm from "../../ADMIN/EditPet/EditPetForm";
import "../Pets.css";
import { PetContext } from "./PetCard";

function EditPetModal() {
   const { pet } = useContext(PetContext);
   const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
   return (
      <div>
         <button
            className="pet-edit-button"
            variant="primary"
            onClick={handleShow}
         >
            Edit
         </button>

         <Modal className="edit-pet-modal" show={show} onHide={handleClose}>
            <div className="edit-pet">
               <img className="edit-pet-img" src={pet.picture} />
               <EditPetForm />
            </div>
         </Modal>
      </div>
   );
}

export default EditPetModal;
