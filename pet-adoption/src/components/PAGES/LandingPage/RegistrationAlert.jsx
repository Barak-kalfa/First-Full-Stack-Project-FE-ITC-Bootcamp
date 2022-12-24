import React, { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";


export default function RegistrationAlert() {
     const [show, setShow] = useState(false);

     return (
          <>
               <Alert show={show} variant="success">
                    <Alert.Heading>How's it going?!</Alert.Heading>
                    <p>
                         We like your enthusiasm! We just thought of letting you
                         know that in order to adopt or foser a pet you must
                         first rigister.
                    </p>
                    <hr />
                    <div className="d-flex justify-content-end">
                         <Button
                              onClick={() => setShow(false)}
                              variant="outline-success"
                         >
                              Continue without Sigin Up
                         </Button>
                         <Button
                              onClick={() => setShow(false)}
                              variant="outline-success"
                         >
                              Ok Lets Make It offical!
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
