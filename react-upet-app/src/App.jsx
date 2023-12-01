import { useState } from 'react';
import './App.css';
import { Routes, Route, Navigate } from "react-router-dom";

import HomePage from './pages/HomePage';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import PetsPage from './pages/ProfilesPage';
import PetPage from './pages/PetPage';
import EditPetPage from './pages/EditPetPage';
import CreatePetPage from './pages/CreatePetPage';
import AdoptPage from './pages/AdoptPage';
import UserPage from './pages/UserPage';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';



function App() {
  
  return (
      <div>
        <Navbar/>
         <Routes>
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/pets" element={<PetsPage />} />
          <Route path="/pets/:petId" element={<PetPage />} />
          <Route path="/pets/:petId/edit" element={<EditPetPage />} />
          <Route path="/pets/add" element={<CreatePetPage />} />
          <Route path="/adopt" element={<AdoptPage />} />
          <Route path="/user" element={<UserPage />} />
        </Routes>
        
      </div>
    
  )
}

export default App;
