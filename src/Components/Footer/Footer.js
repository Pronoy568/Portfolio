import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <p>© {new Date().getFullYear()}
              All rights reserved. Created by
              <a href="https://www.facebook.com/pronoy.das.58511/" target="_blank"> Pronoy Das</a>.
            </p>
        </div>
    );
};

export default Footer;