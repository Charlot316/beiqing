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
import Banner from "@/components/Home/Body/Banner";
import Controller from "@/components/Home/Body/Controller";

import { Pannellum } from "pannellum-react";
import {
  getImageList,
  getBackgroundImage,
  getBannerWords,
} from "@/services/home";
const { Search } = Input;
class Scene extends Component {
  state = {
    background: "",
    imageList: [],
    bannerList: [],
  };
  componentDidMount() {
    this.getImages(1);
    this.getBackground();
    this.getBanner();
  }
  getImages(page) {
    getImageList({ page: page }).then((result) => {
      this.setState({ imageList: result.data.list });
      console.log("get");
    });
  }

  getBackground() {
    getBackgroundImage().then((result) => {
      this.setState({ background: result.data.image });
    });
  }

  getBanner() {
    getBannerWords().then((result) => {
      this.setState({ bannerList: result.data.list });
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
          {/* 全景图组件 */}
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
          <div className={styles.banner}>
            {" "}
            <Banner list={this.state.bannerList} />
          </div>
          <div className={styles.controller}>
            {" "}
            <Controller />
          </div>
        </div>
      </div>
    );
  }
}
export default Scene;
