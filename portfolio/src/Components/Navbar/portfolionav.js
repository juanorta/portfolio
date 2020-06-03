import React from 'react';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './portfolionav.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, animateScroll as scroll } from "react-scroll";

      const portfolionav = props => (
        <header className = "navbar">
            <nav className = "navigation">
                <div className = "toggle">
                    <DrawerToggleButton 
                    click = {props.drawerClickHandler}
                    isOpen = {props.open}
                    />                    
                   </div>

                <div className = "nav_logo"><a href="/">JO</a></div>
                <div className="spacer"> </div>
                <div className = "nav_items">
                  <ul>
                    <li>
                      <Link
                      activeClass="active"
                      to="stack"
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration={500}
                      >
                      <a href="/">Skills</a>
                      </Link>     
                    </li>

                      <li>
                        <Link
                        activeClass="active"
                        to="projects"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                        >
                        <a href="/">Projects</a>
                        </Link>
                      </li>

                      <li>
                        <Link
                        activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                        >
                        <a href="/">Contact Me</a>
                        </Link>
                      </li>
                      <li> <a href="/"> Resume</a></li>
                  </ul>
                </div>
            </nav>
          </header>

      
         
        );

 
export default portfolionav;