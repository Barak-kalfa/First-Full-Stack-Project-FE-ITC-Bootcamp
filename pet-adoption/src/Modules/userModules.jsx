import axios from "axios";

export async function registerUser(user){
     try{
   const res = await axios.post('http://localhost:8080/users', user)
     console.log(res);
     }catch(err){
          console.log(err.message);
     }
  
}

