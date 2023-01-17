import axios from "axios";
import { useState, useContext, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { usePetContext } from "../../../context/PetsContext";
import { AppContext } from "../../App/App";
import "./addPet.css";

function AddPetForm({ setShow }) {
   const { addPet } = usePetContext();
   const [petPicture, setPetPicture] = useState();
   const [petInfo, setPetInfo] = useState({
      type: "",
      name: "",
      adoptionStatus: "",
      picture: "",
      height: "",
      weight: "",
      color: "",
      bio: "",
      hypoallerganic: false,
      dietary: "",
      breed: "",
   });

   const handlePetInfo = (e) => {
      setPetInfo({ ...petInfo, [e.target.name]: e.target.value });

      console.log(e.target.value);
   };
   const handlePetPicture = (e) => {
      setPetPicture(e.target.files[0]);
   };

   const handleSubmit = async (e) => {
      e.preventDefault();
      try {
         const petData = new FormData();
         petData.append("petPicture", petPicture);
         for (let key in petInfo) petData.append(key, petInfo[key]);
         const res = await axios.post("http://localhost:8080/pets", petData, {
            withCredentials: true,
         });
         console.log("add pet", res);
         addPet(res.data);
         setShow(false);
      } catch (err) {
         console.log(err.message);
      }
   };

   return (
      <Form className="add-pet-form" onSubmit={handleSubmit}>
         <Form.Label>Type of Animal:*</Form.Label>
         <Form.Select
            aria-label="Type "
            placeholder="Enter Name..."
            onChange={handlePetInfo}
            value={petInfo.type}
            name="type"
            className="petInput"
         >
            <option>Type?</option>
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
            <option value="other">other</option>
         </Form.Select>
         <Form.Label>Name:*</Form.Label>
         <Form.Control
            placeholder="Enter Name..."
            onChange={handlePetInfo}
            value={petInfo.name}
            className="petInput"
            name="name"
         />
         <Form.Label>Adoption Status:*</Form.Label>
         <Form.Select
            aria-label="Adoption Status"
            onChange={handlePetInfo}
            value={petInfo.adoptionStatus}
            name="adoptionStatus"
            className="petInput"
         >
            <option>Adoption Status ?</option>
            <option value="availble">Availble</option>
            <option value="fosterd">Fosterd</option>
            <option value="adopted">Adopted</option>
         </Form.Select>
         <Form.Label>Height:</Form.Label>
         <Form.Control
            placeholder="Enter Height..."
            onChange={handlePetInfo}
            value={petInfo.height}
            className="petInput"
            name="height"
            type="integer"
         />
         <Form.Label>Weight:</Form.Label>
         <Form.Control
            placeholder="Enter Weight..."
            onChange={handlePetInfo}
            value={petInfo.weight}
            className="petInput"
            name="weight"
            type="integer"
         />
         <Form.Label>Color:</Form.Label>
         <Form.Control
            placeholder="Enter color..."
            onChange={handlePetInfo}
            value={petInfo.color}
            className="petInput"
            name="color"
         />
         <Form.Label>Bio:</Form.Label>
         <Form.Control
            placeholder="Enter Bio..."
            onChange={handlePetInfo}
            value={petInfo.bio}
            className="petInput"
            name="bio"
            as="textarea"
         />
         <Form.Label>Hypoallergenic?</Form.Label>
         <Form.Select
            aria-label="Hypoallergenic"
            onChange={handlePetInfo}
            value={petInfo.hypoallerganic}
            name="hypoallerganic"
            className="petInput"
            type="boolean"
         >
            <option>Is Hypoallergenic ?</option>
            <option>?</option>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
         </Form.Select>
         <Form.Label>Dietary Restrictions:</Form.Label>
         <Form.Control
            placeholder="Any Dietary Restrictions?"
            onChange={handlePetInfo}
            value={petInfo.dietary}
            className="petInput"
            name="dietary"
         />
         <Form.Label>Breed:</Form.Label>
         <Form.Control
            placeholder="Enter breed ..."
            onChange={handlePetInfo}
            value={petInfo.breed}
            className="petInput"
            name="breed"
         />
         <Form.Label>Photo:</Form.Label>
         <input
            type="file"
            accept="img/*"
            onChange={handlePetPicture}
            name="picture"
            className="petInput"
         />
         <button variant="primary" type="submit">
            Submit
         </button>
      </Form>
   );
}

export default AddPetForm;
