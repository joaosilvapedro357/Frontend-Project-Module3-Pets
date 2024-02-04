import axios from 'axios'
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import AddPetMenu from '../Components/AddPetMenu';
import './PetsPage.css';

const BACKEND_URL = 'https://upet.adaptable.app';

function PetsPage(){
    const{userId} = useParams();
    const [pets, setPets] = useState(['']);

    useEffect(()=>{
        axios.get(`${BACKEND_URL}/api/${userId}/pets`).then((response)=>{
            setPets(response.data);
        })

        .catch((error)=> console.log(error));

    }, [userId]);


    return(     
        <div className='pets-page'>
        <div className='pets-page-content'>   
            {/*<AddPetMenu className='pets-addpet-menu'/>*/}
            <div className="pets-title-add">
            <h1 className="pets-title"> My pets </h1>
            <Link className="pets-addpet-menu" to={`/${userId}/pets/add`}> Add + </Link>
            </div>
            <h3 className="pets-description"> Click on your pet's card for more information details. </h3>
            <div className='pets-page-scroll'>
            <div className='pets-page-scroll-info'>
            <div className='pets-page-grid'>
            {pets.map((pet)=>{
                return (
                    <div className = "pets-list" key={pet._id}>
                        <Link className="pet-name-link" to={`/${userId}/pets/${pet._id}`}>
                            <div className='pets-page-card-info'>
                                <div className='pets-img'>
                                    <img className='pets-img' src={pet.image}/>
                                </div>
                                <div className='pets-info'>
                                    <h2>{pet.name}</h2>
                                    <p>{pet.chipId}</p>
                                    <p>{pet.description}</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                )
            })}
            </div>
            </div>
            </div>
        </div>
        </div>
    )
}

export default PetsPage;
