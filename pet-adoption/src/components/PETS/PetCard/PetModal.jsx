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
   const { currentUser } = useUsersContext();
   const { pet, isOwner } = useContext(PetContext);
   const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);

   return (
      <div>
         <div className="pet-modal-card">
            <img
               className="pet-card-img"
               src={pet.picture}
               onClick={handleShow}
            />
            <div className="d-flex justify-content-between">
               <div> {pet.name}</div>
               <div> {pet.adoptionStatus}</div>
            </div>
            <div className="save">
               <WishListButton />
            </div>
         </div>

         <Modal className="pet-modal" show={show} onHide={handleClose}>
            <div className="pet-modal-content">
               <img className="pet-img-modal" src={pet.picture} />
               <div className="pet-card-menu">
                  <h1 className="pet-name">{pet.name}</h1>
                  <div>
                     {pet.adoptionStatus}
                     {isOwner && <p>By You!</p>}
                  </div>
                  <div className="d-flex gap-3">
                     {!pet.ownerId && <AdoptButton />}
                     {!pet.fosterId && !pet.ownerId && <FosterButton />}
                     {isOwner && <ReturnPetButton />}
                     <WishListButton />
                     <PetInfoModal />
                     {currentUser?.isAdmin && <EditPetModal />}
                  </div>
               </div>
            </div>
         </Modal>
      </div>
   );
}

export default PetModal;
