import React, { useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";


function PetCardModal({pet}) {

       const [show, setShow] = useState(false);
       const handleClose = () => setShow(false);
       const handleShow = () => setShow(true);

     return (
          <>
               <Button variant="primary" onClick={handleShow}>
                    More About {pet.name}
               </Button>

               <Modal show={show} onHide={handleClose}>
                    <h4>Name: {pet.name}</h4>
                    <div>IMAGE OF PET</div>
                    <h5>Type: {pet.type}</h5>
                    <h5>Adoption Status: {pet.AdoptionStatus}</h5>
                    <h5>Height: {pet.height}</h5>
                    <h5>Weight: {pet.weight}</h5>
                    <h5>Color: {pet.color}</h5>
                    <h5>Bio: {pet.bio}</h5>
                    <h5>Hypoallergenic : {pet.hypoallergenic}</h5>
                    <h5> Dietary Restrictions : {pet.dietary}</h5>
                    <h5>Breed : {pet.breed}</h5>
                    { false &&                    
                         <Button variant="primary" onClick={handleClose}>
                              Save Changes
                         </Button>
                    }
               </Modal>
          </>
     );
}

export default PetCardModal;
