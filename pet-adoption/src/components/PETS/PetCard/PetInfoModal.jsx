import React, { useContext, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { PetContext } from "./PetCard";
import "../Pets.css";
import { useUsersContext } from "../../../context/UsersContext";

function PetInfoModal() {
   const { currentUser } = useUsersContext();
   const { pet } = useContext(PetContext);

   const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);

   return (
      <>
         <Button variant="primary" onClick={handleShow}>
            More About {pet.name}
         </Button>

         <Modal show={show} onHide={handleClose}>
            <div className="p-5">
               <h4>Name: {pet.name}</h4>
               <div>
                  <img className="pet-img-modal" src={pet.picture} />
               </div>
               <h5>Type: {pet.type}</h5>
               <h5>Adoption Status: {pet.adoptionStatus}</h5>
               <h5>Height: {pet.height}</h5>
               <h5>Weight: {pet.weight}</h5>
               <h5>Color: {pet.color}</h5>
               <h5>Bio: {pet.bio}</h5>
               <h5>Hypoallergenic : {pet.hypoallergenic}</h5>
               <h5> Dietary Restrictions : {pet.dietary}</h5>
               <h5>Breed : {pet.breed}</h5>
               {currentUser.isAdmin && (
                  <Button variant="primary" onClick={handleClose}>
                     Save Changes
                  </Button>
               )}
            </div>
         </Modal>
      </>
   );
}

export default PetInfoModal;
