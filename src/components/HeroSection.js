import React from 'react';
import {Link} from 'react-router-dom'
import '../css/herosection.css';


function HeroSection() {
    return (
        <>
        <div className="hero-container"> 
            <h1> Welcome to Fancy Cuts </h1>
            <Link to='/ContactUs' className="heroButton">
                {/* still messing around w/ react, i guess it doesnt have to be a button. cool */}
                <p className="heroButton"> Schedule an Appointment </p>
            </Link>
        </div>
        </>
    )
}

 export default HeroSection
