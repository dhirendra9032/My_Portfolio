import React from 'react'

import { FaLinkedin, FaGithubSquare } from "react-icons/fa";


import "./home.css"

const Detail = () => {
    return (
        <div className="datail-section">
            <div className="img-holder">

            </div>
            <h1>Hi! Welcome To My Portfolio</h1>
            <h2>I'M DHIRENDRA KUMAR</h2>
            <div className="slider">
                Full-Stack Web Developer
            </div>
            <div className="social-media-contact-link"><a href="https://github.com/dhirendra9032" target="_parent" ><FaGithubSquare className="git"/></a>
            <a href="https://www.linkedin.com/in/dhirendra-kumar-9b6986148/" target="_parent"><FaLinkedin className="linkedin"/></a>
            </div>
            
        </div>
    )
}

export default Detail
