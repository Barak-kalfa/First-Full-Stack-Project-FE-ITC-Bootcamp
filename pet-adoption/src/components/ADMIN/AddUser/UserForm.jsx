import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios"
function UserForm({ user }) {
     const [userInfo, setUserInfo] = useState(user);

     const handleUserInfo = (e) => {
          setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
     };

     // const handleSubmit = async (e) => {
     //      e.preventDefault();
     //      try {
     //           const res = await axios.post(
     //                "http://localhost:8080/users/update",
     //                userInfo
     //           );
     //           addPet(res.data);
     //           console.log(res.data);
     //      } catch (err) {
     //           console.log(err.message);
     //      }
     // };

     return (
          <Form>
               <Form.Control
                    placeholder={user.firstName}
                    onChange={handleUserInfo}
                    value={userInfo.firstName}
                    className="textInput"
                    name="firstName"
               />
               <Form.Control
                    placeholder={user.lastName}
                    onChange={handleUserInfo}
                    value={userInfo.lastName}
                    className="textInput"
                    name="lastName"
               />
               <Form.Control
                    placeholder={user.email}
                    onChange={handleUserInfo}
                    value={userInfo.email}
                    className="textInput"
                    name="email"
               />
               <Form.Control
                    placeholder={user.phone}
                    onChange={handleUserInfo}
                    value={userInfo.phone}
                    className="textInput"
                    name="phone"
               />
               <Form.Control
                    placeholder="{user.password}"
                    //   onChange={handleUserInfo}
                    //   value={userInfo.password})
                    className="textInput"
                    name="password"
               />
               <Form.Control
                    placeholder="{user.bio}"
                    //   onChange={handleUserInfo}
                    //   value={userInfo.bio})
                    className="textInput"
                    name="bio"
               />
               <Button className="w-100" type="submit">
                    Update Profile
               </Button>
          </Form>
     );
}

export default UserForm;
