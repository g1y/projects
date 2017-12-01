var ProjectUnit = React.createClass({
	render: function() {
		return (
			<div>
				<h4>Project</h4>
				<div><p>This project does some stuff.</p></div>
			</div>
		);
	}
});

React.render(
	<div>Bonjour!</div>,
	<ProjectUnit />,
	document.getElementById('container')
);
