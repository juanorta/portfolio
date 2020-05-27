import React from 'react';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './portfolionav.css'
import 'bootstrap/dist/css/bootstrap.min.css';

      const portfolionav = props => (
        <header className = "navbar">
            <nav className = "navigation">
                <div className = "toggle">
                    <DrawerToggleButton 
                    click = {props.drawerClickHandler}
                    isOpen = {props.open}
                    />
                    
                </div>
                <div className = "nav_logo"><a href="/">Juan Orta</a></div>
                <div className="spacer"> </div>
                <div className = "nav_items">
                  <ul>
                        <li> <a href="/"> Stack</a></li> 
                        <li> <a href="/"> Projects</a></li>
                        <li> <a href="/"> Contact Me</a></li>
                        <li> <a href="/"> Resume</a></li>
                  </ul>
                </div>
            </nav>
          </header>
        );

 
export default portfolionav;