import React from 'react';
import './Home.css';
import Nav from "../components/Nav";

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <Nav />
        <h1> Reset Password </h1>
        <p> Some content </p>
        <ul>
          <ol>Dog</ol>
          <ol>Cat</ol>
          <ol>Mouse</ol>
        </ul>
      </div>
    );
  }
}

export default Home;
