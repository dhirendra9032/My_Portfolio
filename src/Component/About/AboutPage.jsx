import React from 'react'
import Navbar from "../Navbar/Navbar";
import about from "../About/about.png"
import html from "../About/html.png"
import {images} from "./images"

import "./about.css"

const AboutPage = () => {
    return (
        <>
            <Navbar />
            <div class="main-container">
                <div className="about-section">

                    <div className="image"><img src={about} alt="aboutimage" /></div>
                    <div className="detail">
                        <div class="heading">About Me</div>
                        <div>I am an Aspiring full-stack web developer learning MERN Stack in Masai school. I am passionate about coding and caplable of writing efficient code using MERN Stack. Ambitious to work and collaborated with others dedicated developers <br/>
                        Eager to take up a responsible role within an exciting and inpiring organization, and want to deliver products that offer a great user experience. 
                        </div>
                    </div>

                </div>
              
            </div>
            <div class="front-end-heading">Front-End</div>
            <div className="frontEnd-grid">
                <div><img src={html} alt="html"/></div>
                <div><img src={images.css} alt="css"/></div>
                <div><img src={images.javascript} alt="html"/></div>
                <div><img src={images.react} alt="html"/></div>
                <div><img src={images.redux} alt="html"/></div>
                <div><img src={images.bootstrap} alt="html"/></div>
                <div><img src={images.npm} alt="html"/></div>
            </div>
            <div class="front-end-heading">Back-End-End</div>
            <div className="frontEnd-grid">
                <div><img src={images.github} alt="html"/></div>
                <div><img src={images.nodejs} alt="html"/></div>
                <div><img src={images.express} alt="html"/></div>
                <div><img src={images.mongodb} alt="html"/></div>
               
            </div>
        </>
    )
}

export default AboutPage
