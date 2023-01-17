import ReturnPetButton from "./ReturnPetButton";
import WishListButton from "./WishListButton";
import AdoptButton from "./AdoptButton";
import EditPetModal from "./EditPetModal";
import FosterButton from "./FosterButton";
import PetInfoModal from "./PetInfoModal";
import { PetContext } from "./PetCard";
import { useContext, useEffect, useState } from "react";
import "../Pets.css";

import { Modal } from "react-bootstrap";
import { useUsersContext } from "../../../context/UsersContext";

function PetModal() {
   const { currentUser } = useUsersContext();
   const { pet, isOwner } = useContext(PetContext);
   const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);

   useEffect(()=>{

   },[pet.adoptionStatus])

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
                  <WishListButton />
                  <div>
                     {isOwner ? `${pet.adoptionStatus} By You!` : pet.adoptionStatus}
                  </div>
                  <div className="d-flex">
                     <div className="button-box">
                        {!pet.ownerId && <AdoptButton />}
                     </div>
                     <div className="button-box">
                        {!pet.fosterId && !pet.ownerId && <FosterButton />}
                     </div>
                     <div className="button-box">
                        <PetInfoModal />
                     </div>
                     <div className="button-box">
                        {isOwner && <ReturnPetButton />}
                     </div>
                     <div className="button-box">
                        {currentUser?.isAdmin && <EditPetModal />}
                     </div>
                  </div>
               </div>
            </div>
         </Modal>
      </div>
   );
}

export default PetModal;
