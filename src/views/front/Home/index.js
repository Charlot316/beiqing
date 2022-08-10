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

import ScenicSpotIntroduction from "@/components/Home/Modals/ScenicSpotIntroduction";
import ScenicSpotGuide from "@/components/Home/Modals/ScenicSpotGuide";
import EnglishTourGuide from "@/components/Home/Modals/EnglishTourGuide";
import ContentInnovation from "@/components/Home/Modals/ContentInnovation";
import PersonalGrade from "@/components/Home/Modals/PersonalGrade";

import { MODAL_STATUS, MODAL_TYPE } from "@/consts/views/modal";
import { Pannellum } from "pannellum-react";
import {
  getImageList,
  getBackgroundImage,
  getBannerWords,
} from "@/services/front/home";
const { Search } = Input;
class Scene extends Component {
  state = {
    background: "",
    imageList: [],
    bannerList: [],
    Modals: [
      {
        name: "景区介绍",
        status: MODAL_STATUS.CLOSE,
        type: MODAL_TYPE.SCENIC_SPOT_INTRODUCTION,
        content: (
          <ScenicSpotIntroduction changeModalStatus={this.changeModalStatus} />
        ),
      },
      {
        name: "导游讲解",
        status: MODAL_STATUS.CLOSE,
        type: MODAL_TYPE.SCENIC_SPOT_GUIDE,
        content: <ScenicSpotGuide changeModalStatus={this.changeModalStatus} />,
      },
      {
        name: "英语导游学习",
        status: MODAL_STATUS.CLOSE,
        type: MODAL_TYPE.ENGLISH_TOUR_GUIDE,
        content: (
          <EnglishTourGuide changeModalStatus={this.changeModalStatus} />
        ),
      },
      {
        name: "内容创新",
        status: MODAL_STATUS.CLOSE,
        type: MODAL_TYPE.CONTENT_INNOVATION,
        content: (
          <ContentInnovation changeModalStatus={this.changeModalStatus} />
        ),
      },
      {
        name: "个人成绩",
        status: MODAL_STATUS.CLOSE,
        type: MODAL_TYPE.PERSONAL_GRADE,
        content: <PersonalGrade changeModalStatus={this.changeModalStatus} />,
      },
    ], //控制五个弹窗的状态
  };

  changeModalStatus = (modal, status) => {
    let that = this;
    this.state.Modals[modal].status = status;
    this.forceUpdate();
  };

  componentDidMount() {
    this.getImages(1);
    this.getBackground();
    this.getBanner();
  }

  getImages() {
    getImageList().then((result) => {
      this.setState({ imageList: result.data.list });
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
          <Header changeModalStatus={this.changeModalStatus} />
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
            <Controller changeModalStatus={this.changeModalStatus} />
          </div>
        </div>
        {this.state.Modals.map((modal) => {
          return (
            <Modal
              style={{ top: 40 }}
              width="80%"
              key={modal.name}
              title={modal.name}
              visible={modal.status == MODAL_STATUS.OPEN}
              footer={null}
              onCancel={() => {
                this.changeModalStatus(modal.type, MODAL_STATUS.CLOSE);
              }}
            >
              {modal.content}
            </Modal>
          );
        })}
      </div>
    );
  }
}
export default Scene;
