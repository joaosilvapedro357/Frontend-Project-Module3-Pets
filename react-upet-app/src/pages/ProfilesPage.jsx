import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const BACKEND_URL = 'http://localhost:3000/api';

function ProjectDetailsPage () {
    
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
                <p>{pet.description}</p>
            </div>
        )}
        {pet && pet.tasks.map((task)=>{
            return(
                <div key={task._id}>
                    <h3>{task.name}</h3>
                    <h4>Description:</h4>
                    <p>{task.description}</p>
                </div>
            )
        })}
        <Link to = "/pets">Back</Link>
        <Link to={`/pets/${dogId}/edit`}> Edit Pet</Link>
    </div>
  )
}

export default ProjectDetailsPage
