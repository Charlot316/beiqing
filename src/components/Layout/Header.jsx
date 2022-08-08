import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Layout, Menu, Avatar, Affix, Modal, message, Form, Input } from "antd";
import { MenuUnfoldOutlined } from "@ant-design/icons";
import Cookie from "@/utils/cookie.js";
import styles from "./Header.module.styl";
import { MANAGE_TYPE, TEACHER_TYPE } from "../../consts/views/login";
import {
  studentLogout,
  teacherLogout,
  adminLogout,
  editStudentPwd,
  editTeacherPwd,
  editAdminPwd,
} from "../../services/header";
import { getToken } from "../../utils/filter";

const { Header } = Layout;
const { SubMenu } = Menu;

class HeaderCustom extends Component {
  // 退出登录
  constructor(props) {
    super();
  }

  logout = () => {
    Cookie.delete("username");
    Cookie.delete("password");
    Cookie.delete("userType");
    localStorage.setItem("isLogin", false);
    localStorage.setItem("username", undefined);
    localStorage.setItem("userType", undefined);
    this.props.history.push("/login");
  };

  render() {
    const { collapsed, toggle, username } = this.props;
    return (
      <div>
        <Affix offsetTop={0}>
          <Header className={styles.header}>
            <MenuUnfoldOutlined
              className={styles.trigger}
              type={collapsed ? "menu-unfold" : "menu-fold"}
              onClick={toggle}
            />
            <Menu mode="horizontal" className={styles.menu}>
              <SubMenu
                key="header"
                title={
                  <span>
                    <Avatar
                      className={styles.avatar}
                      src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png"
                    />
                    {username}
                  </span>
                }
              >
                <Menu.Item
                  onClick={this.logout}
                  key="logout"
                  style={{ textAlign: "center" }}
                >
                  <span>退出</span>
                </Menu.Item>
              </SubMenu>
            </Menu>
          </Header>
        </Affix>
      </div>
    );
  }
}

export default withRouter(HeaderCustom);
