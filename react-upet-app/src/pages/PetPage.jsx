import axios from 'axios'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const BACKEND_URL = 'http://localhost:3000/api';

function PetPage(){
    
    const [pets, setPets] = useState(['']);

    useEffect(()=>{
        axios.get(`${BACKEND_URL}/dogs`).then((response)=>{
            setPets(response.data);
        })

        .catch((error)=> console.log(error));

    }, []);

    return(     
        <div>
            {pets.map((pet)=>{
                return (
                    <div className = "pets-list" key={pet._id}>
                        <Link to={`/pets/${pet._id}`}>
                        <h3>{pet.name}</h3>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}

export default PetPage;
