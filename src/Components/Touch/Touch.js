import React from 'react';
import Linkedin from '../../Images/Linkedin.png';
import Github from '../../Images/github.png';
import './Touch.css';
import { Fade, Bounce, Flip, Hinge, JackInTheBox, Roll, Rotate, Slide } from "react-awesome-reveal";

const Touch = () => {
    return (
        <div className="touch">
            <Rotate>
            <h1>Get In Touch</h1>
            <div className="d-flex touch-container">
                <div>
                    <a href="https://www.linkedin.com/in/pronoy-das-6616901ba/" target="_blank">
                        <div className="pm"> <img className="linkedin" src={Linkedin} /> </div>
                    </a>
                </div>
                <div >
                    <a href="https://github.com/Pronoy568" target="_blank">
                        <div className="pm"> <img className="github" src={Github} /> </div>
                    </a>
                </div>
                <div className="mail">
                        <div className="box pm">
                            <div className="gmail">
                                <h5 className="mail-text">pronoydas870@gmail.com</h5>
                            </div>
                        </div>
                </div>
            </div>
            </Rotate>
        </div>
    );
};

export default Touch;