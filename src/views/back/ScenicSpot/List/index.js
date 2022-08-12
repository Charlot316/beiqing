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
  Row,
  Col,
} from "antd";
import { Link } from "react-router-dom";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { getScenicSpotList } from "@/services/back/scenicSpot";
import styles from "./index.module.styl";

const { Search } = Input;
const STATUS = {
  LIST: 1,
  EDIT: 2,
  ADD: 3,
};
class List extends Component {
  listColumn = [
    {
      title: "景点名称",
      dataIndex: "name",
      align: "center",
      key: "name",
    },
    {
      title: "所属景区",
      dataIndex: "scenicArea",
      align: "center",
      key: "scenicArea",
    },
    {
      title: "上传时间",
      key: "createTime",
      align: "center",
      dataIndex: "createTime",
    },
    {
      title: "操作",
      key: "action",
      align: "center",
      render: () => (
        <Space size="middle">
          <a onClick={() => this.props.changeTable(STATUS.EDIT)}>编辑</a>
        </Space>
      ),
    },
  ];
  formRef = React.createRef();
  state = {};
  componentDidMount() {
    getScenicSpotList().then((result) => {
      this.setState({ records: result.data.records });
    });
  }
  getList() {}
  render() {
    return (
      <div className={styles.scenicBody}>
        {" "}
        <Row style={{ marginBottom: "10px" }}>
          <Col span={12}>
            {" "}
            <div style={{ float: "left" }}>
              <Link className={styles.returnButton} to="/admin/scenicArea">
                景区景点管理
              </Link>{" "}
              -<Link className={styles.returnButton}>景点管理</Link>{" "}
            </div>
          </Col>
          <Col span={12}>
            <div style={{ float: "right" }}>
              <span
                onClick={() => {
                  this.props.changeTable(STATUS.ADD);
                }}
                className={styles.returnButton}
              >
                新增景点
              </span>{" "}
            </div>
          </Col>
        </Row>
        <Table
          columns={this.listColumn}
          pagination={false}
          dataSource={this.state.records}
          rowKey={(record) => record.id}
          onRow={(record) => ({
            onMouseEnter: () => {
              this.props.selectRow(record);
            },
          })}
        />
      </div>
    );
  }
}
export default List;
