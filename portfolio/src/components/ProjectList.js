import React from 'react';
import ProjectItem from './ProjectItem';

const ProjectList = ({ projects }) => {

	const renderedList = projects.map(project => {
		return <ProjectItem key='aaaa' project={project} />
	});

	// required method for the class
	return(
		<div>{renderedList}</div>
	);
};

export default ProjectList;