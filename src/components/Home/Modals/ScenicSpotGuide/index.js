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
  Divider,
} from "antd";
import {
  UserOutlined,
  SettingOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons";
import {
  getIntroduction,
  getIntroductionWithAudio,
  getEnglishIntroduction,
  uploadEnglishPractice,
  uploadContentInnovation,
} from "@/services/front/controller";
import styles from "./index.module.styl";
const { Search } = Input;
//此为弹窗2
class ScenicSpotGuide extends Component {
  state = {
    playing: false,
  };

  audio = new Audio();
  componentDidMount() {
    getIntroductionWithAudio().then((result) => {
      this.setState({ content: result.data.content });
      this.audio = new Audio(result.data.audio);
    });
  }

  changeAudioStatus() {
    if (this.state.playing) {
      this.audio?.pause();
      this.setState({ playing: false });
    } else {
      try {
        this.audio?.play();
      } catch (error) {
        message.error("音频无法播放");
      }
      this.setState({ playing: true });
    }
  }

  render() {
    return (
      <div style={{ displayContent: "center" }}>
        <div dangerouslySetInnerHTML={{ __html: this.state.content }}></div>
        <Divider />
        <div className={styles.buttonContainer}>
          <Button
            type={this.state.playing ? "dashed" : "primary"}
            onClick={() => this.changeAudioStatus()}
          >
            {this.state.playing ? "暂停" : "语音讲解"}
          </Button>
        </div>
      </div>
    );
  }
}
export default ScenicSpotGuide;
