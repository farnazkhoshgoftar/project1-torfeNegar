import React, { Component } from "react";
import RealTime from "./realTime/realTime";
import Presence from "./presence/presence";
class Footer extends Component {
  render() {
    return (
      <div>
        <RealTime />
        <Presence />
      </div>
    );
  }
}
export default Footer;
