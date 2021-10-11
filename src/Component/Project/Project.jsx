import React from 'react'
import Navbar from '../Navbar/Navbar'
import "./project.css"
import groww from "../Project/groww.png"
import trivago from "../Project/trivago.png"
import {FaHtml5,FaCss3,FaDatabase,FaGithub,FaLink,FaReact} from "react-icons/fa";

const Project = () => {
    return (
        <>
            <Navbar/>
            <div class="main-conatiner">
                <h1>Projects</h1>
            </div>
            
            <div class="project-container">
              <div class="project-detail">
                  <img src={groww} alt="groww"/>
                  <h3>Groww : Groww is an online investment platform that allows investors to invest in mutual funds and stocks.</h3>
                  <p>We build this project in Masai School during construct week withing a week. This was the collborative project of three team member including me. <br/>User can register and can invest in Mutual funds, Stocks and Gold. User Can also search for US Stockes and invest. </p>
                  <div className="tech"><FaHtml5/><FaCss3/><FaDatabase/></div>
                  <div className="links">
                      <div><span><FaGithub/> <a href="https://github.com/dhirendra9032/TrivagoClone" target="_parent">Github</a></span></div>
                      <div><span><FaLink/><a href="https://github.com/santoshmcode/groww-clonet" target="_parent">Link</a></span></div>
                  </div>
              </div>


              <div class="project-detail">
                  <img src={trivago} alt="trivago"/>
                  <h3>Trivago : trivago is a hotel search with an extensive price comparison.</h3>
                  <p>We build this project in Masai School during construct week withing a week. This was the collborative project of four team member including me. <br/>User can register/login and can search hotel for any location and campaire price of different wesites</p>
                  <div className="tech"><FaHtml5/><FaCss3/><FaDatabase/><FaReact/></div>
                  <div className="links">
                      <div><span><FaGithub/> <a href="https://github.com/santoshmcode/groww-clone" target="_parent">Github</a></span></div>
                      <div><span><FaLink/><a href="www" target="_parent">Link</a></span></div>
                  </div>
              </div>
             
            </div>
            
        </>
    )
}

export {Project}

