import {useContext, useState} from 'react';
import { AuthContext } from '../Context/auth.context';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const BACKEND_URL = 'https://upet.adaptable.app';

function LoginPage() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [user, setUser] = useState("");

    const navigate = useNavigate();

    // Use shared functions provided by AuthContext
    const {storeToken, authenticateUser} = useContext(AuthContext);

    const handleLoginSubmit = (e) =>{
        e.preventDefault();

        const requestBody = {email, password};

        axios.post(`${BACKEND_URL}/auth/login`, requestBody)
            .then((response)=>{
                storeToken(response.data.authToken);
                authenticateUser();
                console.log(`You logged in with ${email}`);
                navigate('/');
            })
            .catch((error)=>{
                const errorDescritption = error.response.data.message;
                setError(errorDescritption);
            })
    }

  return (
    <div>
        <h3>LoginPage</h3>
        <form onSubmit = {handleLoginSubmit}>
            <div>
                <label>Email</label>
                <input type ="email" name ="email" value = {email} onChange={(e)=> 
                  setEmail(e.target.value)}/>
            </div>
            <div>
                <label>Password</label>
                <input type ="password" name ="password" value = {password} 
                onChange={(e)=> setPassword(e.target.value)}/>
            </div>
            <div>
                <button type="submit">Login</button>
            </div>
            {error && <p>{error}</p>}
        </form>
    </div>
  )
}

export default LoginPage;