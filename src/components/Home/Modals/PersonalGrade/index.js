"use strict";

import React, { Component } from "react";
import {
  Table,
  Modal,
  Input,
  Form,
  Space,
  Select,
  message,
  Upload,
  Popconfirm,
  Button,
  Tag,
  Radio,
  Tooltip,
  Card,
} from "antd";
import {
  UserOutlined,
  SettingOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons";
import {
  getIntroduction,
  getIntroductionWithAudio,
  getEnglishIntroduction,
  uploadEnglishPractice,
  uploadContentInnovation,
} from "@/services/front/controller";
import styles from "./index.module.styl";
const { Search } = Input;
class Header extends Component {
  state = {};
  componentDidMount() {
    getIntroduction().then((result) => {
      this.setState({ content: result.data.content });
    });
  }

  render() {
    return <div dangerouslySetInnerHTML={{ __html: this.state.content }}></div>;
  }
}
export default Header;
