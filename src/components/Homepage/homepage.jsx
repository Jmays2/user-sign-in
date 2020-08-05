import React, {Component} from 'react';
import './homepage.css';
import Logo from './company_logo.svg';

function Homepage(props) {
    return (
        <div className="page-wrapper">
            <div className="main-content">
                <img src={Logo} alt='company logo' className='company-logo'></img>
                <div className="info-card 1"></div>
                <div className="info-card 2"></div>
                <div className="info-card 3"></div>
                <div className="info-card 4"></div>
            </div>
        </div>
    );
}

export default Homepage;