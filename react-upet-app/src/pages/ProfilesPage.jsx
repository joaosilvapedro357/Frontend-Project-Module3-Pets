import { useState } from "react"
import { Link, useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { useEffect, navigate } from "react"

//const PORT = 3000;
const BACKEND_URL = 'http://localhost:3000';

function PetsPage() {

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

  const navigate = useNavigate();

  const handleSubmit = (e) => {
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
      medicalRecord
    }

    // In the url we can use 'http://localhost:${PORT}' as well.
    axios.post(`${BACKEND_URL}`+'/dog', requestBody).then(() => {
      navigate("/pets"); // maybe './pets'
    })
    .catch((error) => {
      console.error("Error creating pet:", error);
    });
};

  return ( 
    <div>
      <form onSubmit={handleSubmit} className="pets-create">
        <label> Name:<input type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)}/></label>
        <label> Image:<input type="text" name="image" value={image} onChange={(e) => setImage(e.target.value)} />
        </label>
        <label> Age: <input type="text" name="age" value={age} onChange={(e) => setAge(e.target.value)} />
        </label>
        <label> Breed: <input type="text" name="breed" value={breed} onChange={(e) => setBreed(e.target.value)} />
        </label>
        <label> HairType: <input type="text" name="hairType" value={hairType} onChange={(e) => setHairType(e.target.value)} />
        </label>
        <label> ChipId: <input type="text" name="chipId" value={chipId} onChange={(e) => setChipId(e.target.value)} />
        </label>
        <label> Sex: <input type="text" name="sex" value={sex} onChange={(e) => setSex(e.target.value)} />
        </label>
        <label> Size: <input type="text" name="size" value={size} onChange={(e) => setSize(e.target.value)} />
        </label>
        <label> Weight: <input type="text" name="weight" value={weight} onChange={(e) => setWeight(e.target.value)} />
        </label>
        <label> Description: <input type="text" name="description" value={description} onChange={(e) => setDescription(e.target.value)} />
        </label>
        <label> Diet: <input type="text" name="diet" value={diet} onChange={(e) => setDiet(e.target.value)} />
        </label>
        <label> Medical Record: <input type="text" name="medicalRecord" value={medicalRecord} onChange={(e) => setMedicalRecord(e.target.value)} />
        </label>
        < button type="submit">Submit</button>
      </form>
    </div>
  ) 
}

export default PetsPage

