import ReturnPetButton from "./ReturnPetButton";
import WishListButton from "./WishListButton";
import AdoptButton from "./AdoptButton";
import EditPetModal from "./EditPetModal";
import FosterButton from "./FosterButton";
import PetInfoModal from "./PetInfoModal";
import { PetContext } from "./PetCard";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../App/App";
import { Button, Modal } from "react-bootstrap";

function PetModal() {
     const { currentUser } = useContext(AppContext);
     const { pet } = useContext(PetContext);
     const [isOwner, setIsOwner] = useState(false);
     const [show, setShow] = useState(false);

     const handleClose = () => setShow(false);
     const handleShow = () => setShow(true);

     useEffect(() => {
          if (
               pet.ownerId === currentUser.userId ||
               pet.fosterId === currentUser.userId
          ) {
               setIsOwner(true);
          }
     }, []);
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
                              {!pet.fosterId && !pet.ownerId && (
                                   <FosterButton />
                              )}
                              {!pet.ownerId && <WishListButton />}
                              {isOwner && <ReturnPetButton />}
                              <PetInfoModal />
                              {true && <EditPetModal />}
                         </div>
                    </div>
               </Modal>
          </div>
     );
}

export default PetModal;
