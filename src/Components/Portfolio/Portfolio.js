import React from 'react';
import Tutors from '../../Images/tutors.PNG';
import food from '../../Images/food.PNG';
import transportation from '../../Images/transportation.PNG';
import football from '../../Images/football.PNG';
import slider from '../../Images/slider.PNG';
import './Portfolio.css';
import { Fade, Bounce, Flip, Hinge, JackInTheBox, Roll, Rotate, Slide } from "react-awesome-reveal";

const Portfolio = () => {
    return (
    <div>
       <Slide>
      <h1 className='text'>My Portfolio</h1>
      <div className="portfolio">
        <div className="dflex m-5 p-5 inline">
            <div className="col-xl-4 col-lg-6 mb-4 design">
                <div className="carditem text-center">
                    <div className="card">
                        <img className="card-img-top rounded shadow pb-2" src={Tutors} alt="Card  cap" />
                        <div className="card-body">
                        <h5 className="card-title">Tutors</h5>
                        <p className="card-text">This is a website for a tutors selector. If any students want to select the teacher through
                        this site he/she can know about the teachers, their services and also can buy packages via the
                        online payment system....</p>
                        </div>
                    </div>
                    <div className="linkArea text-center dflex align-items-center justify-content-between">
                        <button className="px-5 rounded"><a href="https://tutors-4cf80.web.app/" target="_blank" rel="noreferrer">Live</a></button>
                        <button className="px-5 rounded"><a href="https://github.com/Pronoy568/Tutors-Client" target="_blank" rel="noreferrer">Github</a></button>
                    </div>
                </div>
            </div>
            <div className="col-xl-4 col-lg-6 mb-4 design">
                <div className="carditem text-center">
                    <div className="card">
                        <img className="card-img-top rounded shadow pb-2" src={food} alt="Card  cap" />
                        <div className="card-body">
                        <h5 className="card-title">Tasty-food</h5>
                        <p className="card-text">This website where anyone can order their favorite food from the menu and enjoy the most delicious food...</p>
                        </div>
                    </div>
                    <div className="linkArea text-center dflex align-items-center justify-content-between">
                        <button className="px-5 rounded"><a href="https://tasty-food-c223f.web.app/" target="_blank" rel="noreferrer">Live</a></button>
                        <button className="px-5 rounded"><a href="https://github.com/Pronoy568/Tasty-Food-Client" target="_blank" rel="noreferrer">Github</a></button>
                    </div>
                </div>
            </div>
        </div>
        <div className="dflex m-5 p-5">
            <div className="col-xl-4 col-lg-6 mb-4 design">
                <div className="carditem text-center">
                    <div className="card">
                        <img className="card-img-top rounded shadow pb-2" src={transportation} alt="Card  cap" />
                        <div className="card-body">
                        <h5 className="card-title">Transportation</h5>
                        <p className="card-text">This website is a transportation selector website. On this website, you can select a vehicle to visit the places. Here are more facilities for a user...</p>
                        </div>
                    </div>
                    <div className="linkArea text-center dflex align-items-center justify-content-between">
                        <button className="px-5 rounded"><a href="https://transportation-cdf0e.web.app/" target="_blank" rel="noreferrer">Live</a></button>
                        <button className="px-5 rounded"><a href="https://github.com/Pronoy568/Transportation" target="_blank" rel="noreferrer">Github</a></button>
                    </div>
                </div>
            </div>
            <div className="col-xl-4 col-lg-6 mb-4 design">
                <div className="carditem text-center">
                    <div className="card">
                        <img className="card-img-top rounded shadow pb-2" src={football} alt="Card  cap" />
                        <div className="card-body">
                        <h5 className="card-title">Football</h5>
                        <p className="card-text">It is a football club website. On this website, you can  see the details information football club...</p>
                        </div>
                    </div>
                    <div className="linkArea text-center dflex align-items-center justify-content-between">
                        <button className="px-5 rounded"><a href="https://determined-curran-8160c5.netlify.app/" target="_blank" rel="noreferrer">Live</a></button>
                        <button className="px-5 rounded"><a href="https://github.com/Pronoy568/Football" target="_blank" rel="noreferrer">Github</a></button>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-xl-4 col-lg-6 mb-4 style-5th">
            <div className="carditem text-center">
            <div className="card">
                <img className="card-img-top rounded shadow pb-2" src={slider} alt="Card  cap" />
                <div className="card-body">
                <h5 className="card-title">Fancy-slider</h5>
                <p className="card-text">You can search anything and these items can be slide show in this website...</p>
                </div>
            </div>
            <div className="linkArea text-center dflex align-items-center justify-content-between">
                <button className="px-5 rounded"><a href="https://pronoy568.github.io/Fancy-slider/" target="_blank" rel="noreferrer">Live</a></button>
                <button className="px-5 rounded"><a href="https://github.com/Pronoy568/Fancy-slider" target="_blank" rel="noreferrer">Github</a></button>
            </div>
            </div>
        </div>
        <div className="portfolio-footer"></div>
      </div>
      </Slide> 
    </div>
    );
};

export default Portfolio;