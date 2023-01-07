import ReturnPetButton from "./ReturnPetButton";
import WishListButton from "./WishListButton";
import AdoptButton from "./AdoptButton";
import EditPetModal from "./EditPetModal";
import FosterButton from "./FosterButton";
import PetInfoModal from "./PetInfoModal";
import { PetContext } from "./PetCard";
import { useContext, useEffect, useState } from "react";

import { Button, Modal } from "react-bootstrap";
import { useUsersContext } from "../../../context/UsersContext";

function PetModal() {
     const {currentUser} = useUsersContext()
     const { pet, isOwner } = useContext(PetContext);
     const [show, setShow] = useState(false);
     const handleClose = () => setShow(false);
     const handleShow = () => setShow(true);

     return (
        <div>
           <div className="pet-modal-card" onClick={handleShow}>
              <img className="pet-card-img" src={pet.picture} />
              <div> {pet.name}</div>
           </div>
           <Modal show={show} onHide={handleClose}>
              <div className="pet-modal">
                 <img className="pet-img-modal" src={pet.picture} />
                 <div className="pet-card-menu">
                    <h6>Name: {pet.name}</h6>
                    <div>
                       {pet.adoptionStatus}
                       {isOwner && <p>By You!</p>}
                    </div>
                    {!pet.ownerId && <AdoptButton />}
                    {!pet.fosterId && !pet.ownerId && <FosterButton />}
                    { <WishListButton />}
                    {isOwner && <ReturnPetButton />}
                    <PetInfoModal />
                    {currentUser?.isAdmin && <EditPetModal />}
                 </div>
              </div>
           </Modal>
        </div>
     );
}

export default PetModal;
