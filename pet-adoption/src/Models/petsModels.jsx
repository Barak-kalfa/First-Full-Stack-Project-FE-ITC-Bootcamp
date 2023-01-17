function updatePetsList(petId, userId, petsList, setPetsList) {
   const newList = petsList;
   newList.forEach((pet) => {
      if (petId === pet.id) {
         pet.fosterId = userId;
      }
   });
   setPetsList(newList);
}

function EditPet(editedPet, petsList) {
   const newList = petsList;
   petsList.forEach((pet, i) => {
      if (pet.petId === editedPet.petId) {
         petsList[i] = { ...editedPet };
      }
   });
   console.log(petsList);
   return petsList;
}

module.exports = { updatePetsList, EditPet };

