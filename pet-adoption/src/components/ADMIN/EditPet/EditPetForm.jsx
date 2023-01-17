import axios from "axios";
import { useState, useContext, useEffect } from "react";
import Form from "react-bootstrap/Form";
import { usePetContext } from "../../../context/PetsContext";
import { PetContext } from "../../PETS/PetCard/PetCard";
import MessageModal from "../../MessageModal/MessageModal";
import "../../PETS/Pets.css"

function EditPetForm() {
   const [message, setMessage] = useState("");
   const [show, setShow] = useState(false);
   const handleShow = () => setShow(true);
   const { pet } = useContext(PetContext);
   const [petPicture, setPetPicture] = useState();
   const [petInfo, setPetInfo] = useState({
      type: "",
      name: "",
      adoptionStatus: "",
      picture: "",
      height: null,
      weight: null,
      color: "",
      bio: "",
      hypoallerganic: false,
      dietary: "",
      breed: "",
      ownderId: pet.ownerId,
      fosterId: pet.fosterId,
   });
   useEffect(() => {
      setPetInfo(pet);
   }, []);
   const handlePetInfo = (e) => {
      setPetInfo({ ...petInfo, [e.target.name]: e.target.value });
   };
   const handlePetPicture = (e) => {
      setPetPicture(e.target.files[0]);
   };
   const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(petInfo);
      try {
               const petData = new FormData();
               petData.append("petPicture", petPicture);
               for (let key in petInfo) petData.append(key, petInfo[key]);
               const res = await axios.put(
                  "http://localhost:8080/pets/edit",
                  petData,
                  {
                     withCredentials: true,
                  }
               );
         if (res) {
            setMessage("Pet Has Been Updated");
            handleShow();
         }
      } catch (err) {
         console.log(err.message);
      }
   };

   return (
      <>
         <MessageModal show={show} setShow={setShow} message={message} />
         <Form className="edit-pet-form" onSubmit={handleSubmit}>
            <Form.Label>Name:</Form.Label>
            <Form.Control
               placeholder="Enter Name..."
               onChange={handlePetInfo}
               value={petInfo?.name}
               className="petInput"
               name="name"
               type="string"
            />
            <Form.Label>Type:</Form.Label>
            <Form.Select
               aria-label="Type "
               onChange={handlePetInfo}
               value={petInfo?.type}
               name="type"
               className="petInput"
               type="string"
            >
               <option>Type?</option>
               <option value="dog">Dog</option>
               <option value="cat">Cat</option>
               <option value="other">other</option>
            </Form.Select>
            <Form.Label>Adoption Status:</Form.Label>
            <Form.Select
               aria-label="adoptionStatus "
               onChange={handlePetInfo}
               value={petInfo?.adoptionStatus}
               name="adoptionStatus"
               className="petInput"
               type="string"
            >
               <option>Adoption Status?</option>
               <option value="availble">Availble</option>
               <option value="fosterd">Fosterd</option>
               <option value="adopted">Adopted</option>
            </Form.Select>
            <Form.Label>Height:</Form.Label>
            <Form.Control
               placeholder="Enter Height..."
               onChange={handlePetInfo}
               value={petInfo?.height}
               className="petInput"
               name="height"
               type="number"
            />
            <Form.Label>Weight:</Form.Label>
            <Form.Control
               placeholder="Enter Weight..."
               onChange={handlePetInfo}
               value={petInfo?.weight}
               className="petInput"
               name="weight"
               type="number"
            />
            <Form.Label>Color:</Form.Label>
            <Form.Control
               placeholder="Enter color..."
               onChange={handlePetInfo}
               value={petInfo?.color}
               className="petInput"
               name="color"
               type="string"
            />
            <Form.Label>Bio:</Form.Label>
            <Form.Control
               placeholder="Enter Bio..."
               onChange={handlePetInfo}
               value={petInfo?.bio}
               className="petInput"
               name="bio"
               as="textarea"
               type="string"
            />
            <Form.Select
               aria-label="Hypoallergenic"
               onChange={handlePetInfo}
               value={petInfo?.hypoallerganic}
               name="hypoallerganic"
               className="petInput"
               type="string"
            >
               <option>Is Hypoallergenic ?</option>
               <option value={1}>Yes</option>
               <option value={0}>No</option>
            </Form.Select>
            <Form.Label>Dietary Restrictions:</Form.Label>
            <Form.Control
               placeholder="Any Dietary Restrictions?"
               onChange={handlePetInfo}
               value={petInfo?.dietary}
               className="petInput"
               name="dietary"
               type="string"
            />
            <Form.Label>Breed:</Form.Label>
            <Form.Control
               placeholder="Enter breed ..."
               onChange={handlePetInfo}
               value={petInfo?.breed}
               className="petInput"
               name="breed"
               type="string"
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
      </>
   );
}

export default EditPetForm;
