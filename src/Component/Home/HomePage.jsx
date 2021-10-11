import React from 'react'
import Navbar from '../Navbar/Navbar'
import "./home.css"
import "../Navbar/Navbar.css"
import homelogo from "./homelogo.svg"
import Detail from './Detail'

const Home = () => {
    return (
        <>
        <Navbar/>
        <div className="main-container">
            <div class="detail-container">
            <Detail/>
            </div>
            <div class="avatar">
                <img src={homelogo} alt=""/>
            </div>
            
        </div>
        </>
    )
}

export {Home}
