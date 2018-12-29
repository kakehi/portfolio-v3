import React from 'react';
import ProjectItem from './ProjectItem';

const ProjectList = ({ projects, onProjectSelect }) => {

	const renderedList = projects.map(project => {
		
		// error handler
		if(!project)
			return <div>loading...</div>;

		return(
			<ProjectItem 
				key={project.id.$t}
				project={project}
				onProjectSelect = {onProjectSelect}
			/>
		);
	});

	// required method for the class
	return(
		<div>{renderedList}</div>
	);
};

export default ProjectList;