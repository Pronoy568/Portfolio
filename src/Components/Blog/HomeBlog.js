import React from 'react';
import './Blog.css';
import js from '../../Images/js.png';
import es6 from '../../Images/es6.jpeg';
import react from '../../Images/React.png';
import { Fade, Bounce, Flip, Hinge, JackInTheBox, Roll, Rotate, Slide } from "react-awesome-reveal";

const HomeBlog = () => {
    return (
    <div>
        <div className="M-blog blog">
            <h1 className="B-text">My Blogs</h1>
            <div className="flex">
                <Bounce>
                <div className="card width m-5">
                        <img src={js} class="card-img" alt="img"/>
                            <div class="card-body">
                                <h5 class="card-title">JavaScript</h5>
                                <p class="card-text">10 important basic topics in JavaScript...</p>
                                <a href="https://medium.com/@pronoydas870/10-important-basic-topics-in-javascript-4d9547e99c07" class="btn btn-primary More" target="_blank">Details</a>
                            </div>
                </div>
                </Bounce>
                <Bounce>
                <div className="card width m-5">
                        <img src={es6} class="card-img" alt="img"/>
                            <div class="card-body">
                                <h5 class="card-title">ES6 Features</h5>
                                <p class="card-text">10 important topics in ES6 Features...</p>
                                <a href="https://pronoydas870.medium.com/10-important-topics-in-es6-features-640688c2230f" class="btn btn-primary More" target="_blank">Details</a>
                            </div>
                </div>
                </Bounce>
                <Bounce>
                <div className="card width m-5">
                        <img src={react} class="card-img" alt="img"/>
                            <div class="card-body">
                                <h5 class="card-title">React</h5>
                                <p class="card-text">10 Important Topics in React...</p>
                                <a href="https://medium.com/@pronoydas870/10-important-basic-topics-in-javascript-4d9547e99c07" class="btn btn-primary More" target="_blank">Details</a>
                            </div>
                </div>
                </Bounce>
            </div>
            <Rotate>
            <div>
               <a href="https://pronoydas.netlify.app/blog"><button class="B-text More-B">More Blogs</button></a> 
            </div>
            </Rotate>
        </div>
    </div>
    );
};

export default HomeBlog;