import axios from 'axios'
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import AddPetMenu from '../Components/AddPetMenu';

const BACKEND_URL = 'https://upet.adaptable.app/api';

function PetsPage(){
    
    const [pets, setPets] = useState(['']);
    const [user, setUser] = useState("");
    const [userId, setUserId] = useState("");

    useEffect(()=>{
        const userId = useParams();

        axios.get(`${BACKEND_URL}/:userId/pets`).then((response)=>{
            setPets(response.data);
        })

        .catch((error)=> console.log(error));

    }, []);

    return(     
        <div className='pets-page'>
            {/*<AddPetMenu className='pets-addpet-menu'/>*/}
            <Link className="pets-addpet-menu" to={`/:userId/pets/add`}> Add + </Link>
            <h1 className="pets-title"> My Pets </h1>
            <h3 className="pets-description"> Click your pet's name for more details </h3>
            <div className='pets-page-scroll'>
            {pets.map((pet)=>{
                return (
                    <div className = "pets-list" key={pet._id}>
                        <Link className="pet-name-link" to={`/userId/pets/${pet._id}`}>
                          <h2>{pet.name}</h2>
                          </Link>
                          <div className='pets-info' >
                            <p>{pet.image}</p>
                            <p>{pet.chipId}</p>
                            <p>{pet.description}</p>
                          </div>
                    </div>
                )
            })}
            </div>
        </div>
    )
}

export default PetsPage;
