import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './UserPage.css';
import '../App.css';

const BACKEND_URL = 'https://upet.adaptable.app';


function UserPage() {

  const{userId} = useParams();
  const [userData, setUserData] = useState(null);

    useEffect(()=>{
        axios.get(`${BACKEND_URL}/users/${userId}`).then((response)=>{
            setUserData(response.data);
        })

        .catch((error)=> console.log(error));

    }, []);

  return (
    <div className="user-page">
      <div className="user-page-1">
        <div className="user-page-content">
          <h2 className="user-title">User Information</h2>
          {userData ? (
            <div className="user-info">
              <div className="user-info-grid">
                <p className="user-name"> Name: <div className="u-bold">{userData.name}</div></p>
                <p className="user-email"> Email: <div className="u-bold">{userData.email}</div></p>
                <p className="user-phone"> Phone: <div className="u-bold">{userData.phoneNumber}</div></p>
                <p className="user-country"> Country: <div className="u-bold">{userData.country}</div></p>
                <p className="user-city"> City: <div className="u-bold">{userData.city}</div></p>
                <p className="user-address"> Address: <div className="u-bold">{userData.address}</div></p>
              </div>
            </div>
          ) : (
            <p>Loading user data...</p>
          )}
        </div>
      </div>
    </div>
  );
};


export default UserPage;
