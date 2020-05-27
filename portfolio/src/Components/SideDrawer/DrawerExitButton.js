import React from 'react';
import './DrawerExitButton.css';

const drawerExitButton = props => (
    <button className="exit-button" onClick = {props.click}>
        <div className = "x">X</div>
    </button>    
);

export default drawerExitButton;