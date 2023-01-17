import React, { useContext, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { PetContext } from "./PetCard";
import "../Pets.css";
import { useUsersContext } from "../../../context/UsersContext";

function PetInfoModal() {
   const { currentUser } = useUsersContext();
   const { pet } = useContext(PetContext);
  const [fullscreen, setFullscreen] = useState(true);
   const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
   return (
      <>
         <button className="pet-info-button" onClick={handleShow}>
            More
         </button>

         <Modal show={show} fullscreen={fullscreen} onHide={handleClose}>
            <div className="pet-info-modal">
               <div className="pet-info">
                  <h4>
                     Type: <h5>{pet.type}</h5>
                  </h4>
                  <h4>
                     Breed : <h5>{pet.breed}</h5>
                  </h4>
                  <h4>
                     Adoption Status: <h5>{pet.adoptionStatus}</h5>
                  </h4>
                  <h4>
                     Height: <h5>{pet.height} Cm.</h5>
                  </h4>
                  <h4>
                     Weight: <h5>{pet.weight} Kg.</h5>
                  </h4>
                  <h4>
                     Color: <h5>{pet.color}</h5>
                  </h4>
                  <h4>
                     Hypoallergenic : <h5>{pet.hypoallergenic}</h5>
                  </h4>
                  <h4>
                     Dietary Restrictions : <h5>{pet.dietary}</h5>
                  </h4>
               </div>
               <div className="pet-modal-right ">
                  <h4>Name: {pet.name}</h4>
                  <img className="pet-img-modal" src={pet.picture} />
                  <h4 className="d-flex flex-wrap">
                     Bio: <h5>{pet.bio}</h5>
                  </h4>
                  <button onClick={() =>setShow(!show)}>Close</button>
               </div>
            </div>
         </Modal>
      </>
   );
}

export default PetInfoModal;
