import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'; 
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Topics from './components/Topics';

class App extends Component {
  render() {
    return (
      <div className="App">
      	<Router>
      		<div>
      			<Navigation />
      			<Route exact path="/" component={Home} />
      			<Route path="/about" component={About} />
      			<Route path="/topics" component={Topics} />
      		</div>
      	</Router>
      </div>
    );
  }
}

export default App;
