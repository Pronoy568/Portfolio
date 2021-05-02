import React from 'react';
import pic from '../../Images/received_354544171944978.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
import './Home.css';
import Portfolio from '../Portfolio/Portfolio';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
    <div>
        <div className="home-part">
            <div>
                <img src={pic} />
                <h1>Hi , I am Pronoy Das.</h1>
                <h5>I am a web developer. I can provide clean code. I am also <br/>hardworking and dedicated person .</h5>
            </div>
            <div className="socialsIcons">
                <ul className="pl-0">
                <li>
                    <a href="https://www.linkedin.com/in/pronoy-das-6616901ba/" target="_blank">
                    <div> <FontAwesomeIcon icon={faLinkedinIn} /> </div>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/Pronoy568" target="_blank">
                    <div> <FontAwesomeIcon icon={faGithub} /> </div>
                    </a>
                </li>
                <li>
                    <a href="https://www.facebook.com/pronoy.das.58511/" target="_blank">
                    <div>  <FontAwesomeIcon icon={faFacebookF} /> </div>
                    </a>
                </li>
                </ul>
            </div>
        </div>
        <div>
            <Portfolio></Portfolio>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    </div>
    );
};

export default Home;