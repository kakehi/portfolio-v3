import React from 'react';
import ProjectList from './ProjectList';
import SpreadSheet from '../apis/SpreadSheet'

class SingleProject extends React.Component {

	stete = {
		selectedProject: null,
		projects: [] /* list of projects on sidepanel */
	};

	// Run after the initial code mounting is completed.
	componentDidMount(){
		/* call the initial api request */
		this.loadProjects('test');
	}

	loadProjects = async term => {
		const response = await SpreadSheet.get('/1wbyIkXzWDIRaz9Tb_48GDOx5bPohLIQLF1f0Roz-l6w/od6/public/values?alt=json'
		);

		console.log(response.data);
	};


	// required method for the class
	render(){
		return(
			<div>
				<div>This is a single project</div>
				<ProjectList />
			</div>
		);
	}


}

export default SingleProject;