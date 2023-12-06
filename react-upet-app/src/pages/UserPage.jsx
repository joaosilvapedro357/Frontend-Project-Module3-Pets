import React from 'react';
import LoginPage from './LoginPage';
import {useContext, useState} from 'react';
import { AuthContext } from '../Context/auth.context';
import { useNavigate } from 'react-router-dom';

function UserPage() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const navigate = useNavigate();

  return (
    <div>
      <h1>UserPage</h1>
      <p>email: ${email}</p>
      <p>password: ${password}</p>
      <p>name: ${name}</p>
    </div>
  )
}

export default UserPage;