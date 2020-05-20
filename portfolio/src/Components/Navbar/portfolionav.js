import React, { Component } from 'react';
import DrawerToggleButton from '../../DrawerToggleButton';
import './portfolionav.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
  } from 'reactstrap';

class PortfolioNav extends Component {
    state = {  }
    render() { 

      

        return ( 
            
        <header className = "navbar">
            <Navbar className = "navigation">
                <div>
                    <DrawerToggleButton />
                </div>
                <div className = "nav_logo"><a href="/">JO</a></div>
                <div className = "nav_items">
                  <ul>
                        <li> <a href="/"> Stack</a></li> 
                        <li> <a href="/"> Projects</a></li>
                        <li> <a href="/"> Contact Me</a></li>
                        <li> <a href="/"> Resume</a></li>
                  </ul>
                </div>
            </Navbar>
          </header>
        );
    }
}
 
export default PortfolioNav;