import React from 'react';

export default class ProjectUnit extends React.Component  {
	render() {
		const name = this.props.name
		return (
			<div>
				<h4>{name}</h4>
				<div><p>This project does some stuff.</p></div>
			</div>
		);
	}

	retrieveDisplay() {

	}
}
