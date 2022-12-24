import axios from "axios";
import { useContext } from "react";
import Button from "react-bootstrap/Button";
import { AppContext } from "../../App/App";
import "../Pets.css"
import { PetContext } from "./PetCard";


function FosterButton() {

          const {currentUser } = useContext(AppContext);
          const { pet } = useContext(PetContext);
             const { addPet } = useContext(AppContext);


     const fosterPet= async ()=>{
          const data = {
               petId: pet.id,
               userId: currentUser.userId,
          };
     //     try {
     //          const res = await axios.post("https://localhost:8080/pets", data);
     //          console.log(res);
     //     } catch(err){
     //      console.log(err);
     //     }
              try {
                   const res = await axios.post(
                        "http://localhost:8080/pets/foster",
                        data
                   );
              } catch (err) {
                   console.log(err.message);
              }
     }

     return (
          <div>
               <Button className="FosterButton w-100" onClick={fosterPet}>
                    Foster
               </Button>
          </div>
     );
}

export default FosterButton;
