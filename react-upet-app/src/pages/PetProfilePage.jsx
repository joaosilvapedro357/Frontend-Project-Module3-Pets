import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import './PetProfilePage.css';

const BACKEND_URL = 'https://upet.adaptable.app';

function PetProfilePage() {
    
    const {userId, petId} = useParams();
    const [pet, setPet] = useState();
    const [user, setUser] = useState("");

    useEffect(()=>{
        axios.get(`${BACKEND_URL}/api/pets/${petId}`).then((response)=>{
            const onePet = response.data;
            setPet(onePet);
        })
        .catch((error)=> console.log(error));
    }, [petId])

  return (

    <div className="pet-profile-page">
        <div className="pet-profile-content">
            <h2 className="prof-page-description"> Your pet's digital Id </h2>
            <div className="profile-parts">
                <div className="prof-info-part">
                    {pet && (
                        <div className="pet-profile-info">
                            <h2 className="p-name"> {pet.name} </h2>
                            <div className="profile-info-grid">
                                <p className="p-age"> Age: <div className="p-bold">{pet.age}</div></p>
                                <p className="p-breed"> Breed: <div className="p-bold">{pet.breed}</div></p>
                                <p className="p-hair"> Hair Type: <div className="p-bold">{pet.hairType}</div></p>
                                <p className="p-chip"> Chip Id: <div className="p-bold">{pet.chipId}</div></p>
                                <p className="p-sex"> Sex: <div className="p-bold">{pet.sex}</div></p>
                                <p className="p-size"> Size: <div className="p-bold">{pet.size}</div></p>
                                <p className="p-weight"> Weight: <div className="p-bold">{pet.weight}</div></p>
                                <p className="p-description"> Description: <div className="p-bold">{pet.description}</div></p>
                                <p className="p-diet"> Diet: <div className="p-bold">{pet.diet}</div></p>
                                <p className="p-medical"> Medical Record: <div className="p-bold-mr">{pet.medicalRecord}</div></p>
                            </div>
                        </div>
                    )}
                </div>
                <div className="prof-img-part">
                    {pet && (
                        <div className="pet-profile-img1">
                            <img className='pet-profile-img' src={pet.image} alt="Pet Image" />
                            <div className="profile-page-links">
                                <Link className="prof-link-edit" to={`/${userId}/pets/${petId}/edit`}> Edit </Link>
                                <Link className="prof-link-back" to={`/${userId}/pets/`}> Back </Link>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    </div>
  )
}

export default PetProfilePage;