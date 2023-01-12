import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { Button, Modal, UserCard } from "react-bootstrap";
import "./UsersList.css";
import { usePetContext } from "../../../context/PetsContext";
import UserPets from "../../USER/UserPets/UserPets";
import UserWishList from "../../USER/UserWishList/UserWishList";

function UsersList() {
   const [usersList, setUsersList] = useState();
   const { getUserPets, userSaves } = usePetContext();
   const [fullscreen, setFullscreen] = useState(true);
   const [show, setShow] = useState(false);
   const [modalUserPets, setModalUserPets] = useState();

   function handleShow() {
      setShow(true);
   }

   const getUsers = async () => {
      try {
         const users = await axios.get("http://localhost:8080/users/all", {
            withCredentials: true,
         });
         setUsersList(users.data);
      } catch (err) {
         console.log(err.message);
      }
   };

   const getPetsOfUser = async (userId) => {
      const pets = await getUserPets(userId);
       setModalUserPets(pets)
    
   };
   useEffect(() => {
      getUsers();
   }, []);

      const handleModal = async (e)=>{
         try {
            await getPetsOfUser(e.target.parentNode.id);
            handleShow()
         }catch(err){
            console.log(err);
         }
      }
   return (
      <div className="UsersList">
         <Modal
            show={show}
            fullscreen={fullscreen}
            onHide={() => setShow(false)}
         >
            <Modal.Header closeButton>
               <Modal.Title>User's Pets</Modal.Title>
            </Modal.Header>
            <Modal.Body>
               <h2>Adopted/Fosterd:</h2>
               <UserPets userPets={modalUserPets?.userPets} />
               <h2>Saved:</h2>
               <UserWishList userSaves={modalUserPets?.userSaves}/>
            </Modal.Body>
         </Modal>
         <table>
            <thead>
               <tr>
                  <th>User ID</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email Address</th>
                  <th>Phone Number</th>
                  <th></th>
               </tr>
            </thead>
            <tbody>
               {usersList?.map((user, key) => {
                  return (
                     <tr
                        className="user-row"
                        onClick={(e) => {
                           handleModal(e);
                        }}
                        key={uuidv4()}
                        id={user.userId}
                        user={user.FirstName}
                     >
                        <td>{user.userId}</td>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <td></td>
                     </tr>
                  );
               })}
            </tbody>
         </table>
      </div>
   );
}

export default UsersList;

{
   /* <div>
   {usersList
      ? usersList.map((user) => <UserCard key={uuidv4()} user={user} />)
      : "Loading Users List"}
</div>; */
}
