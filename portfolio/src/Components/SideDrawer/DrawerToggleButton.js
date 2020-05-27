import React from 'react';
import './DrawerToggleButton.css';




const drawerToggleButton = props => {
    
    let toggleClasses = 'toggle-button'
    if(props.isOpen){
        console.log('ok');
        toggleClasses = 'toggle-button open';
    }

    return(
    <button className= {toggleClasses} onClick = {props.click}>
        <div className="toggle-button_line" />
        <div className="toggle-button_line" />
        <div className="toggle-button_line" />
    </button>
    );   
};

export default drawerToggleButton;