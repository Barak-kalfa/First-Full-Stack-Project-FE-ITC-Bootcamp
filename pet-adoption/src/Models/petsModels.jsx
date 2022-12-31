
function updatePetsList(petId, userId, petsList, setPetsList){
     const newList = petsList
     newList.forEach((pet) => {
          if (petId === pet.id) {
               pet.fosterId = userId;
          }
     });
     setPetsList(newList);
     console.log(petsList);
}

function EditPet(pet, petList){
     petList.forEach((listPet)=>{
          if (listPet.id === pet.id){
               listPet = pet
          }
     })
}

module.exports = { updatePetsList, EditPet };


// export function getPetInfo(id, petsList) {
//      return petsList.filter((pet) => pet.id === id);
// }
// export async function getPetImg() {
//      try {
//           const res = await axios.get(
//                "https://dog.ceo/api/breeds/image/random"
//           );

//           return JSON.stringify(res.message)
//      } catch (err) {
//           console.log(err);
//      }
// }