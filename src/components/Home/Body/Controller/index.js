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
  MessageOutlined,
  NotificationOutlined,
  AudioOutlined,
  BulbOutlined,
} from "@ant-design/icons";
import styles from "./index.module.styl";
const { Search } = Input;
class Body extends Component {
  state = {};
  componentDidMount() {}

  render() {
    return (
      <div className={styles.controllerBody}>
        <div className={styles.controllerButton}>
          <NotificationOutlined className={styles.controllerIcon} />
          <div className={styles.controllerButtonName}>景区介绍</div>
        </div>
        <div className={styles.controllerButton}>
          <MessageOutlined className={styles.controllerIcon} />
          <div className={styles.controllerButtonName}>景点导游</div>
        </div>
        <div className={styles.controllerButton}>
          <AudioOutlined className={styles.controllerIcon} />
          <div className={styles.controllerButtonName}>英语导游学习</div>
        </div>
        <div className={styles.controllerButton}>
          <BulbOutlined className={styles.controllerIcon} />
          <div className={styles.controllerButtonName}>内容创新</div>
        </div>
      </div>
    );
  }
}
export default Body;
