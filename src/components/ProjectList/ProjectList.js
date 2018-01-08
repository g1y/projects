import React from 'react';

export default class ProjectList extends React.Component  {
	render() {
		const projects = this.props.projects || [];
		const projectUnits = projects.map((project) => {
			return (<li><ProjectUnit name={project}></ProjectUnit></li>);
		});

		return (
			<div>
				<h4>ProjectList</h4>
				<div><p>These are all of your projects.</p></div>
				<ul>
					{projectUnits}
				</ul>
			</div>
		);
	}

	getData() {
		var xhr = new XMLHttpRequest();
		xhr.responseType = 'json';
		xhr.open("POST", "/graphql");
		xhr.setRequestHeader("Content-Type", "application/json");
		xhr.setRequestHeader("Accept", "application/json");
		xhr.onload = function () {
			  console.log('data returned:', xhr.response);
		}
		var query = `query  {}`;
		xhr.send(JSON.stringify({
			  query: query,
			  variables: {},
		}));
	}
}
