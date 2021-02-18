import React, { Component } from "react";
import Logo from "./Logo/logo";
import GroupName from "./groupName/groupName";
import ShowTime from "./showTime/showTime";
class Header extends Component {
  render() {
    return (
      <div className="header">
        <Logo/>
        <GroupName />
        <ShowTime />
      </div>
    );
  }
}
export default Header;
