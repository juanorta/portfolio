import React from 'react';
import { FaArrowCircleUp, FaChevronDown } from 'react-icons/fa';
import './ScrollNext.css';
import { Link, animateScroll as scroll } from 'react-scroll';

const ScrollNext = () => {
	//will scroll to Skills section of page
	return (
		<Link
			activeClass="active"
			to="stack"
			spy={true}
			smooth={true}
			offset={0}
			duration={500}
		>
			<FaChevronDown className="scrollNext" />
		</Link>
	);
};

export default ScrollNext;
