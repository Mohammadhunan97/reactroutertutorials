import React, { Component } from 'react';
import '../index.css'; 
import Topicssubrouter from './Topicssubrouter';

class Topics extends Component {
  render() {
    return (
      <div className="Topics">
      	<h2>Topics:</h2>
      	<ul>
      		<Topicssubrouter match={this.props.match}/>
      	</ul>
      </div>
    );
  }
}


export default Topics;
