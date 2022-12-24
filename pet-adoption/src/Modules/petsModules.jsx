import axios from "axios";

export function getPetInfo(id, petsList) {
     return petsList.filter((pet) => pet.id === id);
}
export async function getPetImg() {
     try {
          const res = await axios.get(
               "https://dog.ceo/api/breeds/image/random"
          );

          return JSON.stringify(res.message)
     } catch (err) {
          console.log(err);
     }
}

// module.exports = { getPetInfo, getPetImg };
