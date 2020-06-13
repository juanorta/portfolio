import React, { Component } from 'react';
import './Projects.css';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { Link, animateScroll as scroll } from 'react-scroll';

class Projects extends Component {
	state = {};
	render() {
		return (
			<div className="projects-header" id="projects">
				<h2>Projects</h2>

				{/* wraps 1st row of projects */}
				<Grid
					className="projects-container1"
					container
					spacing={6}
					alignItems="center"
					justify="center"
				>
					<Grid item lg={3} md={3} sm={9} xs={9}>
						<Card className="card">
							<CardContent className="card-content-container">
								<div className="project-title">Project 1</div>
								<div className="picture">
									Picture will be here
								</div>
								<div className="project-buttons">
									<Link
										activeClass="active"
										to="projects"
										spy={true}
										smooth={true}
										offset={0}
										duration={500}
									>
										<Button
											variant="contained"
											color="primary"
											onClick={this.props.click}
										>
											View Project
										</Button>
									</Link>
								</div>
							</CardContent>
						</Card>
					</Grid>
					<Grid item lg={3} md={3} sm={9} xs={9}>
						<Card className="card">
							<CardContent className="card-content-container">
								<div className="project-title">Project 2</div>
								<div className="picture">
									Picture will be here
								</div>
								<div className="project-buttons">
									<Link
										activeClass="active"
										to="projects"
										spy={true}
										smooth={true}
										offset={0}
										duration={500}
									>
										<Button
											variant="contained"
											color="primary"
											onClick={this.props.click}
										>
											View Project
										</Button>
									</Link>
								</div>
							</CardContent>
						</Card>
					</Grid>
					<Grid item lg={3} md={3} sm={9} xs={9}>
						<Card className="card">
							<CardContent className="card-content-container">
								<div className="project-title">Project 3</div>
								<div className="picture">
									Picture will be here
								</div>
								<div className="project-buttons">
									<Link
										activeClass="active"
										to="projects"
										spy={true}
										smooth={true}
										offset={0}
										duration={500}
									>
										<Button
											variant="contained"
											color="primary"
											onClick={this.props.click}
										>
											View Project
										</Button>
									</Link>
								</div>
							</CardContent>
						</Card>
					</Grid>
				</Grid>

				{/* wraps 2nd row of projects */}
				<Grid
					className="projects-container2"
					container
					spacing={6}
					alignItems="center"
					justify="center"
				>
					<Grid item lg={3} md={3} sm={9} xs={9}>
						<Card className="card">
							<CardContent className="card-content-container">
								<div className="project-title">Project 4</div>
								<div className="picture">
									Picture will be here
								</div>
								<div className="project-buttons">
									<Link
										activeClass="active"
										to="projects"
										spy={true}
										smooth={true}
										offset={0}
										duration={500}
									>
										<Button
											variant="contained"
											color="primary"
											onClick={this.props.click}
										>
											View Project
										</Button>
									</Link>
								</div>
							</CardContent>
						</Card>
					</Grid>
					<Grid item lg={3} md={3} sm={9} xs={9}>
						<Card className="card">
							<CardContent className="card-content-container">
								<div className="project-title">Project 5</div>
								<div className="picture">
									Picture will be here
								</div>
								<div className="project-buttons">
									<Link
										activeClass="active"
										to="projects"
										spy={true}
										smooth={true}
										offset={0}
										duration={500}
									>
										<Button
											variant="contained"
											color="primary"
											onClick={this.props.click}
										>
											View Project
										</Button>
									</Link>
								</div>
							</CardContent>
						</Card>
					</Grid>
					<Grid item lg={3} md={3} sm={9} xs={9}>
						<Card className="card">
							<CardContent className="card-content-container">
								<div className="project-title">Project 6</div>
								<div className="picture">
									Picture will be here
								</div>
								<div className="project-buttons">
									<Link
										activeClass="active"
										to="projects"
										spy={true}
										smooth={true}
										offset={0}
										duration={500}
									>
										<Button
											variant="contained"
											color="primary"
											onClick={this.props.click}
										>
											View Project
										</Button>
									</Link>
								</div>
							</CardContent>
						</Card>
					</Grid>
				</Grid>
			</div>
		);
	}
}

export default Projects;
