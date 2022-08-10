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
import Recorder from "js-audio-recorder";
const { Search } = Input;
//此为弹窗2

let recorder = null;
class EnglishTourGuide extends Component {
  state = {
    recording: false,
    recordFinished: false,
    playing: false,
    grade: 0,
  };

  componentDidMount() {
    getEnglishIntroduction().then((result) => {
      this.setState({ content: result.data.content });
    });
  }

  recordButton() {
    if (this.state.recording) {
      recorder.stop();
      var params = new FormData();
      params.append("audio", recorder.getWAVBlob);
      uploadEnglishPractice().then((result) => {
        this.setState({ content: result.data.content });
        this.setState({ grade: result.data.grade });
      });
      this.setState({ recording: false, recordFinished: true });
    } else {
      if (recorder !== null) {
        recorder.destroy();
        recorder = null;
      }
      recorder = new Recorder();
      recorder.start();
      this.setState({ recording: true, recordFinished: false });
    }
  }

  playButton() {
    if (this.state.playing) {
      recorder.pause();
      this.setState({ playing: false });
    } else {
      recorder.play();
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
            type={this.state.recording ? "dashed" : "primary"}
            onClick={() => this.recordButton()}
          >
            {this.state.recording ? "停止录音" : "录音练习"}
          </Button>
          {this.state.recordFinished ? (
            <Button
              className={styles.playButton}
              type={this.state.playing ? "dashed" : "primary"}
              onClick={() => this.playButton()}
            >
              {this.state.playing ? "暂停播放" : "播放录音"}
            </Button>
          ) : (
            ""
          )}
          {this.state.recordFinished ? (
            <span style={{ float: "right" }}>{this.state.grade}</span>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}
export default EnglishTourGuide;
