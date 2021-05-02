import React from 'react';
import picture from '../../Images/me.jpeg';
import Footer from '../Footer/Footer';
import './About.css';

const About = () => {
    return (
  <div>
      <div className="container">
        <div className="row ">
          <div className="col">
            <div className="row  pt-5 d-flex align-items-center about-area">
              <div className="col-md-6">
                <div>
                  <h1>Hi, I am Pronoy Das</h1>
                  <div>
                    <ul>
                      <li><strong>Name</strong>: Pronoy Das</li>
                      <li><strong>Age</strong>: 21 Years</li>
                      <li><strong>Nationality</strong>: Bangladeshi</li>
                      <li><strong>Religion</strong>: Hindu</li>
                      <li><strong>Address</strong>: Dhaka , Bangladesh</li>
                      <li><strong>E-mail</strong>: pronoydas870@gmail.com</li>
                      <li><strong>Phone</strong>: 01929814229</li>
                    </ul>
                    <button className="text-uppercase cv-download-about"> 
                        <a href="https://drive.google.com/file/d/1hqsrD9gx-kNQJfURS1GWkmy-U4s6UnwY/view?usp=sharing" target="_blank"> Download cv</a>
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="photo">
                  <img className="w-100 m-auto" src={picture} alt="Pronoy Das" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-footer">
        <Footer></Footer>
      </div>
  </div>
    );
};

export default About;