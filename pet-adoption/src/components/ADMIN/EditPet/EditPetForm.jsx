import axios from "axios";
import { useState, useContext, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { EditPet } from "../../../Modules/petsModules";
import { AppContext } from "../../App/App";
import { PetContext } from "../../PETS/PetCard/PetCard";

function EditPetForm() {
     const { petsList } = useContext(AppContext);
     const { pet } = useContext(PetContext);
     const [petInfo, setPetInfo] = useState(pet);

     const handlePetInfo = (e) => {
          setPetInfo({ ...petInfo, [e.target.name]: e.target.value });
     };

     const handleSubmit = async (e) => {
          e.preventDefault();
          try {
               // const res = await axios.post(
               //      "http://localhost:8080/pets/edit",
               //      petInfo
               // );
               EditPet(petInfo);
          } catch (err) {
               console.log(err.message);
          }
     };

     return (
          <Form onSubmit={handleSubmit}>
               <Form.Select
                    aria-label="Type "
                    placeholder={pet.type}
                    onChange={handlePetInfo}
                    value={pet.type}
                    name="type"
               >
                    <option>Type?</option>
                    <option value="dog">Dog</option>
                    <option value="cat">Cat</option>
               </Form.Select>
               <Form.Control
                    placeholder={pet.name}
                    onChange={handlePetInfo}
                    value={pet.name}
                    className="textInput"
                    name="name"
               />
               <Form.Control
                    placeholder="Enter Adoption Status..."
                    onChange={handlePetInfo}
                    value={pet.adoptionStatus}
                    className="textInput"
                    name="adoptionStatus"
               />
               <Form.Control
                    placeholder="Enter Height..."
                    onChange={handlePetInfo}
                    value={pet.height}
                    className="textInput"
                    name="height"
               />
               <Form.Control
                    placeholder="Enter Weight..."
                    onChange={handlePetInfo}
                    value={pet.weight}
                    className="textInput"
                    name="weight"
               />
               <Form.Control
                    placeholder="Enter color..."
                    onChange={handlePetInfo}
                    value={pet.color}
                    className="textInput"
                    name="color"
               />
               <Form.Control
                    placeholder="Enter Bio..."
                    onChange={handlePetInfo}
                    value={pet.bio}
                    className="textInput"
                    name="bio"
               />
               <Form.Select
                    aria-label="Hypoallergenic"
                    onChange={handlePetInfo}
                    value={pet.hypoallergnic}
                    name="hypoallergnic"
               >
                    <option>Is Hypoallergenic ?</option>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
               </Form.Select>

               <Form.Control
                    placeholder="Any Dietary Restrictions?"
                    onChange={handlePetInfo}
                    value={pet.dietery}
                    className="textInput"
                    name="dietery"
               />
               <Form.Control
                    placeholder="Enter breed ..."
                    onChange={handlePetInfo}
                    value={pet.breed}
                    className="textInput"
                    name="breed"
               />
               <input
                    type="file"
                    value={petInfo.picture}
                    onChange={handlePetInfo}
                    name="picture"
               />
               <Button variant="primary" type="submit">
                    Submit
               </Button>
          </Form>
     );
}

export default EditPetForm;
