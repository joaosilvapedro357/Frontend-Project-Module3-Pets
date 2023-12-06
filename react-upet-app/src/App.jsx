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
import IsPrivate from './Components/IsPrivate';

function App() {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  return (
      <div>
        <Navbar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
        {isSidebarOpen && <Sidebar />}
        <div className={`content ${isSidebarOpen ? 'shifted' : ''}`}>

         <Routes>
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/pets" element={<IsPrivate><PetsPage /></IsPrivate>} />
          <Route path="/pets/:petId" element={<IsPrivate><PetProfilePage/></IsPrivate>} />
          <Route path="/pets/:petId/edit" element={<IsPrivate><EditPetPage /></IsPrivate>} />
          <Route path="/pets/add" element={<IsPrivate><CreatePetPage /></IsPrivate>} />
          <Route path="/adopt" element={<AdoptPage />} />
          <Route path="/user" element={<UserPage />} />
        </Routes>
        </div>
      </div>
  )
}

export default App;
