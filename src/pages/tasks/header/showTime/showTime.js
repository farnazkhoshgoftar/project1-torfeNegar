import React, { Component } from "react";
import { getTime } from "../../../../Utils/getTime/getTime";
class ShowTime extends Component {
  state = { moment: getTime() };
  componentDidMount() {
    setInterval(this.timer, 1000);
  }

  timer = () => {
    let date = new Date();
    let currentTime = date.toLocaleTimeString();
    this.setState({ moment: currentTime });
  };

  render() {
    return <div className='showTime'>{this.state.moment}</div>;
  }
}

export default ShowTime;
