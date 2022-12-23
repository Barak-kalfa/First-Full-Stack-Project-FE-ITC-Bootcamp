import axios from "axios";
import { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { AppContext } from "../../App/App";


function AddPetForm() {

     const {addPet} = useContext(AppContext)

     const [petInfo, setPetInfo] = useState({
          type: "",
          name: "",
          adoptionStatus: "",
          picture: "",
          height: "",
          weight: "",
          color: "",
          bio: "",
          hypoallergnic: false,
          dietery: "",
          breed: "",
     });

     const [petPicture, setPetPicture] = useState()

     const handlePetInfo = (e) =>{
          setPetInfo({...petInfo, [e.target.name]: e.target.value})
     }
     const handlePetPicture = (e)=>{
          console.log(e.target.files[0]);
          
     }

     const handleSubmit = async (e) =>{
          e.preventDefault()
         try {
          const res = await axios.post("http://localhost:8080/pets", petInfo);
          addPet(res.data)
          console.log(res.data);
         }catch(err){
          console.log(err.message);
         }
     }

     return (
          <Form onSubmit={handleSubmit}>
               <Form.Select
                    aria-label="Type "
                    placeholder="Enter Name..."
                    onChange={handlePetInfo}
                    value={petInfo.type}
                    name="type"
               >
                    <option>Type?</option>
                    <option value="dog">Dog</option>
                    <option value="cat">Cat</option>
               </Form.Select>
               <Form.Control
                    placeholder="Enter Name..."
                    onChange={handlePetInfo}
                    value={petInfo.name}
                    className="textInput"
                    name="name"
               />
               <Form.Control
                    placeholder="Enter Adoption Status..."
                    onChange={handlePetInfo}
                    value={petInfo.adoptionStatus}
                    className="textInput"
                    name="adoptionStatus"
               />
               <Form.Control
                    placeholder="Enter Height..."
                    onChange={handlePetInfo}
                    value={petInfo.height}
                    className="textInput"
                    name="height"
               />
               <Form.Control
                    placeholder="Enter Weight..."
                    onChange={handlePetInfo}
                    value={petInfo.weight}
                    className="textInput"
                    name="weight"
               />
               <Form.Control
                    placeholder="Enter color..."
                    onChange={handlePetInfo}
                    value={petInfo.color}
                    className="textInput"
                    name="color"
               />
               <Form.Control
                    placeholder="Enter Bio..."
                    onChange={handlePetInfo}
                    value={petInfo.bio}
                    className="textInput"
                    name="bio"
               />
               <Form.Select
                    aria-label="Hypoallergenic"
                    onChange={handlePetInfo}
                    value={petInfo.hypoallergnic}
                    name="hypoallergnic"
               >
                    <option>Is Hypoallergenic ?</option>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
               </Form.Select>

               <Form.Control
                    placeholder="Any Dietary Restrictions?"
                    onChange={handlePetInfo}
                    value={petInfo.dietery}
                    className="textInput"
                    name="dietery"
               />
               <Form.Control
                    placeholder="Enter breed ..."
                    onChange={handlePetInfo}
                    value={petInfo.breed}
                    className="textInput"
                    name="breed"
               />
               <input
                    type="file"
                    value={petInfo.picture}
                    onChange={handlePetPicture}
                    name="picture"
               />
               <Button variant="primary" type="submit">
                    Submit
               </Button>
          </Form>
     );
}

export default AddPetForm;
