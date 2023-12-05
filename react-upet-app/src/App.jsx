import { useState } from 'react';
import './App.css';
import { Routes, Route, Navigate } from "react-router-dom";

import HomePage from './Pages/HomePage';
import SignUpPage from './Pages/SignUpPage';
import LoginPage from './Pages/LoginPage';
import PetProfilePage from "./Pages/PetProfilePage";
import PetsPage from './Pages/PetsPage';
import EditPetPage from './Pages/EditPetPage';
import CreatePetPage from './Pages/CreatePetPage';
import AdoptPage from './Pages/AdoptPage';
import UserPage from './Pages/UserPage';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import AddPetMenu from './Components/addPetMenu';

function App() {
  
  return (
      <div>
        <Navbar/>
         <Routes>
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/pets" element={<PetsPage />} />
          <Route path="/pets/:petId" element={<PetProfilePage/>} />
          <Route path="/pets/:petId/edit" element={<EditPetPage />} />
          <Route path="/pets/add" element={<CreatePetPage />} />
          <Route path="/adopt" element={<AdoptPage />} />
          <Route path="/user" element={<UserPage />} />
        </Routes>
      </div>
  )
}

export default App;
