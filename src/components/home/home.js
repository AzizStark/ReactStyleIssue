import React, { Component } from "react";
import "./home.css";

class Home extends Component {
  render() {
    return (
      <div className="text1" style={{ overflow: "Hidden" }}>
        <h1 class="red">This must be red.</h1>
        <a href="/blog">Go to Blog</a>
      </div>
    );
  }
}

export default Home;
