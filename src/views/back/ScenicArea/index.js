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
import MyForm from "./Form";
import MyList from "./List";
import styles from "./index.module.styl";

const { Search } = Input;
const STATUS = {
  LIST: 1,
  EDIT: 2,
  ADD: 3,
};
class ScenicArea extends Component {
  state = {
    status: STATUS.LIST,
  };
  constructor(props) {
    super(props);
    this.changeTable = this.changeTable.bind(this);
    this.selectRow = this.selectRow.bind(this);
  }

  changeTable(status) {
    console.log(this);
    console.log(status);
    this.setState({ status: status });
  }

  //选中行数据时调用
  selectRow(record) {
    this.setState({
      currentRow: JSON.parse(JSON.stringify(record)),
    });
  }

  render() {
    return (
      <div className={styles.scenicBody}>
        <div className={styles.scenicBox}>
          <div className={styles.scenicContent}>
            {this.state.status == STATUS.LIST ? (
              <MyList
                changeTable={this.changeTable}
                selectRow={this.selectRow}
              />
            ) : (
              <MyForm
                key={Date.now()}
                status={this.state.status}
                changeTable={this.changeTable}
                scenicArea={this.state.currentRow}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}
export default ScenicArea;
