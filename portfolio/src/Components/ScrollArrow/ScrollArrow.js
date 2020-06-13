import React, { useState } from 'react';
import { FaArrowCircleUp, FaChevronDown } from 'react-icons/fa';
import { Link, animateScroll as scroll } from 'react-scroll';
import './ScrollArrow.css';

const ScrollArrow = () => {
	const [showScroll, setShowScroll] = useState(false);

	const checkScrollTop = () => {
		if (!showScroll && window.pageYOffset > 100) {
			setShowScroll(true);
		} else if (showScroll && window.pageYOffset <= 100) {
			setShowScroll(false);
		}
	};

	const scrollTop = () => {
		scroll.scrollToTop();
	};

	window.addEventListener('scroll', checkScrollTop);

	return (
		<div>
			<FaArrowCircleUp
				className="scrollTop"
				onClick={scrollTop}
				style={{ display: showScroll ? 'flex' : 'none' }}
			/>
		</div>
	);
};

export default ScrollArrow;
