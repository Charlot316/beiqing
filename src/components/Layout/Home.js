import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { getToken, IsPC } from "../../utils/filter";

const accessToken = getToken("username");
export default class Home extends Component {
  redirectRouter = () => {
    if (accessToken === null) {
      return <Redirect to="/login" />;
    }
  };

  getNavigator = () => {
    if (navigator.userAgent.indexOf("DingTalk") !== -1) {
      return <Redirect to="/dingtalk" />;
    }
    return <Redirect to="/login" />;
  };

  render() {
    // alert(navigator.userAgent.indexOf('DingTalk'));
    return IsPC() ? this.redirectRouter : this.getNavigator;
  }
}
