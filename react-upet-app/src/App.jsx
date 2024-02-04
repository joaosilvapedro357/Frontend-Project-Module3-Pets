import { useState } from 'react';
import './App.css';
import { Routes, Route, Navigate, useParams } from "react-router-dom";
import HomePage from './pages/HomePage.jsx';
import SignUpPage from './pages/SignupPage.jsx';
import LoginPage from './pages/LoginPage'; //'./pages/LoginPage.jsx'
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
import AboutPage from './pages/AboutPage.jsx';

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
          <Route path="/:userId/pets/:petId" element={<IsPrivate><PetProfilePage/></IsPrivate>} />
          <Route path="/:userId/pets/:petId/edit" element={<IsPrivate><EditPetPage /></IsPrivate>} />
          <Route path="/:userId/pets/add" element={<IsPrivate><CreatePetPage /></IsPrivate>} />
          <Route path="/:userId/pets" element={<IsPrivate><PetsPage /></IsPrivate>} />
          <Route path="/adopt" element={<AdoptPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/users/:userId" element={<UserPage />}/>
        </Routes>
        </div>
      </div>
  )
}

export default App;
