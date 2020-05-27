 import React from 'react';
 import './SideDrawer.css';
 import DrawerExitButton from '../SideDrawer/DrawerExitButton';
import DrawerToggleButton from './DrawerToggleButton';
 const sideDrawer = props => {
    
    let drawerClasses = 'side-drawer';
    if(props.show){
        drawerClasses = 'side-drawer open';
    }

    return(
        <nav className = {drawerClasses}>
        
         <ul>
             <li><a href="/"> Stack</a></li>
             <li><a href="/"> Projects</a></li>
             <li><a href="/"> Contact Me</a></li>
             <li><a href="/"> Resume</a></li>
         </ul>
     </nav>
    );
 };

 export default sideDrawer;
