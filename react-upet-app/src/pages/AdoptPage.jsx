import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, navigate } from "react";

//const PORT = 3000;
const BACKEND_URL = 'http://localhost:3000/api'; /* it is api because we defined it 
like that in the routes */

function AdoptPage() {

  const [name, setName] = useState('');
  const [animal, setAnimal] = useState("");
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
  const [healthStatus, setHealthStatus] = useState('');
  const [location, setLocation] = useState('');
  const [associationName, setAssociationName] = useState('');

  const [myPetDetails, setMyPetDetails] = useState([]);

  const navigate = useNavigate();

  const getAllPets = () =>{
    axios.get(`${BACKEND_URL}/dogs`)
  .then((response) => {
    // Check if the array is not empty before accessing its first element
    // Access the title property from the first item in the array
    setMyPetDetails(response.data);
    console.log(response.data)
  })
  .catch((error) => {
    console.error("Error fetching pet details:", error);
    // Handle the error and display an error message
  });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the onSubmit function passed from the parent component
    const requestBody = {
      name,
      animal,
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
      healthStatus,
      location,
      associationName
    }

    // In the url we can use 'http://localhost:${PORT}' as well.
    axios.post(`${BACKEND_URL}/dog`, requestBody)
    .then(() => {
        getAllPets();
        setName('');
        setAnimal("");
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
        setLocation('');
        setAssociationName('');
    })
    .catch((error) => {
      console.error("Error creating pet:", error);
    });
};

useEffect(() => {
  getAllPets();
}, []); 

return ( 
  <div>
    <form onSubmit={handleSubmit} className="pets-create">
      <label> Name:<input type="text" name="name" value={name} 
      onChange={(e)=>setName(e.target.value)}/></label>
      <label> Animal:<input type="text" name="animal" value={animal} 
      onChange={(e)=>setName(e.target.value)}/></label>
      <label> Image:<input type="text" name="image" value={image} 
      onChange={(e) => setImage(e.target.value)} />
      </label>
      <label> Age: <input type="text" name="age" value={age} 
      onChange={(e) => setAge(e.target.value)} />
      </label>
      <label> Breed: <input type="text" name="breed" value={breed} 
      onChange={(e) => setBreed(e.target.value)} />
      </label>
      <label> HairType: <input type="text" name="hairType" value={hairType} 
      onChange={(e) => setHairType(e.target.value)} />
      </label>
      <label> ChipId: <input type="text" name="chipId" value={chipId} 
      onChange={(e) => setChipId(e.target.value)} />
      </label>
      <label> Sex: <input type="text" name="sex" value={sex} 
      onChange={(e) => setSex(e.target.value)} />
      </label>
      <label> Size: <input type="text" name="size" value={size} 
      onChange={(e) => setSize(e.target.value)} />
      </label>
      <label> Weight: <input type="text" name="weight" value={weight} 
      onChange={(e) => setWeight(e.target.value)} />
      </label>
      <label> Description: <input type="text" name="description" value={description} 
      onChange={(e) => setDescription(e.target.value)} />
      </label>
      <label> Diet: <input type="text" name="diet" value={diet} 
      onChange={(e) => setDiet(e.target.value)} />
      </label>
      <label> Medical Record: <input type="text" name="medicalRecord" 
      value={medicalRecord} onChange={(e) => setMedicalRecord(e.target.value)} />
      </label>
      < button type="submit">Submit</button>
    </form>
    <div>
    {myPetDetails.map((pet) => (
      <div key={pet._id}>
        <p>Name: {pet.name}</p>
        <p>Image: {pet.image}</p>
        <p>Age: {pet.age}</p>
        <p>Breed: {pet.breed}</p>
        <p>Hair Type: {pet.hairType}</p>
        <p>ChipId: {pet.chipId}</p>
        <p>Sex: {pet.sex}</p>
        <p>Size: {pet.size}</p>
        <p>Weight: {pet.weight}</p>
        <p>Description: {pet.description}</p>
        <p>Diet: {pet.diet}</p>
        <p>Medical Record: {pet.medicalRecord}</p>
      </div>
        ))}
    </div>
  </div>
) 
}

  
export default AdoptPage;