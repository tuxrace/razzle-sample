import React from "react";
import "./Home.css";
import Nav from "../components/Nav";
import { Button } from "antd";
import "antd/dist/antd.css";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      data: ""
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then(response => response.json())
      .then(json => {
        this.setState({ data: json.title });
      });
  }
  render() {
    return (
      <div className="Home">
        <Nav />
        <h1> Forget Password </h1>
        <Button type="primary" shape="circle" icon="search" />
        <h3> Data from api:</h3>
        <div> {this.state.data} </div>
      </div>
    );
  }
}

export default Home;
