import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const BACKEND_URL = 'http://localhost:3000';

function PetDetailsPage () {
    
    const {dogId} = useParams();
    const [pet, setPet] = useState('');

    useEffect(()=>{
        axios.get(`${BACKEND_URL}/dogs/${dogId}?_embed=tasks`).then((response)=>{
            const onePet = response.data;
            setPet(onePet);
        })
        .catch((error)=> console.log(error));
    }, [])

  return (

    <div>
        {pet && (
            <div>
                <h1>{pet.name}</h1>
                <p>{pet.image}</p>
                <p>{pet.age}</p>
                <p>{pet.breed}</p>
                <p>{pet.hairType}</p>
                <p>{pet.chipId}</p>
                <p>{pet.sex}</p>
                <p>{pet.size}</p>
                <p>{pet.weight}</p>
                <p>{pet.description}</p>
                <p>{pet.diet}</p>
                <p>{pet.medicalRecord}</p>
            </div>
        )}
        {pet && pet.tasks.map((task)=>{
            return(
                <div key={task.id}>
                    <h3>{task.name}</h3>
                    <h4>Description:</h4>
                    <p>{task.description}</p>
                </div>
            )
        })}
        <Link to = "/pets">Back</Link>
        <Link to={`/pets/edit/${dogId}`}> Edit Pet</Link>
    </div>
  )
}

export default PetDetailsPage

// Remember to always return on .maps!