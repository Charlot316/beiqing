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
import { getDetailedGrade, getOverallGrade } from "@/services/front/grade";
import styles from "./index.module.styl";
const { Search } = Input;

class Header extends Component {
  state = { record: [], grade: 0, name: "", status: "overall" };
  componentDidMount() {
    this.getOverall();
  }

  overallColumn = [
    {
      title: "名称",
      dataIndex: "name",
      align: "center",
      key: "name",
    },
    {
      title: "成绩",
      dataIndex: "grade",
      align: "center",
      key: "grade",
    },
    {
      title: "操作",
      key: "action",
      align: "center",
      render: () => (
        <Space size="middle">
          <a onClick={() => this.changeTable()}>查看明细</a>
        </Space>
      ),
    },
  ];

  detailedColumn = [
    {
      title: "名称",
      dataIndex: "name",
      align: "center",
      key: "name",
    },
    {
      title: "成绩",
      dataIndex: "grade",
      align: "center",
      key: "grade",
    },
  ];

  getOverall() {
    getOverallGrade().then((result) => {
      this.setState({
        records: result.data.records,
        grade: result.data.grade,
        name: result.data.name,
      });
    });
  }

  //选中行数据时调用
  async selectRow(record) {
    await this.setState({
      currentRow: JSON.parse(JSON.stringify(record)),
    });
  }

  getDetailed() {
    getDetailedGrade().then((result) => {
      this.setState({
        records: result.data.records,
      });
    });
  }

  changeTable() {
    if (this.state.status == "overall") {
      this.getDetailed();
      this.setState({ status: "detailed" });
    } else {
      this.getOverall();
      this.setState({ status: "overall" });
    }
  }

  render() {
    return (
      <div>
        {this.state.status == "overall" ? (
          <div>
            <div>
              {this.state.name}的个人总成绩：{this.state.grade}
            </div>
            <div>
              <Table
                columns={this.overallColumn}
                pagination={false}
                dataSource={this.state.records}
                rowKey={(record) => record.id}
                onRow={(record) => ({
                  onMouseEnter: () => {
                    this.selectRow(record);
                  },
                })}
              />
            </div>
          </div>
        ) : (
          <div>
            <div
              onClick={() => {
                this.changeTable();
              }}
            >
              <span
                onClick={() => {
                  this.changeTable();
                }}
                className={styles.returnButton}
              >
                景区成绩
              </span>{" "}
              - 景点成绩
            </div>
            <div>
              {" "}
              <Table
                columns={this.detailedColumn}
                pagination={false}
                dataSource={this.state.records}
                rowKey={(record) => record.id}
                onRow={(record) => ({
                  onMouseEnter: () => {
                    this.selectRow(record);
                  },
                })}
              />
            </div>
          </div>
        )}
      </div>
    );
  }
}
export default Header;
