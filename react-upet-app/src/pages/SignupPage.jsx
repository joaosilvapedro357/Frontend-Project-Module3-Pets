import axios from 'axios';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom'

const BACKEND_URL = 'http://localhost:3000/';

function SignUpPage() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [country, setCountry] = useState("");
    const [city, setCity] = useState("");
    const [address, setAddress] = useState("");
    const [numberOfPets, setNumberOfPets] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleSignUpsubmit = (e) =>{

        // Prevent default actions of the form submission e.g.: refreshing the page
        e.preventDefault();

        // Create a request body object
        const requestBody = {email, password, name, phoneNumber, country, city, address,
          numberOfPets};
        axios.post(`${BACKEND_URL}/auth/signup`, requestBody)
            .then(() =>{
                navigate('/login');
            })
            .catch((error)=>{
                const errorDescription = error.response.data.message;
                setError(errorDescription);
            })

    }
    
  return (
    <div>
        <h1>SignUp Page</h1>
        <form onSubmit = {handleSignUpsubmit}>
            <div>
                <label>Email</label>
                <input type ="email" name ="email" value = {email} onChange={(e)=> setEmail(e.target.value)}/>
            </div>
            <div>
                <label>Password</label>
                <input type ="password" name ="password" value = {password} onChange={(e)=> setPassword(e.target.value)}/>
            </div>
            <div>
                <label>Username</label>
                <input type ="text" name ="name" value = {name} onChange={(e)=> setName(e.target.value)}/>
            </div>
            <div>
                <label>Phone number</label>
                <input type ="number" name ="phoneNumber" value = {phoneNumber} onChange={(e)=> setPhoneNumber(e.target.value)}/>
            </div>
            <div>
                <label>Country</label>
                <input type ="text" name ="country" value = {country} onChange={(e)=> setCountry(e.target.value)}/>
            </div>
            <div>
                <label>City</label>
                <input type ="text" name ="city" value = {city} onChange={(e)=> setCity(e.target.value)}/>
            </div>
            <div>
                <label>Address</label>
                <input type ="text" name ="address" value = {address} onChange={(e)=> setAddress(e.target.value)}/>
            </div>
            <div>
                <label>Numbers of Pets</label>
                <input type ="number" name ="numberOfPets" value = {numberOfPets} onChange={(e)=> setNumberOfPets(e.target.value)}/>
            </div>
            <div>
                <button type="submit">Sign Up</button>
            </div>
            {error && <p>{error}</p>}
        </form>
    </div>
  )
}

export default SignUpPage