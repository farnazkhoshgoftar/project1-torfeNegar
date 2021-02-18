import React, { Component } from "react";
import Input from "../../../../components/input/input";
import TimePicker from "../../../../components/timePicker/timePickers";
import { diffTime } from "../../../../Utils/diffTime/diffTime";

class Row extends Component {
  state = {
    description: "",
    startTime: "",
    endTime: "",
    diffCalc: "",
  };
  timePickerHandler = (data) => {
    this.setState({ endTime: data });

    this.props.submit({
      description: this.state.description,
      startTime: this.state.startTime,
      endTime: data,
      diffCalc: diffTime(this.state.startTime, data),
    });

    this.setState({ description: "" });
    this.setState({ startTime: "" });
    this.setState({ endTime: "" });
    this.setState({ diffCalc: "" });
  };
  render() {
    return (
      <div className="row">
        <Input
          value={this.state.description}
          change={(data) => this.setState({ description: data })}
        />

        {this.state.startTime ? (
          <span className="time">{this.state.startTime}</span>
        ) : (
          <TimePicker
            buttonName="شروع"
            click={(data) => this.setState({ startTime: data })}
          />
        )}

        {this.state.endTime ? (
          <span className="time">{this.state.endTime}</span>
        ) : (
          <TimePicker
            buttonName="پایان"
            click={(data) => this.timePickerHandler(data)}
          />
        )}
        <div className='Space'></div>
      </div>
    );
  }
}

export default Row;
