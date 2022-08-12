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
  Row,
  Tooltip,
  Card,
} from "antd";
import { Link } from "react-router-dom";
import { EditOutlined, DeleteOutlined, PlusOutlined } from "@ant-design/icons";

import styles from "./index.module.styl";

const uploadButton = (
  <div>
    <PlusOutlined />
    <div style={{ marginTop: 8 }}>上传</div>
  </div>
);
const { Search } = Input;
const STATUS = {
  LIST: 1,
  EDIT: 2,
  ADD: 3,
};

class myForm extends Component {
  formRef = React.createRef();
  state = {};
  static getDerivedStateFromProps(nextProps, preState) {
    let oldData = JSON.stringify(preState);
    let newData = JSON.stringify(nextProps);
    console.log();
    if (oldData !== newData) {
      return nextProps;
    }
    return null;
  }

  render() {
    return (
      <div className={styles.scenicBody}>
        <Row>
          <div style={{ float: "left", marginBottom: "10px" }}>
            <Link className={styles.returnButton} to="/admin/scenicArea">
              景区景点管理
            </Link>{" "}
            -
            <Link
              onClick={() => {
                this.props.changeTable(STATUS.LIST);
              }}
              className={styles.returnButton}
            >
              景点管理
            </Link>{" "}
            - {this.props.status == STATUS.EDIT ? "编辑景区" : "新增景区"}
          </div>
        </Row>
        <div>
          {" "}
          <Form
            name="新增或编辑"
            ref={this.formRef}
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 20 }}
          >
            <Form.Item label="景点名称" name="name">
              <Input
                defaultValue={
                  this.props.status == STATUS.EDIT
                    ? this.state.scenicSpot?.name
                    : ""
                }
              />
            </Form.Item>

            {this.state.scenicSpot?.img !== "" &&
            this.props.status == STATUS.EDIT ? (
              <Form.Item label="全景图" name="origin">
                <img
                  style={{ width: 100, height: 100 }}
                  src={
                    this.props.status == STATUS.EDIT
                      ? this.state.scenicSpot?.img
                      : ""
                  }
                />
              </Form.Item>
            ) : (
              ""
            )}

            <Form.Item label="上传全景图" name="img">
              <Upload listType="picture-card">{uploadButton}</Upload>
            </Form.Item>
            <Form.Item label="导游内容（中文）" name="ChineseContent">
              <Input.TextArea
                defaultValue={
                  this.props.status == STATUS.EDIT
                    ? this.state.scenicSpot?.ChineseContent
                    : ""
                }
              />
            </Form.Item>
            <Form.Item label="导游内容（英文）" name="EnglishContent">
              <Input.TextArea
                defaultValue={
                  this.props.status == STATUS.EDIT
                    ? this.state.scenicSpot?.EnglishContent
                    : ""
                }
              />
            </Form.Item>
            <div className={styles.buttonContainer}>
              <Button type="primary">确认提交</Button>
            </div>
          </Form>
        </div>
      </div>
    );
  }
}
export default myForm;
