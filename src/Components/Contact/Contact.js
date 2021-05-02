import React from 'react';
import './Contact.css';


const Contact = () => {
    return (
        <div>
            <section class="contact">
                <div class="middle">
                        <h2>Contact With Me</h2>
                        <hr/>
                </div>
                <div class="contact-box">
                        <form action="">
                            <div class="username">
                            <div class="name">
                                <input type="text" id="name" placeholder="Enter Your Name"/>
                            </div> 
                            <div class="email">
                                <input type="email" id="email" placeholder="Enter Your Email"/>
                            </div>
                            </div>
                            <textarea placeholder="Your Message"name="" id="" cols="30" rows="8"></textarea>
                            <div class="cal">
                                <input type="submit" value="send Message" />
                            </div>
                        </form>
                </div>
            </section>
        </div>
    );
};

export default Contact;