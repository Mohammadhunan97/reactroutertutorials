import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'; 


class Topicssubrouter extends Component {
	render(){
		console.log(this.props)
		return (
			<Router className="Topicssubrouter">
				<div>
					<li>
						<Link to={`${this.props.match.url}/rendering`}>Rendering with React</Link>
					</li>
					<li>
						<Link to={`${this.props.match.url}/components`}>Components with React</Link>
					</li>
					<li>
						<Link to={`${this.props.match.url}/props%20vs%20state`}>Props vs State</Link>
					</li>
					<Route exact path={`${this.props.match.url}`}  render={() => <h3>Please select a topic.</h3>} />
					<Route path={`${this.props.match.url}/:topicId`} component={Topic} />
				</div>
			</Router>
		)
	}
}

class Topic extends Component {
	render(){
		return(<p className="Topic">{this.props.match.params.topicId}</p>)
	}
}


export default Topicssubrouter;