import React from 'react';

const ProjectItem = ({project, onProjectSelect}) => {
	
	//console.log(project.project.id);

	// Check if the content is already loaded
	if(project){
		return (
			<div onClick={()=>onProjectSelect(project)}>
				<h4>{project.gsx$title.$t}</h4>
				<p>{project.gsx$subtitle.$t}</p>
			</div>
		);
	}

	return <div>Loading...</div>
};

export default ProjectItem;