import { useState, useEffect, navigate } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import './AdoptPage.css';

//const PORT = 3000;
const BACKEND_URL = 'https://upet.adaptable.app/api'; /* it is api because we defined it 
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
  const [adoptPet, setAdoptPet] = useState('');
  const [myPetDetails, setMyPetDetails] = useState([]);

  const getAllPets = () =>{
    axios.get(`${BACKEND_URL}/petsforadoption`)
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
    axios.post(`${BACKEND_URL}/petforadoption`, requestBody)
    .then(() => {
        getAllPets();
        setName('');
        setAnimal('');
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
      <div className="adopt-page">
            <div className="adopt-page-content">
                  <div className="adopt-header">
                        <div>
                              <h1 className="adopt-title"> Want a new friend?</h1>
                              <p className="adopt-descr"> These pets are from Leiria and need a new home, scroll down to get to know them. </p>
                              <h3 className="adopt-descr-2"> APAMG is a non-profit Animal Protection Association, located<br></br> in Marinha Grande, founded in 2004. Know more on how to help in their <Link to="https://www.instagram.com/apamg_mg/" target="_blank" rel="noopener noreferrer" className='insta-link'>Instagram</Link> and <Link to="https://www.facebook.com/apamgmg/?locale=pt_PT" target="_blank" rel="noopener noreferrer" className='fb-link'>Facebook</Link>.</h3>
                        </div>
                        <div>
                              <img className="adopt-apamg-image" src="/images/apamg-png.webp" />
                        </div>
                  </div>
                  <div className="adopt-grid">
                        {myPetDetails.map((pet) => (
                              <div className="adopt-card" key={pet._id}>
                                    <div className="pet-adopt-imgdet">
                                          {/*<p>Animal: {pet.animal}</p>*/}
                                          {pet && (
                                          <div className="pet-adopt-img1">
                                                {console.log(pet.image)}
                                                <img className='pet-adopt-img' src={pet.image.replace('petify.io', 'petify.pt')} alt="Pet Image" />
                                          </div>
                                          )}
                                          <div className="adopt-pet-info">
                                                <h2 className="adopt-pet-name">{pet.name}</h2>
                                                <p className="adopt-pet-descr">{pet.description}</p>
                                                {/*<p>ChipId: {pet.chipId}</p>*/}
                                                <div className="adopt-pet-det">
                                                      <p className="adopt-pet-age">Age: {pet.age}</p>
                                                      <p className="adopt-pet-sex">Sex: {pet.sex}</p>
                                                      <p className="adopt-pet-size">Size: {pet.size}</p>
                                                      {/*<p>Weight: {pet.weight}</p>*/}
                                                      {/*<p>Medical Record: {pet.medicalRecord}</p>*/}
                                                      <p className="adopt-pet-health">Health Status: {pet.healthStatus}</p>
                                                      {/*<p>Location: {pet.location}</p>*/}
                                                      <p className="adopt-pet-association">Association Name: {pet.associationName}</p>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        ))}
                  </div>
            </div>
      </div>
  ) 
}

export default AdoptPage;

/*<form onSubmit={handleSubmit} className="adopt-form">
            <div className="createadopt-column">
            <div className="adopt-create">
            <div className="adopt-create1">
                  <label className="form-adopt-name">
                        <p className="adopt-form-name"> Name: </p>
                        <input className="a-form-name" type="text" name="name" value={name} 
                        nChange={(e)=>setName(e.target.value)}/>
                  </label>
                  <label className="form-adopt-animal">
                        <p className="adopt-form-animal"> Animal: </p>
                        <input className="a-form-animal" type="text" name="animal" value={animal} 
                        onChange={(e)=>setAnimal(e.target.value)}/>
                  </label>
                  <label className="form-adopt-image">
                        <p className="adopt-form-image"> Image: </p>
                        <input className="a-form-image" type="text" name="image" value={image} 
                        onChange={(e)=>setImage(e.target.value)}/>
                  </label>
                  <label className="form-adopt-age">
                        <p className="adopt-form-age"> Age: </p>
                        <input className="a-form-age" type="text" name="age" value={age} 
                        onChange={(e)=>setAge(e.target.value)}/>
                  </label>
                  {/*<label className="form-adopt-breed">
                        <p className="adopt-form-breed"> Breed: </p>
                        <input className="a-form-breed" type="text" name="breed" value={breed} 
                        onChange={(e)=>setBreed(e.target.value)}/>
                  </label>
                  <label className="form-adopt-hair">
                        <p className="adopt-form-hair"> Hair Type: </p>
                        <input className="a-form-hair" type="text" name="animal" value={hairType} 
                        onChange={(e)=>setHairType(e.target.value)}/>
                  </label>
                  <label className="form-adopt-chip">
                        <p className="adopt-form-chip"> Chip Id: </p>
                        <input className="a-form-chip" type="text" name="chipId" value={chipId} 
                        onChange={(e)=>setChipId(e.target.value)}/>
                  </label>
                  <label className="form-adopt-sex">
                        <p className="adopt-form-sex"> Sex: </p>
                        <input className="a-form-sex" type="text" name="sex" value={sex} 
                        onChange={(e)=>setSex(e.target.value)}/>
                  </label>
            </div>
            <div className="adopt-create2">
                  <label className="form-adopt-size">
                        <p className="adopt-form-size"> Size: </p>
                        <input className="a-form-size" type="text" name="size" value={size} 
                        onChange={(e)=>setSize(e.target.value)}/>
                  </label>
                  <label className="form-adopt-weight">
                        <p className="adopt-form-weight"> Weight: </p>
                        <input className="a-form-weight" type="text" name="weight" value={weight} 
                        onChange={(e)=>setWeight(e.target.value)}/>
                  </label>
                  <label className="form-adopt-description">
                        <p className="adopt-form-description"> Description: </p>
                        <input className="a-form-description" type="text" name="description" 
                        value={description} onChange={(e)=>setDescription(e.target.value)}/>
                  </label>
                  <label className="form-adopt-medical">
                        <p className="adopt-form-medical"> Medical Record: </p>
                        <input className="a-form-medical" type="text" name="medicalRecord" 
                        value={medicalRecord} onChange={(e)=>setMedicalRecord(e.target.value)}/>
                  </label>
                  <label className="form-adopt-health">
                        <p className="adopt-form-health"> Health Status: </p>
                        <input className="a-form-health" type="text" name="healthStatus" 
                        value={healthStatus} onChange={(e)=>setHealthStatus(e.target.value)}/>
                  </label>
                  <label className="form-adopt-location">
                        <p className="adopt-form-location"> Location: </p>
                        <input className="a-form-location" type="text" name="location" value={location} 
                        onChange={(e)=>setLocation(e.target.value)}/>
                  </label>
                  <label className="form-adopt-association">
                        <p className="adopt-form-association"> Association: </p>
                        <input className="a-form-association" type="text" name="associationName" 
                        value={associationName} onChange={(e)=>setAssociationName(e.target.value)}/>
                  </label>
            </div>
            <Link to="/pets" className="adopt-button"> Apply </Link>
            </div>
            <div className="adopt-buton">
                  < button type="submit">Add</button>
            </div>
            </div>
            </form>*/