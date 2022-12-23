import { Form } from "react-bootstrap"


function UserForm({user}) {


     //BUILD LIKE ADD PET


  return (
       <Form>
            <Form.Control
                 placeholder={user.name}
                 //   onChange={handlePetInfo}
                 //   value={petInfo.name})
                 className="textInput"
                 name="firstName"
            />
            <Form.Control
                 placeholder="{user.laseName}"
                 //   onChange={handlePetInfo}
                 //   value={petInfo.name})
                 className="textInput"
                 name="lastName"
            />
            <Form.Control
                 placeholder={user.email}
                 //   onChange={handlePetInfo}
                 //   value={petInfo.name})
                 className="textInput"
                 name="email"
            />
            <Form.Control
                 placeholder={user.phone}
                 //   onChange={handlePetInfo}
                 //   value={petInfo.name})
                 className="textInput"
                 name="phone"
            />
            <Form.Control
                 placeholder="{user.password}"
                 //   onChange={handlePetInfo}
                 //   value={petInfo.name})
                 className="textInput"
                 name="password"
            />
            <Form.Control
                 placeholder="{user.bio}"
                 //   onChange={handlePetInfo}
                 //   value={petInfo.name})
                 className="textInput"
                 name="bio"
            />
       </Form>
  );
}

export default UserForm