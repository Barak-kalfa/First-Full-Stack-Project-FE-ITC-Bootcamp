import { Form, Button, Card, Alert, Modal } from "react-bootstrap";
import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { signUpUser } from "../../../Models/userModels";
import "./LandingPage.css";

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
         const res = await signUpUser(newUser);
         console.log(res);
         setError("");
         // change to equal login
      } catch (error) {
         console.log(error.message);
         setError("Failed To Create An Account :(");
      }
      setLoading(false);
   };

   return (
      <>
         <Button className="signup-button" onClick={handleShow}>
            Sign Up
         </Button>

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
               <div className="w-100 text-center mt-2 mb-2">
                  Already have an account?
                  <Link to="/login">Log In</Link>
               </div>
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
