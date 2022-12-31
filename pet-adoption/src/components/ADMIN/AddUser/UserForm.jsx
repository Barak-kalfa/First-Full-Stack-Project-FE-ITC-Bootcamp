import { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { updateUser } from "../../../Models/userModels";

function UserForm({ user}) {
     const [userInfo, setUserInfo] = useState(user);

     const handleUserInfo = (e) => {
          setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
     };
     const handleSubmit=(e)=>{
          e.preventDefault()
          updateUser(userInfo);
     }

     return (
          <Form onSubmit={handleSubmit}>
               <Form.Control
                    placeholder={user ? user.firstName : "Enter First Name"}
                    onChange={handleUserInfo}
                    value={userInfo?.firstName}
                    className="textInput"
                    name="firstName"
               />
               <Form.Control
                    placeholder={user ? user.lastName : "Enter Last Name"}
                    onChange={handleUserInfo}
                    value={userInfo?.lastName}
                    className="textInput"
                    name="lastName"
               />
               <Form.Control
                    placeholder={user ? user.email : "Enter Email Address"}
                    onChange={handleUserInfo}
                    value={userInfo?.email}
                    className="textInput"
                    name="email"
               />
               <Form.Control
                    placeholder={user ? user.phone : "Enter Phone Number"}
                    onChange={handleUserInfo}
                    value={userInfo?.phone}
                    className="textInput"
                    name="phone"
               />
               <Form.Control
                    placeholder={user ? user.password : "Enter Password"}
                    onChange={handleUserInfo}
                    value={userInfo?.password}
                    className="textInput"
                    name="password"
               />
               <Form.Control
                    placeholder={user ? user.bio : "Write A Short Bio"}
                    onChange={handleUserInfo}
                    value={userInfo?.bio}
                    className="textInput"
                    name="bio"
               />
               <Button className="w-100" type="submit">
                    Submit
               </Button>
          </Form>
     );
}

export default UserForm;
