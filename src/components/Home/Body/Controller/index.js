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
  NotificationOutlined,
  MessageOutlined,
  AudioOutlined,
  BulbOutlined,
} from "@ant-design/icons";
import { MODAL_STATUS, MODAL_TYPE } from "@/consts/views/modal";
import styles from "./index.module.styl";
const { Search } = Input;
const buttonList = [
  {
    name: "景区介绍",
    icon: <NotificationOutlined className={styles.controllerIcon} />,
    modal: MODAL_TYPE.SCENIC_SPOT_INTRODUCTION,
  },
  {
    name: "景点导游",
    icon: <MessageOutlined className={styles.controllerIcon} />,
    modal: MODAL_TYPE.SCENIC_SPOT_GUIDE,
  },
  {
    name: "英语导游学习",
    icon: <AudioOutlined className={styles.controllerIcon} />,
    modal: MODAL_TYPE.ENGLISH_TOUR_GUIDE,
  },
  {
    name: "内容创新",
    icon: <BulbOutlined className={styles.controllerIcon} />,
    modal: MODAL_TYPE.CONTENT_INNOVATION,
  },
];
class Body extends Component {
  state = {};
  componentDidMount() {}

  render() {
    return (
      <div className={styles.controllerBody}>
        {buttonList.map((button) => {
          return (
            <div
              className={styles.controllerButton}
              key={button.name}
              onClick={() => {
                this.props.changeModalStatus(button.modal, MODAL_STATUS.OPEN);
              }}
            >
              {button.icon}
              <div className={styles.controllerButtonName}>{button.name}</div>
            </div>
          );
        })}
      </div>
    );
  }
}
export default Body;
