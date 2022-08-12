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
class Admin extends Component {
  state = {
    status: "list",
  };
  componentDidMount() {}
  render() {
    return <div className={styles.scenicBody}></div>;
  }
}
export default Admin;
