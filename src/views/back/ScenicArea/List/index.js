import React, { Component } from "react";
import { Link } from "react-router-dom";
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
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { getScenicAreaList } from "@/services/back/scenicArea";
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
      title: "景区名称",
      dataIndex: "name",
      align: "center",
      key: "name",
    },
    {
      title: "景点数量",
      dataIndex: "scenicSpotCount",
      align: "center",
      key: "scenicSpotCount",
    },
    {
      title: "创建时间",
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
          <Link to="/admin/scenicSpot">查看景点</Link>
          <a onClick={() => this.props.changeTable(STATUS.EDIT)}>编辑</a>
        </Space>
      ),
    },
  ];
  formRef = React.createRef();
  state = {};
  componentDidMount() {
    getScenicAreaList().then((result) => {
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
              <span>景区景点管理</span>{" "}
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
                新增景区
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
