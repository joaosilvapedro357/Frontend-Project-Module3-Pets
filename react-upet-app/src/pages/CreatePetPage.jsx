import { useState } from "react";
import {useNavigate } from "react-router-dom";
import axios from "axios";

const BACKEND_URL = 'http://localhost:3000/api';

function CreatePetPage() {

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

    const navigate = useNavigate();

    const handleSubmit = (e) => {
      //let typeOfPet = 'dog';
      e.preventDefault();
      // Call the onSubmit function passed from the parent component
      const requestBody = {
        name,
        age,
        image,
        breed,
        hairType,
        chipId,
        sex,
        size,
        weight,
        description,
        diet,
        medicalRecord, 
        typeOfPet
      }
  
      console.log('handling submit');
  
      // In the url we can use 'http://localhost:${PORT}' as well.
      axios.post(`${BACKEND_URL}/pet`, requestBody)
      .then(() => {
          //getAllPets();
          setName('');
          setAge('');
          setImage('');
          setBreed('');
          setHairType('');
          setChipId('');
          setSex('');
          setSize('');
          setWeight('');
          setDescription('');
          setDiet('');
          setMedicalRecord('');
          navigate(`/pets/`);
      })
      .catch((error) => {
        console.error("Error creating pet:", error);
      });
  };

  return (
    <div className="create-page">
      <h1 className="create-title"> Add My Pet </h1>
      <h2 className="createpage-description"> Add your Pet's info and Id </h2>
      <form onSubmit={handleSubmit} className="pets-create-form">
      <div className="creatediv-column">
        <div className="pets-create">
        <div className="pet-create1">
          <label className="form-pet-name">
            <p className="p-form-name"> Name: </p>
            <input className="form-name" type="text" name="name" value={name} 
            onChange={(e)=>setName(e.target.value)}/>
          </label>
          <label className="form-pet-image">
            <p className="p-form-image"> Image: </p>
            <input className="form-image" type="text" name="image" value={image} 
            onChange={(e) => setImage(e.target.value)}/>
          </label>
          <label className="form-pet-age">
            <p className="p-form-age"> Age: </p>
            <input className="form-age" type="text" name="age" value={age} 
            onChange={(e) => setAge(e.target.value)}/>
          </label>
          <label className="form-pet-breed">
            <p className="p-form-breed"> Breed: </p>
            <input className="form-breed" type="text" name="breed" value={breed} 
            onChange={(e) => setBreed(e.target.value)}/>
          </label>
          <label className="form-pet-hair">
            <p className="p-form-hair"> Hair: </p>
            <input className="form-hair" type="text" name="hairType" value={hairType} 
            onChange={(e) => setHairType(e.target.value)}/>
          </label>
          <label className="form-pet-chip">
            <p className="p-form-chip"> Chip: </p>
            <input className="form-chip" type="text" name="chipId" value={chipId} 
            onChange={(e) => setChipId(e.target.value)}/>
          </label> 
          <br/> 
        </div>
        <div className="pet-create2">
          <label className="form-pet-sex">
            <p className="p-form-sex"> Sex: </p>
            <input className="form-sex" type="text" name="sex" value={sex} 
            onChange={(e) => setSex(e.target.value)}/>
          </label>
          <label className="form-pet-size">
            <p className="p-form-size"> Size: </p>
            <input className="form-size" type="text" name="size" value={size} 
            onChange={(e) => setSize(e.target.value)}/>
          </label>
          <label className="form-pet-weight">
            <p className="p-form-weight"> Weight: </p>
            <input className="form-weight" type="text" name="weight" value={weight} 
            onChange={(e) => setWeight(e.target.value)}/>
          </label>
          <label className="form-pet-description">
            <p className="p-form-description"> Description: </p>
            <input className="form-description" type="text" name="description" 
            value={description} onChange={(e) => setDescription(e.target.value)}/>
          </label>
          <label className="form-pet-diet">
            <p className="p-form-diet"> Diet: </p>
            <input className="form-diet" type="text" name="diet" value={diet} 
            onChange={(e) => setDiet(e.target.value)}/>
          </label>
          <label className="form-pet-medical">
            <p className="p-form-medical"> Medical Record: </p>
            <input className="form-medical" type="text" name="medicalRecord" 
            value={medicalRecord} onChange={(e) => setMedicalRecord(e.target.value)}/>
          </label>
          <label className="form-pet-medical">
            <p className="p-form-medical"> Type of Pet:</p>
            <select value={typeOfPet} onChange={(e) => 
              setTypeOfPet(e.target.value)}>
                <option>Dog</option>
                <option>Cat</option>
                <option>Other Pet</option>
            </select>
          </label>
        </div>
        </div>
        <div className="add-buton">
          < button type="submit">Add</button>
        </div>
        </div>
      </form>
    </div>
  )
}

export default CreatePetPage;