import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router } from 'react-router-dom';
import "./styles.css";
import Home from './components/home/home';
import Blog from './components/blog/blog';

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/blog" component={Blog} />
    </div>
  </Router>
)


ReactDOM.render(routing , document.getElementById('root'));

