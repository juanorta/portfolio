import React, { Component, useState } from 'react';
import './ProjectView.css';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import ProjectViewExit from '/Users/mac/Desktop/jobPortfolio/portfolio/src/Components/ProjectViewExit/ProjectViewExit';
import Modal from 'react-modal';
import Button from '@material-ui/core/Button';

import Projects from '/Users/mac/Desktop/jobPortfolio/portfolio/src/Components/PageSections/Projects/Projects';

class ProjectView extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className="project-wrapper">
				<h1>Project {this.props.projectStateID}</h1>
				<button onClick={this.props.buttonClick}>exit</button>
			</div>
		);
	}
}

export default ProjectView;

const projectView = (props) => {
	let projectViewClasses = 'project-card-container';
	if (props.showProject) {
		projectViewClasses = 'project-card-container open';
	}
	console.log(projectViewClasses);
	return (
		<Grid
			className="project-view-container"
			container
			spacingalignItems="center"
			justify="center"
		>
			<Grid className={projectViewClasses} item lg={8} sm={9} xs={9}>
				{/* is the actual card and contains the card content*/}
				<Card className="card" style={{ backgroundColor: ' yellow' }}>
					<CardContent className="project-content">
						<div className="about-container">
							<ProjectViewExit click={props.exitHandler} />
							ABOUT
						</div>
						<div className="gif-container">GIF</div>
					</CardContent>
				</Card>
			</Grid>
		</Grid>
	);
};

export default ProjectView;
