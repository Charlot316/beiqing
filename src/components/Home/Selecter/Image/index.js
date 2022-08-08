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
  image = {};
  constructor(props) {
    super();
    this.image = props.image;
  }
  componentDidMount() {
    this.setState({ image: this.image });
  }
  static getDerivedStateFromProps(nextProps, preState) {
    const oldData = JSON.stringify(preState);
    const newData = JSON.stringify(nextProps);
    console.log();
    if (oldData !== newData) {
      return nextProps;
    }
    return null;
  }

  render() {
    return (
      <div className={styles.imageBody}>
        <img className={styles.imageImg} src={this.state.image.img} />
        <div className={styles.imageName}>{this.state.image.name}</div>
      </div>
    );
  }
}
export default Selecter;
