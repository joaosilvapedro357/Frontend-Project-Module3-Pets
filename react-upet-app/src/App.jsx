import { useState } from 'react';
import './App.css';
import { Routes, Route, Navigate } from "react-router-dom";

import HomePage from './pages/HomePage.jsx';
import SignUpPage from './pages/SignUpPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import PetProfilePage from "./pages/PetProfilePage.jsx";
import PetsPage from './pages/PetsPage.jsx';
import EditPetPage from './pages/EditPetPage.jsx';
import CreatePetPage from './pages/CreatePetPage.jsx';
import AdoptPage from './pages/AdoptPage.jsx';
import UserPage from './pages/UserPage.jsx';
import Navbar from './Components/Navbar.jsx';
import Sidebar from './Components/Sidebar.jsx';
import AddPetMenu from './Components/AddPetMenu.jsx';
import IsPrivate from './Components/IsPrivate.jsx';

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
