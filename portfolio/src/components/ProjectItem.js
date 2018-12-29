import React from 'react';

const ProjectItem = (project) => {
	
	console.log(project.project.id);

	// Check if the content is already loaded
	if(project.project.gsx$title){
		return (
			<div>{project.project.gsx$title.$t}</div>
		);
	}

	return <div>Loading...</div>
};

export default ProjectItem;