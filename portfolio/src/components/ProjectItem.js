import React from 'react';

const ProjectItem = (project) => {
	
	//console.log(project.project.id);

	// Check if the content is already loaded
	if(project.project.gsx$title){
		return (
			<div>
				<h1>{project.project.gsx$title.$t}</h1>
				<p>{project.project.gsx$subtitle.$t}</p>
			</div>
		);
	}

	return <div>Loading...</div>
};

export default ProjectItem;