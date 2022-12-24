import PetList from '../../../PetList/PetList'
import UsersList from '../../UsersList/UsersList'
import AddPet from '../../AddPet/AddPet'
import axios from "axios";
import {useEffect, useState } from "react";


function AdminDashboard() {

    
     const [usersList, setUsersList] = useState([]);

     const getUsers = async () => {
        try {
            const users = await axios.get("http://localhost:8080/users");
          setUsersList(users.data)
        }catch(err){
          console.log(err.message);
        }
     };

          const updateUser = (updatedUser) => {
         
          };

     useEffect(()=>{
      getUsers()
  
     },[])

  return (
       <div>
            <AddPet />
            <PetList/>
            <UsersList usersList ={usersList}/>
       </div>
  );
}

export default AdminDashboard