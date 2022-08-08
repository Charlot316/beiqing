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
import Header from "@/components/Home/Header";
import styles from "./index.module.styl";
const { Search } = Input;
class Scene extends Component {
  state = {};
  componentDidMount() {}

  render() {
    return (
      <div className={styles.homeBody}>
        <div className={styles.homeHeader}>
          <Header />
        </div>
        <div className={styles.homeSelecter}></div>
        <div className={styles.homeContent}></div>
      </div>
    );
  }
}
export default Scene;
