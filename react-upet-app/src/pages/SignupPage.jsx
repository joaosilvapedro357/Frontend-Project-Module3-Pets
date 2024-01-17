import axios from 'axios';
import { useState, useEffect } from 'react';
import {useNavigate, useParams} from 'react-router-dom'

const BACKEND_URL = 'https://upet.adaptable.app';

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

        // Do I need to create a userId here?

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
    <div className='signup-page'>
        <div className='signup-title'>
        <h3>Sign Up Page</h3>
        </div>
        <form onSubmit = {handleSignUpsubmit}>
        <div className='signup-form'>
            <div className='signup-form-pt1'>
            <div className='signup-form-email'>
                <div>
                <label>Email</label>
                </div>
                <div>
                <input type ="email" name ="email" value = {email} 
                onChange={(e)=> setEmail(e.target.value)}/>
                </div>
            </div>
            <div className='signup-form-password'>
                <div>
                <label>Password</label>
                </div>
                <div>
                <input type ="password" name ="password" value = {password} 
                onChange={(e)=> setPassword(e.target.value)}/>
                </div>
            </div>
            <div className='signup-form-username'>
                <div>
                <label>Username</label>
                </div>
                <div>
                <input type ="text" name ="name" value = {name} 
                onChange={(e)=> setName(e.target.value)}/>
                </div>
            </div>
            <div className='signup-form-phone'>
                <div>
                <label>Phone number</label>
                </div>
                <div>
                <input type ="number" name ="phoneNumber" value = {phoneNumber} 
                onChange={(e)=> setPhoneNumber(e.target.value)}/>
                </div>
            </div>
            </div>
            <div className='signup-form-pt2'>
            <div className='signup-form-country'>
                <div>
                <label>Country</label>
                </div>
                <div>
                <input type ="text" name ="country" value = {country} 
                onChange={(e)=> setCountry(e.target.value)}/>
                </div>
            </div>
            <div className='signup-form-city'>
                <div>
                <label>City</label>
                </div>
                <div>
                <input type ="text" name ="city" value = {city} 
                onChange={(e)=> setCity(e.target.value)}/>
                </div>
            </div>
            <div className='signup-form-address'>
                <div>
                <label>Address</label>
                </div>
                <div>
                <input type ="text" name ="address" value = {address} 
                onChange={(e)=> setAddress(e.target.value)}/>
                </div>
            </div>
            <div className='signup-form-nrpets'>
                <div>
                <label>Numbers of Pets</label>
                </div>
                <div>
                <input type ="number" name ="numberOfPets" value = {numberOfPets} 
                onChange={(e)=> setNumberOfPets(e.target.value)}/>
                </div>
            </div>
            </div>
            </div>
            <div className='signup-button'>
                <button className='signup-form-button' type="submit">Sign Up</button>
            </div>
            {error && <p>{error}</p>}
        </form>
    </div>
  )
}

export default SignUpPage;