import React from 'react';
import pic from '../../Images/received_354544171944978.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
import './Home.css';
import Portfolio from '../Portfolio/Portfolio';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Skills from '../Skills/Skills';
import HomeBlog from '../Blog/HomeBlog';
import { Fade, Bounce, Flip, Hinge, JackInTheBox, Roll, Rotate, Slide } from "react-awesome-reveal";
import Touch from '../Touch/Touch';
import ParticlesBg from 'particles-bg';

const Home = () => {
    return (
    <div>
        <div className="home-part">
            <div>
                    <img src={pic} />
                <Slide>
                   <h1>Hi , I am Pronoy Das.</h1>           
                   <h5>I am a web developer. I can provide clean code. I am also <br/>hardworking and dedicated person .</h5>    
                </Slide>   
            </div>
            <div className="socialsIcons">
                <ul className="pl-0">
                <Fade cascade>   
                <li>
                    <a href="https://www.linkedin.com/in/pronoy-das-6616901ba/" target="_blank">
                    <div> <FontAwesomeIcon icon={faLinkedinIn} /> </div>
                    </a>
                </li>
                </Fade>
                <Fade delay={1000}>  
                <li>
                    <a href="https://github.com/Pronoy568" target="_blank">
                    <div> <FontAwesomeIcon icon={faGithub} /> </div>
                    </a>
                </li>
                </Fade>
                <Fade delay={2000}> 
                <li>
                    <a href="https://www.facebook.com/pronoy.das.58511/" target="_blank">
                    <div>  <FontAwesomeIcon icon={faFacebookF} /> </div>
                    </a>
                </li>
                </Fade>
                </ul>
            </div>
            <div className="particles-bg">
                <ParticlesBg num={180} type="circle" bg={true}/>
            </div>
        </div>
        <div>
            <div className="home-skill">
                <Skills></Skills>
            </div>
            <Portfolio></Portfolio>
            <HomeBlog></HomeBlog>
            <Touch></Touch>    
            <Contact></Contact>
            <Footer></Footer>
        </div>
    </div>
    );
};

export default Home;