import React from 'react';

const ProjectDetail = ({ project }) => {
	

	if(!project){
		return <div>Loading...</div>;
	}

	return(
		<div>
			<h1>{project.project.gsx$title.$t}</h1>
			<p>{project.project.gsx$subtitle.$t}</p>
		</div>
	)
};

export default ProjectDetail;
