import './navigation.css';
import React, { Component } from 'react';
import Logo from './new_logo.svg';
import SideDrawer from './sideDrawer';

class Nav extends Component{
    state = {
        isClicked: false,
    };

    handleClick = () => {
        this.setState((prevState) => {
            return {isClicked: !prevState.isClicked }
        })
    }

    handleBackdropClick = () => {
        this.setState({isClicked: false});
    };

    render(){

        let backdrop;
        if(this.state.isClicked){
            backdrop = <div className='backdrop' onClick={this.handleBackdropClick}></div>;
        }

        return (
            <div className="wrapper">
                <SideDrawer show={this.state.isClicked} />
                {backdrop}
            	<header>
            	    <a href="#" className='logo'>
                        <img className='logo' src={Logo} alt='logo'></img>
                    </a>
            	    <nav>
            	        <ul className="nav-list">
            	            <li className="nav-list-item">
                                <a href="#">Services</a>
                            </li>
            	            <li className="nav-list-item">
                                <a href="#">Projects</a>
                            </li>
            	            <li className="nav-list-item">
                                <a href="#">About</a>
                            </li>
            	        </ul>
            	    </nav>
            	    <a href="#" className='login_btn'>
                        <button>Login</button>
                    </a>
            	    <button className="ham-hide" onClick={this.handleClick}>
            	        <div className="ham-butt">
            	            <div className="ham-line"></div>
            	            <div className="ham-line"></div>
            	            <div className="ham-line"></div>
            	        </div>
            	    </button>
            	</header>
            </div>

        )
    };
}

export default Nav;