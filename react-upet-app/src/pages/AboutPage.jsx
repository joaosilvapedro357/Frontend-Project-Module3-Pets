import { useState, useEffect, navigate } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import './AdoptPage.css';
import './AboutPage.css';


function AboutPage() {

return ( 
      <div className="about-page">
            <div className="about-page-content">
                  <div className="adopt-header">
                        <div className="about-info">
                            <div className="about-title-apamg">
                              <h1 className="about-title"> Hello, we are UPet.</h1>
                              <div>
                              <img className="adopt-apamg-image" src="/images/apamg-png.webp" />
                            </div>
                        </div>
                              <p className="about-descr"> Welcome to our platform dedicated to the management of your pets' information and helping pets in need. We understand that visiting the vet and other pet services can often be a challenge, as pet owners may not always have immediate access to their pets' information and medical details. 
                              <br></br>
                              <br></br>Our platform addresses this concern by providing a comprehensive solution, always striving to improve the quality of life for both pet owners and their beloved companions.
                              With our service, your pet's medical records can effortlessly be managed and updated after every vet visit for example, ensuring that vital details and other information are always updated and ready for prompt and effective care.
                              <br></br>
                              <br></br>We support APAMG, a non-profit Animal Protection Association, located in Marinha Grande (Leiria, Portugal), founded in 2004. Your help can contribute to the well-being of animals in need, making a positive impact in our community. Thank you for being part of our shared vision for a world where the welfare of pets is a top priority.
                              <br></br>
                              <br></br>It's 'all about pet friends'!
                              </p>
                        </div>
                  </div>
            </div>
      </div>
  ) 
}

export default AboutPage;