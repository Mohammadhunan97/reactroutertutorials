import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 

import '../index.css'; 


class Navigation extends Component {
  render() {
    return (
      <div className="Navigation">
        <h2>Basic Router Example</h2>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/topics">Topics</Link>
      </div>
    );
  }
}

export default Navigation;
