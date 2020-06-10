import React, { Component } from 'react';
import './Stack.css';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { FaJava, FaPython } from 'react-icons/fa';
import IconC from 'react-devicon/c/original';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CPlusPlus from '../../SVG/CPlusPlus';
import C from '../../SVG/C';
import Java from '../../SVG/Java';
import Python from '../../SVG/Python';
import MySQL from '../../SVG/MySQL';
import CSharp from '../../SVG/CSharp';
import HTML from '../../SVG/FrontEnd/HTML';
import CSS from '../../SVG/FrontEnd/CSS';
import JavaScript from '../../SVG/FrontEnd/JavaScript';
import Angular from '../../SVG/FrontEnd/Angular';
import ReactLogo from '../../SVG/FrontEnd/ReactLogo';
import BootstrapLogo from '../../SVG/FrontEnd/BootstrapLogo';
import AWS from '../../SVG/Cloud/AWS';
import DigitalOcean from '../../SVG/Cloud/DigitalOcean';
import NGINX from '../../SVG/Cloud/NGINX';
import NPM from '../../SVG/Cloud/NPM';
import GIT from '../../SVG/Cloud/GIT';
import Trello from '../../SVG/Cloud/Trello';

class Stack extends Component {
	state = {};
	render() {
		const styles = (theme) => ({
			container: {
				display: 'grid',
				gridTemplateColumns: 'repeat(12, 1fr)',
				gridGap: `${theme.spacing.unit * 3}px`,
			},
		});

		return (
			//stack-header wraps everything in the 'skills' section
			<div className="stack-header" id="stack">
				<h2>Skills</h2>

				{/* Grid container wraps all of the grid/card items*/}
				<Grid
					className="skills-container"
					container
					spacing={4}
					alignItems="center"
					justify="center"
				>
					{/* Grid item wraps card item so that it can be divided into grid sections */}
					{/* back end */}
					<Grid item lg={3} sm={9} xs={9}>
						{/* is the actual card and contains the card content*/}
						<Card
							className="card"
							style={{ backgroundColor: ' rgb(9, 13, 15)' }}
						>
							<CardContent className="card-content">
								<div className="card-title">Back End</div>
								<div className="logo-container">
									<Grid
										className="row1"
										container
										spacing={0}
									>
										<Grid item lg={6} xs={6}>
											<CPlusPlus />
										</Grid>
										<Grid item lg={6} xs={6}>
											<Java />
										</Grid>
									</Grid>

									<Grid
										className="row2"
										container
										spacing={0}
									>
										<Grid item lg={6} xs={6}>
											<Python />
										</Grid>
										<Grid item lg={6} xs={6}>
											<C />
										</Grid>
									</Grid>

									<Grid
										className="row3"
										container
										spacing={0}
									>
										<Grid item lg={6} xs={6}>
											<CSharp />
										</Grid>
										<Grid item lg={6} xs={6}>
											<MySQL />
										</Grid>
									</Grid>
								</div>
							</CardContent>
						</Card>
					</Grid>

					{/* front end */}
					<Grid item lg={3} sm={9} xs={9}>
						<Card
							className="card"
							style={{ backgroundColor: 'rgb(9, 13, 15)' }}
						>
							<CardContent className="card-content">
								<div className="card-title">Front End</div>
								<div className="logo-container">
									<Grid
										className="row1"
										container
										spacing={0}
									>
										<Grid item lg={6} xs={6}>
											<HTML />
										</Grid>
										<Grid item lg={6} xs={6}>
											<CSS />
										</Grid>
									</Grid>

									<Grid
										className="row2"
										container
										spacing={0}
									>
										<Grid item lg={6} xs={6}>
											<JavaScript />
										</Grid>
										<Grid item lg={6} xs={6}>
											<Angular />
										</Grid>
									</Grid>

									<Grid
										className="row3"
										container
										spacing={0}
									>
										<Grid item lg={6} xs={6}>
											<div className="react-name">
												<ReactLogo />
												React
											</div>
										</Grid>
										<Grid item lg={6} xs={6}>
											<BootstrapLogo />
										</Grid>
									</Grid>
								</div>
							</CardContent>
						</Card>
					</Grid>

					{/* services */}
					<Grid item lg={3} sm={9} xs={9}>
						<Card
							className="card"
							style={{ backgroundColor: 'transparent' }}
						>
							<CardContent className="card-content">
								<div className="card-title">Cloud Server</div>
								<div className="logo-container">
									<Grid
										className="row1"
										container
										spacing={0}
									>
										<Grid item lg={6} xs={6}>
											<AWS />
										</Grid>
										<Grid item lg={6} xs={6}>
											<DigitalOcean />
										</Grid>
									</Grid>

									<Grid
										className="row2"
										container
										spacing={0}
									>
										<Grid item lg={6} xs={6}>
											<NGINX />
										</Grid>
										<Grid item lg={6} xs={6}>
											<NPM />
										</Grid>
									</Grid>

									<Grid
										className="row3"
										container
										spacing={0}
									>
										<Grid item lg={6} xs={6}>
											<GIT />
										</Grid>
										<Grid item lg={6} xs={6}>
											<Trello />
										</Grid>
									</Grid>
								</div>
							</CardContent>
						</Card>
					</Grid>
				</Grid>
			</div>
		);
	}
}

export default Stack;
