import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import './EditPetPage.css';
import './CreatePetPage.css';

const BACKEND_URL = 'https://upet.adaptable.app';

function EditPetPage() {

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [image, setImage] = useState("");
  const [breed, setBreed] = useState("");
  const [hairType, setHairType] = useState("");
  const [chipId, setChipId] = useState("");
  const [sex, setSex] = useState("");
  const [size, setSize] = useState("");
  const [weight, setWeight] = useState("");
  const [description, setDescription] = useState("");
  const [diet, setDiet] = useState("");
  const [medicalRecord, setMedicalRecord] = useState("");
  const [typeOfPet, setTypeOfPet] = useState("");
  const [user, setUser] = useState("");

  const {userId, petId} = useParams();
  const navigate = useNavigate();

    useEffect(()=>{

      axios.get(`${BACKEND_URL}/api/pets/${petId}`).then((response)=>{
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
            setUser(onePet.user);
        })

        .catch((error)=> console.log(error));

    }, []);

    const handleSubmit = (e) =>{
      
      e.preventDefault();

      const requestBody = {name, image, age, breed, hairType, chipId, sex, size, 
          weight, description, diet, medicalRecord, user};

        axios.put(`${BACKEND_URL}/api/pets/${petId}`, requestBody).then(()=>{
            navigate(`/${userId}/pets/${petId}`);
        })

        .catch((error)=> console.log(error));
    }

    const deletePet = () =>{
      
        axios.delete(`${BACKEND_URL}/api/pets/${petId}`).then(()=>{
          navigate(`/${userId}/pets`);
        })

        .catch((error)=> console.log(error));
    }

    return(
      <div className="create-page">
      <div className="create-page-content">
        <h1 className="create-title"> Edit your Pet information</h1>
        <div className="create-card">
          <form onSubmit={handleSubmit} className="pets-create-form">
            <div className="creatediv-column">
              <div className="pets-create">
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
                  <input className="form-space" type="text" name="breed" value={breed} 
                  onChange={(e) => setBreed(e.target.value)}/>
                </label>
                <label className="form-pet-hair">
                  <p className="p-form-hair"> Hair: </p>
                  <input className="form-space" type="text" name="hairType" value={hairType} 
                  onChange={(e) => setHairType(e.target.value)}/>
                </label>
                <label className="form-pet-chip">
                  <p className="p-form-chip"> Chip: </p>
                  <input className="form-space" type="text" name="chipId" value={chipId} 
                  onChange={(e) => setChipId(e.target.value)}/>
                </label> 
                <label className="form-pet-sex">
                  <p className="p-form-sex"> Sex: </p>
                  <input className="form-space" type="text" name="sex" value={sex} 
                  onChange={(e) => setSex(e.target.value)}/>
                </label>
                <label className="form-pet-size">
                  <p className="p-form-size"> Size: </p>
                  <input className="form-space" type="text" name="size" value={size} 
                  onChange={(e) => setSize(e.target.value)}/>
                </label>
                <label className="form-pet-weight">
                  <p className="p-form-weight"> Weight: </p>
                  <input className="form-space" type="text" name="weight" value={weight} 
                  onChange={(e) => setWeight(e.target.value)}/>
                </label>
                <label className="form-pet-description">
                  <p className="p-form-description"> Description: </p>
                  <input className="form-space" type="text" name="description" 
                  value={description} onChange={(e) => setDescription(e.target.value)}/>
                </label>
                <label className="form-pet-diet">
                  <p className="p-form-diet"> Diet: </p>
                  <input className="form-space" type="text" name="diet" value={diet} 
                  onChange={(e) => setDiet(e.target.value)}/>
                </label>
                <label className="form-pet-medical">
                  <p className="p-form-medical"> Medical Record: </p>
                  <input className="form-space" type="text" name="medicalRecord" 
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
              <div>
                <button className="add-button" type="submit">Save</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    )
}

export default EditPetPage;

/*<label className="form-pet-name">
<p className="p-form-name"> Name: </p>
<input className="form-name" type="text" name="name" value={name} 
onChange={(e)=>setName(e.target.value)}/>
</label>*/