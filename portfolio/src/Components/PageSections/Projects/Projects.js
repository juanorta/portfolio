import React, { Component } from 'react';
import './Projects.css';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { Link, animateScroll as scroll } from 'react-scroll';
import ProjectView from '/Users/mac/Desktop/jobPortfolio/portfolio/src/Components/ProjectView/ProjectView';
import Backdrop from '/Users/mac/Desktop/jobPortfolio/portfolio/src/Components/Backdrop/Backdrop';

class Projects extends Component {
	constructor(props) {
		super(props);
		this.state = {
			id: '',
			title: '',
			visible: this.props.viewState,
		};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.buttonClick();
		const target = event.target;
		const value = target.value;
		const name = target.name;

		if (event.currentTarget.id == '0') {
			this.setState({ id: 0, title: 'project-0' }, () => {
				console.log(this.state);
			});
		} else if (event.currentTarget.id == '1') {
			this.setState({ id: 1, title: 'project-1' }, () => {
				console.log(this.state);
			});
		} else if (event.currentTarget.id == '2') {
			this.setState({ id: 2, title: 'project-2' }, () => {
				console.log(this.state);
			});
		} else if (event.currentTarget.id == '3') {
			this.setState({ id: 3, title: 'project-3' }, () => {
				console.log(this.state);
			});
		} else if (event.currentTarget.id == '4') {
			this.setState({ id: 4, title: 'project-4' }, () => {
				console.log(this.state);
			});
		} else if (event.currentTarget.id == '5') {
			this.setState({ id: 5, title: 'project-5' }, () => {
				console.log(this.state);
			});
		} else if (event.currentTarget.id == '6') {
			this.setState({ id: 6, title: 'project-6' }, () => {
				console.log(this.state);
			});
		}
	}

	buttonClick = () => {
		this.setState((prevState) => {
			return { visible: !prevState.visible };
		});

		this.props.click();

		if (this.state.visible) {
			this.props.backdrop();
		}
	};

	render() {
		console.log('projectView = ' + this.state.visible);
		return (
			<div className="projects-header" id="projects">
				<h2>Projects</h2>

				{/* if state.visible is true, show and send project data to ProjectView, else show nothing*/}
				{/* also if state.visible is true, it will send the 'buttonClick' function to Backdrop.js */}
				{this.state.visible
					? [
							<ProjectView
								key="1"
								modalOpen={this.state.modalOpen}
								projectStateID={this.state.id}
								projectStateTitle={this.state.title}
								buttonClick={this.buttonClick}
							/>,

							<Backdrop key="2" buttonClick={this.buttonClick} />,
					  ]
					: null}

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
								<div className="project-title">Project 0</div>
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
											id="0"
											variant="contained"
											color="primary"
											onClick={this.handleChange}
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
											id="1"
											variant="contained"
											color="primary"
											onClick={this.handleChange}
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
											id="2"
											variant="contained"
											color="primary"
											onClick={this.handleChange}
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
											id="3"
											variant="contained"
											color="primary"
											onClick={this.handleChange}
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
											id="4"
											variant="contained"
											color="primary"
											onClick={this.handleChange}
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
											id="5"
											variant="contained"
											color="primary"
											onClick={this.handleChange}
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
