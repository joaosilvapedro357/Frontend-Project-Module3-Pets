import { useState } from 'react';
import './App.css';
import { Routes, Route, Navigate } from "react-router-dom";

import HomePage from './pages/HomePage';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import ProfilesPage from './pages/ProfilesPage';
import PetPage from './pages/PetPage';
import EditPetPage from './pages/EditPetPage';
import CreatePetPage from './pages/CreatePetPage';
import AdoptPage from './pages/AdoptPage';
import UserPage from './pages/UserPage';



function App() {
  
  return (
      <div>
         <Routes>
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/profiles" element={<ProfilesPage />} />
          <Route path="/profiles/:petId" element={<PetPage />} />
          <Route path="/profiles/:petId/edit" element={<EditPetPage />} />
          <Route path="/profiles/add" element={<CreatePetPage />} />
          <Route path="/adopt" element={<AdoptPage />} />
          <Route path="/user" element={<UserPage />} />
        </Routes>
      </div>
    
  )
}

export default App;
