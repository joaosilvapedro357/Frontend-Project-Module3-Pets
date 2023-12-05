import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const BACKEND_URL = 'http://localhost:3000/api';

function ProfilesPage() {
    
    const {petId} = useParams();
    const [pet, setPet] = useState();

    useEffect(()=>{
        axios.get(`${BACKEND_URL}/dogs/${petId}`).then((response)=>{
            const onePet = response.data;
            setPet(onePet);
        })
        .catch((error)=> console.log(error));
    }, [petId])

  return (

    <div>
        {pet && (
            <div>
                <p>{pet.name}</p>
                <p>{pet.description}</p>
            </div>
        )}
        <Link to={`/pets/${petId}/edit`}> Edit Pet</Link>
    </div>
  )
}

export default ProfilesPage;
