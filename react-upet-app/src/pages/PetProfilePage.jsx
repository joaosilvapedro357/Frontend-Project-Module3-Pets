import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const BACKEND_URL = 'http://localhost:3000/api';

function PetProfilePage() {
    
    const {petId} = useParams();
    const [pet, setPet] = useState();

    useEffect(()=>{
        axios.get(`${BACKEND_URL}/pets/${petId}`).then((response)=>{
            const onePet = response.data;
            setPet(onePet);
        })
        .catch((error)=> console.log(error));
    }, [petId])

  return (

    <div>
        {pet && (
            <div>
                <h3>{pet.name}</h3>
                <p>{pet.image}</p>
                <p>{pet.age}</p>
                <p>{pet.breed}</p>
                <p>{pet.hairType}</p>
                <p>{pet.description}</p>
            </div>
        )}
        <Link to={`/pets/${petId}/edit`}> Edit Pet</Link>
    </div>
  )
}

export default PetProfilePage