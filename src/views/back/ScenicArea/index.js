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
const STATUS = {
  LIST: 1,
  EDIT: 2,
  ADD: 3,
};
class Admin extends Component {
  state = {
    status: STATUS.LIST,
  };
  render() {
    return (
      <div className={styles.scenicBody}>
        <div></div>
      </div>
    );
  }
}
export default Admin;
