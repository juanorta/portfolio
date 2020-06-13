import React from 'react';
import './ProjectViewExit.css';
const projectViewExit = (props) => (
	<div className="exit-container">
		<div className="exit" onClick={props.click}>
			X
		</div>
	</div>
);

export default projectViewExit;
