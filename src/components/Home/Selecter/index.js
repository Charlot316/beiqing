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
  UserOutlined,
  SettingOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons";
import styles from "./index.module.styl";
import Image from "./Image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper-bundle.css";
import "./index.css";
import { Keyboard, Navigation } from "swiper";
const { Search } = Input;

class Selecter extends Component {
  state = {};
  list = [{}];
  constructor(props) {
    super();
    this.list = props.list;
  }

  static getDerivedStateFromProps(nextProps, preState) {
    const oldData = JSON.stringify(preState);
    const newData = JSON.stringify(nextProps);
    if (oldData !== newData) {
      return nextProps;
    }
    return null;
  }

  render() {
    return (
      <div className={styles.selecterBody}>
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            260: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            400: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            550: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 6,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 8,
              spaceBetween: 20,
            },
          }}
          navigation={true}
          loop={true}
          keyboard={{
            enabled: true,
          }}
          modules={[Keyboard, Navigation]}
        >
          {this.state.list?.map((image) => {
            return (
              <SwiperSlide key={image.name}>
                <Image image={image} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    );
  }
}
export default Selecter;
