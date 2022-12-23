

function getPetInfo(id, petsList){
     
     return petsList.filter((pet)=> pet.id === id)
     
}

module.exports = {getPetInfo}
