import React from 'react';
import SpreadSheet from '../apis/SpreadSheet'
import ProjectDetail from './ProjectDetail';
import ProjectList from './ProjectList';


class SingleProject extends React.Component {

	state = {
		selectedProject: null,
		projects: [''] /* list of projects on sidepanel */
	};

	// Run after the initial code mounting is completed.
	componentDidMount(){
		/* call the initial api request */
		this.loadProjects('test');
	}

	loadProjects = async term => {
		const response = await SpreadSheet.get('/1wbyIkXzWDIRaz9Tb_48GDOx5bPohLIQLF1f0Roz-l6w/od6/public/values?alt=json#gid=2111141459'
		);
		console.log(response.data);
		this.setState({projects: response.data.feed.entry});
	};

	onProjectSelect = (project) => {
		this.setState({selectedProject: project});
	}

	// required method for the class
	render(){
		//console.log(this.state);
		return(
			<div>
				<div>This is a single project</div>
				<ProjectList
					projects={this.state.projects}
					onProjectSelect={this.onProjectSelect} 
				/>
				<ProjectDetail
					project={this.state.selectedProject} 
				/>
			</div>
		);
	}


}

export default SingleProject;