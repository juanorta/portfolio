 import React from 'react';
 import './SideDrawer.css';

 const sideDrawer = props => (
     <nav className="side-drawer">
         <ul>
             <li><a href="/"> Stack</a></li>
             <li><a href="/"> Projects</a></li>
             <li><a href="/"> Contact Me</a></li>
             <li><a href="/"> Resume</a></li>
         </ul>
     </nav>
 );

 export default sideDrawer;
