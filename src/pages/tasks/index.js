import React, { Component } from "react";
import Header from "./header";
import Main from "./main/main";
class Tasks extends Component {
  render() {
    return (
      <div className="taskContainer">
        <Header />
        <Main />
      </div>
    );
  }
}
export default Tasks;
