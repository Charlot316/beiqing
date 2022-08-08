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
import Selecter from "@/components/Home/Selecter";
import styles from "./index.module.styl";

import { Pannellum } from "pannellum-react";
import { getImageList, getBackgroundImage } from "@/services/home";
const { Search } = Input;
class Scene extends Component {
  state = {
    background: "",
    imageList: [],
  };
  componentDidMount() {
    this.getImages(1);
    this.getBackground();
  }
  getImages(page) {
    getImageList({ page: page }).then((result) => {
      this.setState({ imageList: result.data.list });
    });
  }

  getBackground() {
    getBackgroundImage().then((result) => {
      this.setState({ background: result.data.image });
    });
  }

  render() {
    return (
      <div className={styles.homeBody}>
        <div className={styles.homeHeader}>
          <Header />
        </div>
        <div className={styles.homeSelecter}>
          <Selecter list={this.state.imageList} />
        </div>
        <div className={styles.homeContent}>
          <Pannellum
            style={{ position: "absolute", top: "0", left: "0" }}
            width="100%"
            height="100%"
            image={this.state.background}
            pitch={10}
            yaw={180}
            hfov={110}
            autoLoad
            showZoomCtrl={false}
            showFullscreenCtrl={false}
          ></Pannellum>
        </div>
      </div>
    );
  }
}
export default Scene;
