import axios from 'axios'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AddPetMenu from '../Components/addPetMenu';

const BACKEND_URL = 'http://localhost:3000/api';

function PetsPage(){
    
    const [pets, setPets] = useState(['']);

    useEffect(()=>{
        axios.get(`${BACKEND_URL}/pets`).then((response)=>{
            setPets(response.data);
        })

        .catch((error)=> console.log(error));

    }, []);

    return(     
        <div>
          <AddPetMenu/>
            {pets.map((pet)=>{
                return (
                    <div className = "pets-list" key={pet._id}>
                        <Link to={`/pets/${pet._id}`}>
                          <h3>{pet.name}</h3>
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
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}

export default PetsPage;
