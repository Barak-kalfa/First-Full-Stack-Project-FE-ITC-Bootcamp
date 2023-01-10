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
            <div className="p-2 pet-info-modal">
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
                     Height: <h5>{pet.height}</h5>
                  </h4>
                  <h4>
                     Weight: <h5>{pet.weight}</h5>
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
                  <h4>
                     Bio: <h5>{pet.bio}</h5>
                  </h4>
                  {currentUser?.isAdmin && (
                     <Button variant="primary" onClick={handleClose}>
                        Save Changes
                     </Button>
                  )}
               </div>
            </div>
         </Modal>
      </>
   );
}

export default PetInfoModal;
