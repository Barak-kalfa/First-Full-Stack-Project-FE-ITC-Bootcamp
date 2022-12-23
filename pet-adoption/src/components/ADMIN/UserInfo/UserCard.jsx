import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import UserForm from "../AddUser/UserForm";

function UserCard({ user }) {
       const [show, setShow] = useState(false);
     return (
          <div className="mb-3">
               <div onClick={() => setShow(true)}>
                    <span className="me-4">{user.name}</span>
                    <span className="me-4">{user.username}</span>
                    <span className="me-4">{user.email}</span>
                    <span>{user.phone}</span>
               </div>
               <Modal
                    show={show}
                    onHide={() => setShow(false)}
                    dialogClassName="modal-90w"
                    aria-labelledby="example-custom-modal-styling-title"
               >
                    <Modal.Body>
                         <UserForm user={user}/>
                    </Modal.Body>
               </Modal>
          </div>
     );
}

export default UserCard;
