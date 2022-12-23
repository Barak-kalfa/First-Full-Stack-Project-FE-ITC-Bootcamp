import AdoptButton from './AdoptButton';
import FosterButton from './FosterButton';
import PetCardModal from './PetCardModal';
import WishListButton from './WishListButton';



function PetCard(pet) {

     const handleClick = (e) => {
          console.log(e.target.id);
     };

  return (
       <div className="d-flex">
            <div>PETS IMAGE</div>
            <h6>Name: {pet.pet.name}</h6>
            <div>{pet.pet.adoptionStatus}</div>
            <FosterButton />
            <AdoptButton />
            <WishListButton />
            <PetCardModal pet={pet.pet} />
       </div>
  );
}

export default PetCard