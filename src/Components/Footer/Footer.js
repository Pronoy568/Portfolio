import React from 'react';
import './Footer.css';
import { Fade } from "react-awesome-reveal";

const Footer = () => {
    return (
        <div className="footer">
            <Fade>
            <p>© {new Date().getFullYear()}
              All rights reserved. Created by
                <a href="https://www.facebook.com/pronoy.das.58511/" target="_blank"> Pronoy Das</a>.
            </p>
            </Fade>
        </div>
    );
};

export default Footer;