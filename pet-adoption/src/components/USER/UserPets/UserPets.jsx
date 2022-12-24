import { useContext, useEffect, useState } from "react"
import { AppContext } from "../../App/App"
import { v4 as uuidv4 } from "uuid";
import PetCard from "../../PETS/PetCard/PetCard";

function UserPets() {
  const user = {id: "1"}
  const {petsList} = useContext(AppContext)
  const [usersPets, setUsersPets] = useState()

  
  const getUserPets =async ()=> {
    const userPets = petsList.filter((pet) => pet.ownerId === user.id)
    setUsersPets(userPets);
  }
  
  useEffect(()=>{
    getUserPets()
  },[])

  return (
       <div>
            {usersPets &&
                 usersPets.map((pet) => <PetCard key={uuidv4()} pet={pet} />)}
       </div>
  );
}

export default UserPets