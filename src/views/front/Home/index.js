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

import { Pannellum } from "pannellum-react";
import myImage from "@/assets/太和门.jpg";
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
        <div className={styles.homeContent}>
          <Pannellum
            style={{ position: "absolute", top: "0", left: "0" }}
            width="100%"
            height="100%"
            image={myImage}
            pitch={10}
            yaw={180}
            hfov={110}
            autoLoad
            onLoad={() => {
              console.log("panorama loaded");
            }}
          ></Pannellum>
        </div>
      </div>
    );
  }
}
export default Scene;
