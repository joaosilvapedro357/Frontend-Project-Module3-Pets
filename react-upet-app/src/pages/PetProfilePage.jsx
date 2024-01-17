import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

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
        <h2 classname="prof-page-description"> Your pet's digital Id </h2>
        <div className="profile-parts">
            <div className="prof-img-part">
                {pet && (
                    <div className="pet-profile-img1">
                        <img className='pet-profile-img' src={pet.image} alt="Pet Image" />
                    </div>
                )}
            </div>
            <div className="prof-info-part">
                {pet && (
                    <div className="pet-profile-info">
                        <h1 className="p-name"> {pet.name} </h1>
                        <p className="p-age"> Age: {pet.age}</p>
                        <p className="p-breed"> Breed: {pet.breed}</p>
                        <p className="p-hair"> Hair Type: {pet.hairType}</p>
                        <p className="p-chip"> ChipId: {pet.chipId}</p>
                        <p className="p-sex"> Sex: {pet.sex}</p>
                        <p className="p-size"> Size: {pet.size}</p>
                        <p className="p-weight"> Weight: {pet.weight}</p>
                        <p className="p-description"> Description: {pet.description}</p>
                        <p className="p-diet"> Diet: {pet.diet}</p>
                        <p className="p-medical"> Medical Record: {pet.medicalRecord}</p>
                    </div>
                )}
            </div>
        </div>
        <div className="profile-page-links">
            <Link className="prof-link-edit" to={`/${userId}/pets/${petId}/edit`}> Edit </Link>
            <Link className="prof-link-back" to={`/${userId}/pets/`}> Back </Link>
        </div>
    </div>
  )
}

export default PetProfilePage;