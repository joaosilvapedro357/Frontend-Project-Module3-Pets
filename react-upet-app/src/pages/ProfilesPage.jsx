import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, navigate } from "react";

//const PORT = 3000;
const BACKEND_URL = 'http://localhost:3000/api'; /* it is api because we defined it 
like that in the routes */

function ProfilesPage() {

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

  const [myPetDetails, setMyPetDetails] = useState([]);

  const navigate = useNavigate();

  const {dogId} = useParams();

  const getAllPets = () =>{
    axios.get(`${BACKEND_URL}/dogs`)
  .then((response) => {
    // Check if the array is not empty before accessing its first element
    // Access the title property from the first item in the array
    setMyPetDetails(response.data);
  })
  .catch((error) => {
    console.error("Error fetching pet details:", error);
    // Handle the error and display an error message
  });
  }

  const handleSubmit = (e) => {
    let typeOfPet = 'dog';
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
    axios.post(`${BACKEND_URL}/dog`, requestBody)
    .then(() => {
        getAllPets();
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
        /* ADD SUCCESS MESSAGE AFTER ADDING PET */
    })
    .catch((error) => {
      console.error("Error creating pet:", error);
    });
};

useEffect(() => {
  getAllPets();
}, []); 

const deletePet = () =>{
  axios.delete(`${BACKEND_URL}/dogs/:${dogId}`).then(()=>{
      navigate("/pets");
  })
  .catch((error)=> console.log(error));
}

  return ( 
    <div className="pets-page">
      <h1 className="pets-title">My Pets</h1>
      <h2 className="Petspage-description">Access your pets Informations</h2>
      <form onSubmit={handleSubmit} className="pets-create">
        <div className="pet-create1">
          <label className="form-pet-name"><p className="p-form-name"> Name: </p><input className="form-name" type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)}/></label>
          <label className="form-pet-image"><p className="p-form-image"> Image: </p><input className="form-image" type="text" name="image" value={image} onChange={(e) => setImage(e.target.value)} />
          </label>
          <label className="form-pet-age"><p className="p-form-age"> Age: </p><input className="form-age" type="text" name="age" value={age} onChange={(e) => setAge(e.target.value)} />
          </label>
          <label className="form-pet-breed"><p className="p-form-breed"> Breed: </p><input className="form-breed" type="text" name="breed" value={breed} onChange={(e) => setBreed(e.target.value)} />
          </label>
          <label className="form-pet-hair"><p className="p-form-hair"> Hair: </p><input className="form-hair" type="text" name="hairType" value={hairType} onChange={(e) => setHairType(e.target.value)} />
          </label>
          <label className="form-pet-chip"><p className="p-form-chip"> Chip: </p><input className="form-chip" type="text" name="chipId" value={chipId} onChange={(e) => setChipId(e.target.value)} />
          </label> <br/> 
        </div>
        <div className="pet-create2">
          <label className="form-pet-sex"><p className="p-form-sex"> Sex: </p><input className="form-sex" type="text" name="sex" value={sex} onChange={(e) => setSex(e.target.value)} />
          </label>
          <label className="form-pet-size"><p className="p-form-size"> Size: </p><input className="form-size" type="text" name="size" value={size} onChange={(e) => setSize(e.target.value)} />
          </label>
          <label className="form-pet-weight"><p className="p-form-weight"> Weight: </p><input className="form-weight" type="text" name="weight" value={weight} onChange={(e) => setWeight(e.target.value)} />
          </label>
          <label className="form-pet-description"><p className="p-form-description"> Description: </p><input className="form-description" type="text" name="description" value={description} onChange={(e) => setDescription(e.target.value)} />
          </label>
          <label className="form-pet-diet"><p className="p-form-diet"> Diet: </p><input className="form-diet" type="text" name="diet" value={diet} onChange={(e) => setDiet(e.target.value)} />
          </label>
          <label className="form-pet-medical"><p className="p-form-medical"> Medical Record: </p><input className="form-medical" type="text" name="medicalRecord" value={medicalRecord} onChange={(e) => setMedicalRecord(e.target.value)} />
        </label>
        <label className="form-pet-medical"><p className="p-form-medical"> Type of Pet:</p><select value={typeOfPet} onChange={(e) => setTypeOfPet(e.target.value)}><option>
        Dog</option>
        <option>
        Cat</option>
        <option>
        Other Pet</option></select>
        </label>

        </div>
        <div className="add-buton">
          < button type="submit">Submit</button>
        </div>
      </form>
      <div className="pet-details">
      {myPetDetails.map((pet) => (
        <div className="pet-details-info" key={pet._id}>
          <p className="p-name">Name: {pet.name}</p>
          <img src={pet.image} alt="Pet Image" />
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
          <button className="petpage-button" onClick={deletePet}> Delete </button>
        </div>
          ))}
      </div>
    </div>
  ) 
}

export default ProfilesPage;

