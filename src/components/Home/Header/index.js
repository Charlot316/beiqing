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
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import styles from "./index.module.styl";
const { Search } = Input;
class Header extends Component {
  state = {};
  componentDidMount() {}

  render() {
    return <div className={styles.headerBody}></div>;
  }
}
export default Header;
