import React, { Component } from "react";
import Title from "../components/Title";
class Home extends Component {
  render() {
    return (
      <div>
        <h1>Today is my {this.props.exam} exam.</h1>
        <Title name="Mridul" surName="Tailor" />
        <Title name="mriduL" surName="tailoR" />
        <Title name="mRidul" surName="tAilor" />
      </div>
    );
  }
}

export default Home;
