import React from 'react';
import './DrawerToggleButton.css';




const drawerToggleButton = props => {
    
    //passing in a string to a className
    //sideDrawerOpen state will determine which class name is passed
    let toggleClasses = 'toggle-button'
    if(props.isOpen){
        
        toggleClasses = 'toggle-button open';
        
    }
    console.log(toggleClasses);

    return(
    <button className= {toggleClasses} onClick = {props.click}>
        <div className="toggle-button_line top" />
        <div className="toggle-button_line middle-line" />
        <div className="toggle-button_line bottom" />
    </button>
    );   
};

export default drawerToggleButton;