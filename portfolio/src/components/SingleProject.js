import React from 'react';

class SingleProject extends React.Component {

	stete = {
		selectedProject: null,
		projects: [] /* list of projects on sidepanel */
	};


	// required method for the class
	render(){
		return(
			<div>This is a single project</div>
		);
	}


}

export default SingleProject;