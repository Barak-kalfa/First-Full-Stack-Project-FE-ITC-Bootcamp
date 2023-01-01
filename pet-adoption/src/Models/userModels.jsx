import axios from "axios";

export async function signUpUser(newUser) {
     try {
          const userIdOkObj = await axios.post(
             "http://localhost:8080/users/signup",
             newUser
          );
          if (userIdOkObj.ok) {
             return true;
          }
     } catch (err) {
          console.log(err.response.data);
          return err.response.data;
     }
}

export async function loginUser(user) {
     try {
          const returendUser = await axios.post(
               "http://localhost:8080/users/login",
               user
          );
          // FE encryption needed
          if (returendUser) {
             return returendUser;
          }
     } catch (err) {
          console.log(err.message);
          return err.response.data;
     }
}


export async function updateUser(user) {
     try {
          // const res = await axios.put(
          //      `http://localhost:8080/users/${user.userId}`,
          //      user
          // );
          // // FE encryption needed
          // if (res) {
          //      console.log(res);
          //      return res;
     // }
          console.log(user);
          
     } catch (err) {
          console.log(err.message);
     }
};

export async function getUsers(){
          try {
               const users = await axios.get("http://localhost:8080/users");
              return users.data
          } catch (err) {
               console.log(err.message);
          }
     };