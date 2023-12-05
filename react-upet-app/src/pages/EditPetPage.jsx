import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";


const BACKEND_URL = 'http://localhost:3000/api';

function EditPetPage() {

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [image, setImage] = useState('');
  const [breed, setBreed] = useState('');
  const [hairType, setHairType] = useState('');
  const [chipId, setChipId] = useState('');
  const [sex, setSex] = useState('');
  const [size, setSize] = useState('');
  const [weight, setWeight] = useState('');
  const [description, setDescription] = useState('');
  const [diet, setDiet] = useState('');
  const [medicalRecord, setMedicalRecord] = useState('');
  const [typeOfPet, setTypeOfPet] = useState('');

    const {petId} = useParams();
    const navigate = useNavigate();


    useEffect(()=>{
        axios.get(`${BACKEND_URL}/pets/${petId}`).then((response)=>{
            const onePet = response.data;
            setName(onePet.name);
            setImage(onePet.image);
            setAge(onePet.age);
            setBreed(onePet.breed);
            setHairType(onePet.hairType);
            setChipId(onePet.chipId);
            setSex(onePet.sex);
            setSize(onePet.size);
            setWeight(onePet.weight);
            setDescription(onePet.description);
            setDiet(onePet.diet);
            setMedicalRecord(onePet.medicalRecord);
        })

        .catch((error)=> console.log(error));

    }, []);

    useEffect(()=>{
      axios.get(`${BACKEND_URL}/pets/${petId}`).then((response)=>{
          const onePet = response.data;
          setName(onePet.name);
          setDescription(onePet.description);
      })

      .catch((error)=> console.log(error));

  }, []);

    const handleSubmit = (e) =>{
        e.preventDefault();

        const requestBody = {name, image, age, breed, hairType, chipId, sex, size, 
          weight, description, diet, medicalRecord};

        axios.put(`${BACKEND_URL}/pets/${petId}`, requestBody).then(()=>{
            navigate(`/pets/${petId}`);
        })

        .catch((error)=> console.log(error));
    }

    const deletePet = () =>{
      
        axios.delete(`${BACKEND_URL}/pets/${petId}`).then(()=>{
            navigate("/pets");
        })

        .catch((error)=> console.log(error));
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>Name:
                  <input type="text" name="name" value={name} onChange={(e)=> 
                    setName(e.target.value)}/>
                </label>
                <label>Image:
                  <input type="text" name="image" value={image} onChange={(e)=> 
                    setImage(e.target.value)}/>
                </label>
                <label>Age:
                  <input type="text" name="age" value={age} onChange={(e)=> 
                    setAge(e.target.value)}/>
                </label>
                <label>Breed:
                  <input type="text" name="breed" value={breed} onChange={(e)=> 
                    setBreed(e.target.value)}/>
                </label>
                <label>Hair Type:
                  <input type="text" name="hairType" value={hairType} onChange={(e)=> 
                    setHairType(e.target.value)}/>
                </label>
                <label>Chip Id:
                  <input type="text" name="chipId" value={chipId} onChange={(e)=> 
                    setChipId(e.target.value)}/>
                </label>
                <label>Sex:
                  <input type="text" name="sex" value={sex} onChange={(e)=> 
                    setSex(e.target.value)}/>
                </label>
                <label>Size:
                  <input type="text" name="size" value={size} onChange={(e)=> 
                    setSize(e.target.value)}/>
                </label>
                <label>Weight:
                  <input type="text" name="weight" value={weight} onChange={(e)=> 
                    setWeight(e.target.value)}/>
                </label>
                <label>Description:
                  <input type="text" name="description" value={description} 
                  onChange={(e)=> setDescription(e.target.value)}/>
                </label>
                <label>Diet:
                  <input type="text" name="diet" value={diet} onChange={(e)=> 
                    setDiet(e.target.value)}/>
                </label>
                <label>Medical Record:
                  <input type="text" name="medicalRecord" value={medicalRecord} 
                  onChange={(e)=> setMedicalRecord(e.target.value)}/>
                </label>
                <button type="submit">Edit Pet</button>
            </form>
            <button onClick={deletePet}>Delete</button>
        </div>
    )
}

export default EditPetPage;