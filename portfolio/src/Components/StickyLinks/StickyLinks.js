import React from 'react';
import './StickyLinks.css';
import {FaGithub, FaLinkedinIn,FaEnvelope} from 'react-icons/fa';

const StickyLinks = () => {


    return(
        <div class = "left-sidebar">
            <ul className = "collection right-align">
                <a href="https://www.github.com/juanorta" target="_blank">
                    <li className = "collection-item git">
                        <FaGithub className = "github">
                        </FaGithub>
                    </li>
                </a>
                
                
                <a href="https://www.linkedin.com/in/juan-orta-833216185/" target="_blank">
                    <li className = "collection-item linked">
                        <FaLinkedinIn className = "linkedin">
                            </FaLinkedinIn>
                    </li>
                </a>
                
                
                <li className = "collection-item google">
                    <FaEnvelope className = "email">
                        </FaEnvelope>
                        <p className="gmail">1juanorta@gmail.com</p></li>
            </ul>
        </div>
    );  
}

export default StickyLinks;