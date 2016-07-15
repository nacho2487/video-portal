import React, { PropTypes } from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
	render () {
		return (
			<div className="jumbotron">
				<h1>PluralSight Administration</h1>
				<p>React, Redux and React Router in ES6 </p>
				<Link to="about" className="btn btn-primary btn-lg"> Learn more </Link>
				caca pepe
			</div>
		);
	}
}

export default HomePage;
