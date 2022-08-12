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

import styles from "./index.module.styl";

const { Search } = Input;
const STATUS = {
  LIST: 1,
  EDIT: 2,
  ADD: 3,
};
class Admin extends Component {
  formRef = React.createRef();
  state = {
    status: STATUS.LIST,
  };

  render() {
    return (
      <div className={styles.scenicBody}>
        <Form
          name="新增或编辑"
          ref={this.formRef}
          key="新增或编辑"
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 20 }}
        >
          <Form.Item label="景区名称" name="name">
            <Input />
          </Form.Item>
          <Form.Item label="景区介绍" name="introduction">
            <Input.TextArea />
          </Form.Item>
          <Form.Item label="略缩图" name="img">
            <Upload
              listType="picture-card"
              fileList={
                this.state.scenicArea.img !== ""
                  ? [this.state.scenicArea.img]
                  : []
              }
            />
          </Form.Item>
          <div className={styles.buttonContainer}>
            <Button type="primary">确认提交</Button>
          </div>
        </Form>
      </div>
    );
  }
}
export default Admin;
