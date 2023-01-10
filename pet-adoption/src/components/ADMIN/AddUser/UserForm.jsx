import { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useUsersContext } from "../../../context/UsersContext";
import { updateUser } from "../../../Models/userModels";

function UserForm() {
   const [userInfo, setUserInfo] = useState();
   const { currentUser } = useUsersContext();

   useEffect(() => {
      currentUser && setUserInfo(currentUser);
   }, []);

   const handleUserInfo = (e) => {
      setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
   };
   const handleSubmit = (e) => {
      e.preventDefault();
      updateUser(userInfo);
   };

   return (
      <Form onSubmit={handleSubmit}>
         <Form.Label>First Name</Form.Label>
         <Form.Control
            placeholder={
               currentUser ? currentUser.firstName : "Enter First Name"
            }
            onChange={handleUserInfo}
            value={userInfo?.firstName}
            className="textInput"
            name="firstName"
         />
         <Form.Label>Last Name</Form.Label>
         <Form.Control
            placeholder={currentUser ? currentUser.lastName : "Enter Last Name"}
            onChange={handleUserInfo}
            value={userInfo?.lastName}
            className="textInput"
            name="lastName"
         />
         <Form.Label>Email Address</Form.Label>
         <Form.Control
            placeholder={
               currentUser ? currentUser.email : "Enter Email Address"
            }
            onChange={handleUserInfo}
            value={userInfo?.email}
            className="textInput"
            name="email"
         />
         <Form.Label>Phone Number</Form.Label>
         <Form.Control
            placeholder={currentUser ? currentUser.phone : "Enter Phone Number"}
            onChange={handleUserInfo}
            value={userInfo?.phone}
            className="textInput"
            name="phone"
         />
         <Form.Label>Bio</Form.Label>
         <Form.Control
            placeholder={currentUser ? currentUser.bio : "Write A Short Bio"}
            onChange={handleUserInfo}
            value={userInfo?.bio}
            as="textarea"
            name="bio"
            style={{ height: "100px" }}
         />
         {/* <Form.Label>Password</Form.Label>
         <Form.Control
            placeholder={currentUser ? currentUser.password : "Enter Password"}
            onChange={handleUserInfo}
            value={userInfo?.password}
            className="textInput"
            name="password"
         /> */}
         <Button className="w-100 mt-2" type="submit">
            Save Changes
         </Button>
      </Form>
   );
}

export default UserForm;
