import { useEffect, useState } from "react";
import Alert from "react-bootstrap/Alert";
import { useNavigate } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import "./LandingPage.css";
import { useUsersContext } from "../../../context/UsersContext";

export default function RegistrationAlert() {
   const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);
   const { currenUser } = useUsersContext();
   const navigate = useNavigate();


   const handleShow = () => {
      if (currenUser) {
         navigate("/");
      } else {
         setShow(true);
      }
   };

   return (
      <>
         <Button
            className="search-alert-button"
            variant="primary"
            onClick={handleShow}
         >
            Search For Something Furry
         </Button>

         <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
         >
            <Modal.Header closeButton>
               <Modal.Title>Hey There!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
               We just wanted to let you know that only signed up users can
               adopt and foster pets
            </Modal.Body>
            <Modal.Footer className="gap-5">
               <Button variant="secondary" onClick={handleClose}>
                   Sign Up
               </Button>
               <Button variant="primary" href="/search">
                  Continue To Serach Page
               </Button>
            </Modal.Footer>
         </Modal>
      </>
   );
}

/* <Alert className="alert" show={show} variant="success">
   <Alert.Heading>Hey There!</Alert.Heading>
   <p>You shuld know that only registed users can adopt and foster pets</p>
   <hr />
   <div className=" d-flex justify-content-between">
      <Button
         onClick={() => {
            setShow(false);
            navigate("/search");
         }}
         variant="outline-success"
      >
         Continue without Signing Up
      </Button>
      <Button onClick={() => setShow(false)} variant="outline-success">
         Ok, Lets Make It offical!
      </Button>
   </div>
</Alert>;

{
   !show && (
      <Button className="search-alert-button" onClick={() => setShow(true)}>
         Search A Furry Friend
      </Button>
   );
} */
