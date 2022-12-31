import axios from "axios";

export async function signUpUser(user) {
     try {
          const res = await axios.post(
               "http://localhost:8080/users/signup",
               user
          );
          console.log(user);
          if (res) {
               console.log(res);
               return res;
          }
     } catch (err) {
          console.log(err.message);
     }
}

export async function loginUser(user) {
     try {
          const res = await axios.post(
               "http://localhost:8080/users/login",
               user
          );
          // FE encryption needed
          if (res) {
               console.log(res);
               return res;
          }
     } catch (err) {
          console.log(err.message);
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