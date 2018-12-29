import React from 'react';
import ProjectList from './ProjectList';
import SpreadSheet from '../apis/SpreadSheet'

class SingleProject extends React.Component {

	state = {
		selectedProject: null,
		projects: ['aaa','bbb'] /* list of projects on sidepanel */
	};

	// Run after the initial code mounting is completed.
	componentDidMount(){
		/* call the initial api request */
		this.loadProjects('test');
	}

	loadProjects = async term => {
		const response = await SpreadSheet.get('/1wbyIkXzWDIRaz9Tb_48GDOx5bPohLIQLF1f0Roz-l6w/od6/public/values?alt=json'
		);

		this.setState({projects: response.data.feed.entry});
	};

	// required method for the class
	render(){
		console.log(this.state);
		return(
			<div>
				<div>This is a single project</div>
				<ProjectList projects={this.state.projects} />
			</div>
		);
	}


}

export default SingleProject;