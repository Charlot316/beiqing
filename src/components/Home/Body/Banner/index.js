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
class Body extends Component {
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

  componentDidMount() {}

  render() {
    return (
      <div className={styles.bannerBody}>
        {this.state.list?.map((item) => {
          return <a key={item.name}>{item.name}</a>;
        })}
      </div>
    );
  }
}
export default Body;
