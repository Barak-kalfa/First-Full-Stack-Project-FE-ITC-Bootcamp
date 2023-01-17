import axios from "axios";


export async function loginUser(user) {
   try {
      const returendUser = await axios.post(
         "http://localhost:8080/users/login",
         user,
         { withCredentials: true }
      );
      if (returendUser) {
         return returendUser.data;
      }
   } catch (err) {
      console.log(err.message);
      return err.response.data;
   }
}

export async function signUpUser(newUser) {
     try {
          const resOk = await axios.post(
             "http://localhost:8080/users/signup",
             newUser
          );
          if (resOk.data.ok) {
             const user = loginUser({email: newUser.email, password: newUser.password});
             return user;
          }
     } catch (err) {
          console.log(err.response.data);
          return err.response.data;
     }
}



export async function updateUser(userInfo) {
   try {
      const res = await axios.put(
         `http://localhost:8080/users/update`,
         userInfo,
         { withCredentials: true }
      );
      if (res) {
         return res;
      }
   } catch (err) {
      console.log( err.response.data);
      return err.response.data;
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