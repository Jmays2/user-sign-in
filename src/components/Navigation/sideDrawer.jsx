import React, {Component} from 'react';
import './sideDrawer.css';


const SideDrawer = props => {
  let drawerClass = ['side-drawer'];
  if(props.show){
    drawerClass = 'side-drawer open';
  }

  return (
    <nav className={drawerClass}>
        <ul>
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
  )
};

export default SideDrawer;
