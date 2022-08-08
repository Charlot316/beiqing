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
import Image from "./Image";
const { Search } = Input;

class Selecter extends Component {
  state = {};
  list = [{}];
  constructor(props) {
    super();
    this.list = props.list;
  }

  static getDerivedStateFromProps(nextProps, preState) {
    const oldData = JSON.stringify(preState);
    const newData = JSON.stringify(nextProps);
    if (oldData !== newData) {
      return nextProps;
    }
    return null;
  }

  render() {
    return (
      <div className={styles.selecterBody}>
        <div className={styles.imageList}>
          {this.state.list?.map((image) => {
            return <Image image={image} />;
          })}{" "}
        </div>
        <div className={styles.switchButtons}></div>
      </div>
    );
  }
}
export default Selecter;
