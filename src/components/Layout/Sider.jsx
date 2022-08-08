import React, { Component } from "react";
import { Layout, Menu, Affix } from "antd";
import { Link } from "react-router-dom";
import {
  SettingOutlined,
  MenuFoldOutlined,
  CompassOutlined,
  BookOutlined,
  QuestionCircleOutlined,
  TagsOutlined,
  CodeOutlined,
  BarChartOutlined,
  RiseOutlined,
  TeamOutlined,
  ProfileOutlined,
  LineChartOutlined,
  DeliveredProcedureOutlined,
  ReadOutlined,
  ClusterOutlined,
  WalletOutlined,
  ShopOutlined,
  GiftOutlined,
  FieldNumberOutlined,
  ContainerOutlined,
  LinkOutlined,
} from "@ant-design/icons";
import menus from "../../consts/menus";
import { MANAGE_TYPE, TEACHER_TYPE } from "../../consts/views/login";
import { MANAGE_MENUS, STUDENT_MENUS, TEACHER_MENUS } from "../../consts/menus";
import styles from "./Sider.module.styl";
import { getToken } from "../../utils/filter";

const { Sider } = Layout;
const { SubMenu } = Menu;
export default class SiderCustom extends Component {
  constructor(props) {
    super(props);
    const { collapsed } = props;
    let menus = {};
    let userType = getToken("userType");
    menus = MANAGE_MENUS;
    this.state = {
      menus,
      collapsed,
      firstHide: false, // 第一次先隐藏暴露的子菜单
      selectedKey: "", // 选择的路径
      openKey: "", // 打开的路径（选择的上一层）
    };
  }
  componentDidMount() {
    this.forceUpdate();
  }
  renderIcon = (icon) => {
    return {
      MenuFoldOutlined: <MenuFoldOutlined />,
      setting: <SettingOutlined />,
      nav: <CompassOutlined />,
      wiki: <BookOutlined />,
      question: <QuestionCircleOutlined />,
      category: <TagsOutlined />,
      code: <CodeOutlined />,
      operate: <BarChartOutlined />,
      sales: <RiseOutlined />,
      customer: <TeamOutlined />,
      order: <ProfileOutlined />,
      market: <LineChartOutlined />,
      delivery: <DeliveredProcedureOutlined />,
      files: <ReadOutlined />,
      organization: <ClusterOutlined />,
      stay: <WalletOutlined />,
      goods: <ShopOutlined />,
      marketActivity: <GiftOutlined />,
      marketNum: <FieldNumberOutlined />,
      resource: <ContainerOutlined />,
      course: <LinkOutlined />,
    }[icon];
  };

  // 查找第n个字符的位置
  findStr = (str, charStr, num) => {
    let position = str.indexOf(charStr);
    for (let i = 0; i < num; i++) {
      position = str.indexOf(charStr, position + 1);
    }
    return position;
  };

  setMenuOpen = (props) => {
    const { path } = props;
    this.setState({
      openKey: path?.slice(0, this.findStr(path, "/", 2)),
      selectedKey: path,
    });
  };

  onCollapse = (collapsed) => {
    this.setState({
      collapsed: true,
      firstHide: collapsed,
    });
  };

  menuClick = (e) => {
    this.setState({
      selectedKey: e.key,
    });
  };

  openMenu = (v) => {
    this.setState({
      openKey: v[v.length - 1],
      firstHide: false,
    });
  };

  render() {
    const { firstHide, openKey, selectedKey } = this.state;
    const { collapsed } = this.props;
    let userType = getToken("userType");
    console.log("firstHide", openKey);
    return (
      <Affix offsetTop={0}>
        <Sider
          trigger={null}
          collapsed={collapsed}
          className={styles.sider}
          theme="light"
        >
          <div className={styles.logo}>
            <div className={collapsed ? styles.collapsed : styles.spread}>
              <div className={styles.logoInside}></div>
            </div>
            <span
              className={collapsed ? styles.wordCollapsed : styles.wordSpread}
            >
              VR后台管理
            </span>
          </div>
          <Menu
            mode="inline"
            selectedKeys={[selectedKey]}
            onClick={this.menuClick}
            onOpenChange={this.openMenu}
            openKeys={firstHide ? [] : [openKey]}
          >
            {this.state.menus?.map((value) => {
              return (
                <SubMenu
                  key={value.path}
                  title={
                    <span>
                      {this.renderIcon(value.icon)}
                      <span>{value.name}</span>
                    </span>
                  }
                >
                  {value.childMenu
                    ? value.childMenu.map((val) => {
                        return (
                          <Menu.Item key={val.path}>
                            <Link to={val.path}>
                              <span>{val.name}</span>
                            </Link>
                          </Menu.Item>
                        );
                      })
                    : null}
                </SubMenu>
              );
            })}
          </Menu>
        </Sider>
      </Affix>
    );
  }
}
