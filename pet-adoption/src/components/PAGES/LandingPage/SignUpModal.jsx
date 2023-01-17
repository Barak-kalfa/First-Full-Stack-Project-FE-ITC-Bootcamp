import { Form, Button, Card, Alert, Modal } from "react-bootstrap";
import { useRef, useState } from "react";
import {  useNavigate } from "react-router-dom";
import { signUpUser } from "../../../Models/userModels";
import "./LandingPage.css";
import { useUsersContext } from "../../../context/UsersContext";

function SignUpModal() {
   const emailRef = useRef();
   const firstNameRef = useRef();
   const lastNameRef = useRef();
   const passwordRef = useRef();
   const phoneRef = useRef();
   const passwordConfirmRef = useRef();
   const [error, setError] = useState("");
   const [loading, setLoading] = useState(false);
   const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
   const navigate = useNavigate();
   const { setCurrentUser } = useUsersContext();

   const createUser = async (e) => {
      e.preventDefault();
      if (passwordRef.current.value !== passwordConfirmRef.current.value) {
         return setError("Passwords Do Not Match");
      }
      try {
         setError("");
         setLoading(true);
         const newUser = {
            firstName: firstNameRef.current.value,
            lastName: lastNameRef.current.value,
            phone: phoneRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
         };
         const loggedUser = await signUpUser(newUser);
         setCurrentUser(loggedUser);
         localStorage.setItem("userId", loggedUser.userId);
         navigate("/search");
      } catch (error) {
         console.log(error.message);
         setError("Failed To Create An Account :(");
      }
      setLoading(false);
   };

   return (
      <>
         <button className="signup-button" onClick={handleShow}>
            Sign Up
         </button>

         <Modal show={show} onHide={handleClose}>
            <Card className=" SignUp">
               <Card.Body>
                  <h2 className="text-center mb-4">Sign Up</h2>
                  {error && <Alert variant="danger">{error}</Alert>}
                  <Form onSubmit={createUser}>
                     <Form.Group id="first-name">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                           className="textInput"
                           type="text"
                           ref={firstNameRef}
                           required
                        />
                     </Form.Group>
                     <Form.Group id="last-name">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                           className="textInput"
                           type="text"
                           ref={lastNameRef}
                           required
                        />
                     </Form.Group>
                     <Form.Group id="phone">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control
                           className="textInput"
                           type="number"
                           ref={phoneRef}
                           required
                        />
                     </Form.Group>
                     <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                           className="textInput"
                           type="email"
                           ref={emailRef}
                           required
                        />
                     </Form.Group>
                     <Form.Group id="passowrd">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                           className="textInput"
                           type="password"
                           ref={passwordRef}
                           required
                        />
                     </Form.Group>
                     <Form.Group id="password-confirm">
                        <Form.Label>Password Confirmation</Form.Label>
                        <Form.Control
                           className="textInput"
                           type="password"
                           ref={passwordConfirmRef}
                           required
                        />
                     </Form.Group>
                     <Button
                        disabled={loading}
                        className="w-100"
                        type="submit"
                        onClick={handleClose}
                     >
                        Sign Up
                     </Button>
                  </Form>
               </Card.Body>
            </Card>
            <Modal.Footer>
               <Button variant="secondary" onClick={handleClose}>
                  Close
               </Button>
            </Modal.Footer>
         </Modal>
      </>
   );
}

export default SignUpModal;
