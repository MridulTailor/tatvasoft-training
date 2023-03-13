import React, { Component } from "react";
import Title from "../components/Title";
class Home extends Component {
  constructor() {
    super();
    this.state = {
      title: "Welcome Visitor",
      description: "This is the description of the website",
    };
  }
  changeTitle() {
    this.setState({
      title: "Welcome Mridul",
    });
  }
  render() {
    return (
      <div>
        <h1>Today is my {this.props.exam} exam.</h1>
        <Title title={this.state.title} description={this.state.description} />
        {/* <Title name="mriduL" surName="tailoR" />
        <Title name="mRidul" surName="tAilor" /> */}
        <button onClick={() => this.changeTitle()}>Change Text</button>
      </div>
    );
  }
}

export default Home;
