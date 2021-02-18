import React, { Component } from "react";
import { getTime } from "../../Utils/getTime/getTime";
class TimePicker extends Component {
  state = { nowTime: "" };
  buttonClick = () => {
    this.setState({ nowTime: getTime() });
    this.props.click(getTime());
  };

  render() {
    return (
      <>
        <button className="timePicker" onClick={this.buttonClick}>
          {this.props.buttonName}
        </button>
      </>
    );
  }
}
export default TimePicker;
