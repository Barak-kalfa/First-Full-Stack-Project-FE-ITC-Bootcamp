import React, { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

export default function RegistrationAlert() {
     const [show, setShow] = useState(false);
     const navigate = useNavigate();
     return (
          <>
               <Alert show={show} variant="success">
                    <Alert.Heading>Hey There!</Alert.Heading>
                    <p>
                        You shuld know that only registed users can adopt and foster pets
                    </p>
                    <hr />
                    <div className="d-flex justify-content-between">
                         <Button
                              onClick={() => {
                                   setShow(false)
                                   navigate("/search");
                              }}
                              variant="outline-success"
                         >
                              Continue without Signing Up
                         </Button>
                         <Button
                              onClick={() => setShow(false)}
                              variant="outline-success"
                         >
                              Ok, Lets Make It offical!
                         </Button>
                    </div>
               </Alert>

               {!show && (
                    <Button onClick={() => setShow(true)}>
                         Search A Furry Friend
                    </Button>
               )}
          </>
     );
}
