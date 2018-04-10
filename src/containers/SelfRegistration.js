import React from "react";
import "./Home.css";
import Nav from "../components/Nav";
import { connect } from "react-redux";

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <Nav />
        <h1> Self Registration</h1>
        <h3> {this.props.name}, my age is {this.props.age}</h3>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    name: state.name,
    age: state.age
  }
}
export default connect(mapStateToProps)(Home);
