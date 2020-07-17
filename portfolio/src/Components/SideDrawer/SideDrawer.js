import React from 'react';
import './SideDrawer.css';
import { Link, animateScroll as scroll } from 'react-scroll';
import DrawerToggleButton from './DrawerToggleButton';

const sideDrawer = (props) => {
	let drawerClasses = 'side-drawer';
	if (props.show) {
		drawerClasses = 'side-drawer open';
	}

	return (
		<nav className={drawerClasses}>
			<ul>
				<li>
					<Link
						onClick={props.sideDrawerClick}
						activeClass="active"
						to="stack"
						spy={true}
						smooth={true}
						offset={0}
						duration={500}
					>
						<a href="/">Skills</a>
					</Link>
				</li>

				<li>
					<Link
						onClick={props.sideDrawerClick}
						activeClass="active"
						to="projects"
						spy={true}
						smooth={true}
						offset={0}
						duration={500}
					>
						<a href="/">Projects</a>
					</Link>
				</li>

				<li>
					<Link
						onClick={props.sideDrawerClick}
						activeClass="active"
						to="contact"
						spy={true}
						smooth={true}
						offset={0}
						duration={500}
					>
						<a href="/">Contact Me</a>
					</Link>
				</li>
				<li className="resume">
					{' '}
					<a href="/"> Resume</a>
				</li>
			</ul>
		</nav>
	);
};

export default sideDrawer;
