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
import styles from "./index.module.styl";
const { Search } = Input;
class Selecter extends Component {
  state = {};
  list = {};
  constructor(props) {
    super();
    this.list = props.list;
  }
  componentDidMount() {
    this.setState({ list: this.list });
  }

  render() {
    return (
      <div className={styles.selecterBody}>
        <div className={styles.imageList}></div>
        <div className={styles.switchButtons}></div>
      </div>
    );
  }
}
export default Selecter;
