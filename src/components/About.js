import React, { Component } from "react";
import Title from "./Title";
class About extends Component {
  render() {
    return (
      <div>
        <Title title="About" description="This is the about page" />
        <p>Some text about me 1.</p>
        <p>Some text about me 2.</p>
      </div>
    );
  }
}
export default About;
