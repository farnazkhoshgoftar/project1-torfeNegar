import React, { Component } from "react";
import Row from "./row/row";
import moment from "moment";
import { diffTime } from "./../../../Utils/diffTime/diffTime";
class Main extends Component {
  state = {
    tasks: [],
    timing: "",
  };

  calculateAllDiff = () => {
    let defaultDuration = moment.duration("0:0:0");
    let sumDiffs = moment.duration();

    this.state.tasks.forEach((item) => {
      sumDiffs = defaultDuration.add(
        moment.duration(item.diffCalc.replace(/ /g, ""))
      );
    });

    const result = moment.utc(sumDiffs.as("milliseconds")).format("H:m:s");
    return result;
  };
  presenceCalc = () => {
    if (this.state.tasks.length !== 0) {
      let firstStart = this.state.tasks[0].startTime;
      let lastEnd = this.state.tasks[this.state.tasks.length - 1].endTime;
      return diffTime(firstStart, lastEnd);
    }
  };

  render() {
    return (
      <div>
        {this.state.tasks.map((item, key) => (
          <div className="row" key={key}>
            <div className="description">{item.description}</div>
            <div className="time">{item.startTime}</div>
            <div className="time">{item.endTime}</div>
            <div className="time">{item.diffCalc}</div>
          </div>
        ))}
        <Row
          submit={(data) => {
            this.setState((prevState) => ({
              tasks: [...prevState.tasks, data],
            }));
          }}
        />

        <div className="footer">
          <div className="footerResult">ساعت مفید</div>
          <div className="footerResult"> {this.calculateAllDiff()}</div>
          <div className="footerResult">ساعت حضور</div>
          {this.state.tasks.length != 0 ? (
            <div className="footerResult direction"> {this.presenceCalc()}</div>
          ) : <div>0:0:0</div>}
        </div>
      </div>
    );
  }
}

export default Main;
