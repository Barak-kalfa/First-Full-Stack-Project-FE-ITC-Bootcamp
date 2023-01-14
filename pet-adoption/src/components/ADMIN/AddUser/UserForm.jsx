import { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useUsersContext } from "../../../context/UsersContext";
import { updateUser } from "../../../Models/userModels";
import MessageModal from "../../MessageModal/MessageModal";

function UserForm() {
   console.log("userForm Renders");
   const [message, setMessage] = useState("");
   const [show, setShow] = useState(false);
   const handleShow = () => setShow(true);
   const [userInfo, setUserInfo] = useState({
      userId: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      bio: "",
      password: "",
      newPassword: "",
   });
   const { currentUser } = useUsersContext();

   useEffect(() => {
      if (currentUser) {
         setUserInfo({
            userId: currentUser.userId,
            firstName: currentUser.firstName,
            lastName: currentUser.lastName,
            email: currentUser.email,
            phone: currentUser.phone,
            bio: currentUser.bio,
            password: "",
            newPassword: "",
         });
      }
   }, [currentUser]);

   // useEffect(() => {}, [userInfo]);

   const handleUserInfo = (e) => {
      setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
      console.log(userInfo);
   };
   const handleSubmit = async (e) => {
      e.preventDefault();
      const res = await updateUser(userInfo);
      if (res === "Wrong Password") {
         console.log("xxxxWrong Password");
         setMessage(res);
         handleShow();
      } else {
         setMessage("Your Profile Has Been Updated")
         handleShow()
      }
   };

   return (
      <>
         <MessageModal show ={show} setShow={setShow} message={message} />
         <Form onSubmit={handleSubmit}>
            <Form.Label className="label">First Name</Form.Label>
            <Form.Control
               placeholder={
                  currentUser ? currentUser.firstName : "Enter First Name"
               }
               onChange={handleUserInfo}
               value={userInfo.firstName}
               className="textInput"
               name="firstName"
            />
            <Form.Label className="label">Last Name</Form.Label>
            <Form.Control
               placeholder={
                  currentUser ? currentUser.lastName : "Enter Last Name"
               }
               onChange={handleUserInfo}
               value={userInfo.lastName}
               className="textInput"
               name="lastName"
            />
            <Form.Label className="label">Email Address</Form.Label>
            <Form.Control
               placeholder={
                  currentUser ? currentUser.email : "Enter Email Address"
               }
               onChange={handleUserInfo}
               value={userInfo.email}
               className="textInput"
               name="email"
            />
            <Form.Label className="label">Phone Number</Form.Label>
            <Form.Control
               placeholder={
                  currentUser ? currentUser.phone : "Enter Phone Number"
               }
               onChange={handleUserInfo}
               value={userInfo.phone}
               className="textInput"
               name="phone"
            />
            <Form.Label className="label">Bio</Form.Label>
            <Form.Control
               placeholder={currentUser ? currentUser.bio : "Write A Short Bio"}
               onChange={handleUserInfo}
               value={userInfo.bio}
               as="textarea"
               name="bio"
               style={{ height: "100px" }}
            />
            <Form.Label className="label"> New Password</Form.Label>
            <Form.Control
               placeholder={
                  "If You Wish To Change Your Password Enter A New Password"
               }
               onChange={handleUserInfo}
               value={userInfo.newPassword}
               className="textInput"
               name="newPassword"
               type='password'
            />
            <Form.Label className="label"> Password</Form.Label>
            <Form.Control
               placeholder={"To Save Changes Please Enter Your Password"}
               type='password'
               onChange={handleUserInfo}
               value={userInfo.password}
               className="textInput"
               name="password"
               required
            />
            <Button className="w-100 mt-2" type="submit">
               Save Changes
            </Button>
         </Form>
      </>
   );
}

export default UserForm;
