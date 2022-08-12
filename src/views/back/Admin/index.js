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

import Header from "@/components/Admin/Header";
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

import Routes from "@/routes/subRoutes";
import {
  getImageList,
  getBackgroundImage,
  getBannerWords,
} from "@/services/front/home";
import { Route } from "react-router-dom";
const { Search } = Input;
class Admin extends Component {
  render() {
    return (
      <div className={styles.adminBody}>
        <div className={styles.adminHeader}>
          <Header />
        </div>
        <div className={styles.adminContent}>
          <Routes />
        </div>
      </div>
    );
  }
}
export default Admin;
