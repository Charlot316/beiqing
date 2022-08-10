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

let ChineseRecorder = null;
let EnglishRecorder = null;
class ContentInnovation extends Component {
  formRef = React.createRef(); //编辑信息表单
  state = {
    Chinese: {
      recording: false,
      recordFinished: false,
      playing: false,
    },
    English: {
      recording: false,
      recordFinished: false,
      playing: false,
    },
  };

  recordButton(type) {
    var recorder;
    if (type == "Chinese") {
      recorder = ChineseRecorder;
    } else {
      recorder = EnglishRecorder;
    }
    if (this.state[type]["recording"]) {
      recorder.stop();
      this.state[type]["recording"] = false;
      this.state[type]["recordFinished"] = true;
      this.forceUpdate();
    } else {
      if (recorder !== null) {
        recorder.destroy();
        recorder = null;
      }
      if (type == "Chinese") {
        ChineseRecorder = new Recorder();
        recorder = ChineseRecorder;
      } else {
        EnglishRecorder = new Recorder();
        recorder = EnglishRecorder;
      }

      recorder.start();
      this.state[type]["recording"] = true;
      this.state[type]["recordFinished"] = false;
      this.forceUpdate();
    }
  }

  playButton(type) {
    var recorder;
    if (type == "Chinese") {
      recorder = ChineseRecorder;
    } else {
      recorder = EnglishRecorder;
    }
    if (this.state[type]["playing"]) {
      recorder.pause();
      this.state[type]["playing"] = false;
      this.forceUpdate();
    } else {
      recorder.play();
      this.state[type]["playing"] = true;
      this.forceUpdate();
    }
  }

  render() {
    return (
      <div style={{ displayContent: "center" }}>
        <Form
          name="内容创新"
          ref={this.formRef}
          key="内容创新"
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 20 }}
        >
          <Form.Item
            label="中文导游内容"
            name="ChineseContent"
            rules={[{ required: true, message: "请输入中文导游内容" }]}
          >
            <Input.TextArea />
          </Form.Item>
          <Form.Item label="中文录音内容" name="ChineseAudio">
            <div className={styles.formButtonContainer}>
              <Button
                type={this.state.Chinese.recording ? "dashed" : "primary"}
                onClick={() => this.recordButton("Chinese")}
              >
                {this.state.Chinese.recording ? "停止录音" : "开始录音"}
              </Button>
              {this.state.Chinese.recordFinished ? (
                <Button
                  className={styles.playButton}
                  type={this.state.Chinese.playing ? "dashed" : "primary"}
                  onClick={() => this.playButton("Chinese")}
                >
                  {this.state.Chinese.playing ? "暂停播放" : "播放录音"}
                </Button>
              ) : (
                ""
              )}
            </div>
          </Form.Item>
          <Form.Item
            label="英文导游内容"
            name="EnglishContent"
            rules={[{ required: true, message: "请输入英文导游内容" }]}
          >
            <Input.TextArea />
          </Form.Item>
          <Form.Item label="英文录音内容" name="EnglishAudio">
            <div className={styles.formButtonContainer}>
              <Button
                type={this.state.English.recording ? "dashed" : "primary"}
                onClick={() => this.recordButton("English")}
              >
                {this.state.English.recording ? "停止录音" : "开始录音"}
              </Button>
              {this.state.English.recordFinished ? (
                <Button
                  className={styles.playButton}
                  type={this.state.English.playing ? "dashed" : "primary"}
                  onClick={() => this.playButton("English")}
                >
                  {this.state.English.playing ? "暂停播放" : "播放录音"}
                </Button>
              ) : (
                ""
              )}
            </div>
          </Form.Item>
          <Divider />
          <div className={styles.buttonContainer}>
            <Button type="primary">确认提交</Button>
          </div>
        </Form>
      </div>
    );
  }
}
export default ContentInnovation;
