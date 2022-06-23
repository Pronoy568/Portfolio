import React from 'react';
import picture from '../../Images/me.jpeg';
import Footer from '../Footer/Footer';
import './About.css';
import { Fade, Bounce, Flip, Hinge, JackInTheBox, Roll, Rotate, Slide } from "react-awesome-reveal";
import ParticlesBg from 'particles-bg';

const About = () => {
    return (
  <div>
      <div className="container">
        <div className="row ">
          <div className="col">
            <div className="row  pt-5 d-flex align-items-center about-area">
              <div className="col-md-6">
                <Roll>
                <div>
                  <h1>Hi, I am Pronoy Das</h1>
                  <div className="about-text">
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
                </Roll>
              </div>         
              <div className="col-md-6">
                <div className="photo">
                  <JackInTheBox>
                  <img className="w-100 m-auto" src={picture} alt="Pronoy Das" />
                  </JackInTheBox>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ParticlesBg num={180} type="fountain" bg={true} />
      <div className="about-footer">
        <Footer></Footer>
      </div>
  </div>
    );
};

export default About;