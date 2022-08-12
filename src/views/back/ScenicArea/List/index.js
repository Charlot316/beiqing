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
      title: "景点名称",
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
          <a onClick={() => {}}>查看景点</a>
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
  //选中行数据时调用
  async selectRow(record) {
    await this.setState({
      currentRow: JSON.parse(JSON.stringify(record)),
    });
  }
  getList() {}
  render() {
    return (
      <div className={styles.scenicBody}>
        {" "}
        <Table
          columns={this.listColumn}
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
    );
  }
}
export default List;
