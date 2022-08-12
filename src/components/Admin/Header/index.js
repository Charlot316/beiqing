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
  PictureOutlined,
  TeamOutlined,
  SettingOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons";
import styles from "./index.module.styl";
import { MODAL_STATUS, MODAL_TYPE } from "@/consts/views/modal";
const { Search } = Input;
class Header extends Component {
  state = {};
  componentDidMount() {}

  render() {
    return (
      <div className={styles.headerBody}>
        <div className={styles.left}>出入境三维实景实训平台</div>
        <div className={styles.right}>
          <Button type="text" icon={<PictureOutlined />}>
            景区景点管理
          </Button>
          <Button type="text" icon={<TeamOutlined />}>
            学员管理
          </Button>
          <Button type="text" icon={<SettingOutlined />}>
            信息设置
          </Button>
          <Button type="text" icon={<CloseCircleOutlined />}>
            退出系统
          </Button>
        </div>
      </div>
    );
  }
}
export default Header;
