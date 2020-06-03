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

                <div className = "nav_logo"><a onClick = {props.scrollTop} href="/">JO</a></div>
                <div className="spacer"> </div>
                <div className = "nav_items">
                      <Link
                      activeClass="active"
                      to="stack"
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration={500}
                      >
                      <li><a>Skills</a></li>
                      </Link>     
                 
                     <Link
                        activeClass="active"
                        to="projects"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                        >
                        <li><a>Projects</a></li>
                        </Link>
                    
                      
                        <Link
                        activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                        >
                        <li><a>Contact Me</a></li>
                        </Link>
                     
                      
                        <Link
                        activeClass="active"
                        to="resume"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                        >
                        <li><a>Resume</a></li>
                        </Link>
                  
                </div>
            </nav>
          </header>

      
         
        );

 
export default portfolionav;