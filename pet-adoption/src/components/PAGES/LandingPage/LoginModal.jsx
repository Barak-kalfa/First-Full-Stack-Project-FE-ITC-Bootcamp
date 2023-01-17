import React, { useState, useRef } from "react";
import { Form, Button, Card, Alert, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useUsersContext } from "../../../context/UsersContext";
import { loginUser } from "../../../Models/userModels";
import "./LandingPage.css";

function LoginModal() {
   const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
   const emailRef = useRef();
   const passwordRef = useRef();
   const [error, setError] = useState("");
   const [loading, setLoading] = useState(false);
   const navigate = useNavigate();
   const { setCurrentUser } = useUsersContext();

   const handleSubmit = async (e) => {
      e.preventDefault();
      try {
         setError("");
         setLoading(true);
         const user = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
         };
         const loggedUser = await loginUser(user);
         if (loggedUser.error) {
            setError(loggedUser.error);
         } else {
            setCurrentUser(loggedUser);
            localStorage.setItem("userId", loggedUser.userId);
            navigate("/search");
         }
      } catch (error) {
         console.log(error.message);
         setError("Failed To Log In :(");
      }
      setLoading(false);
   };

   return (
      <>
         <button className="login-button" onClick={handleShow}>
            Login
         </button>

         <Modal show={show} onHide={handleClose}>
            <Card className=" Login">
               <Card.Body>
                  <h2 className="text-center mb-4">Login</h2>
                  {error && <Alert variant="danger">{error}</Alert>}
                  <Form onSubmit={handleSubmit}>
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
                     <Button
                        disabled={loading}
                        className="w-100 mb-3 mt-3"
                        type="submit"
                     >
                        Login
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

export default LoginModal;
