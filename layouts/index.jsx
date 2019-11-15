import { Component } from 'react';
import Link from 'umi/link';
import { Popconfirm, message, Menu, Icon, Layout } from 'antd';
import Header from './Header'
import styles from "./index.less";
const SubMenu = Menu.SubMenu;
const { Content, Sider } = Layout;
 class BasicLayout extends Component {
  
  render() {
    const { children } = this.props;
    return (
      <Layout>
        <Header />
        <Layout>
          <Sider>
            <div className={styles.Menu_title}> 空弦世界 -ZJ</div>
            <Menu className={styles.Menu} mode="inline">
              <SubMenu
                key="sub1"
                title={
                  <span>
                    <Icon type="global" />
                    <span>用户管理</span>
                  </span>
                }
              >
                <Menu.Item key="1">
                  <Link to="/">用户中心</Link>
                </Menu.Item>
                <Menu.Item key="2">
                  <Link to="/user">用户列表</Link>
                </Menu.Item>
                <Menu.Item key="3">
                  <Link to="/cards">用户订单</Link>
                </Menu.Item>
                <Menu.Item key="4">
                  <Link to="/todo">代办事项</Link>
                </Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub2"
                title={
                  <span>
                    <Icon type="snippets" />
                    <span>项目管理</span>
                  </span>
                }
              >
                <Menu.Item key="5">
                  <Link to="/">项目列表</Link>
                </Menu.Item>
                <Menu.Item key="6">
                  <Link to="/">项目客户</Link>
                </Menu.Item>
                <Menu.Item key="7">
                  <Link to="/">等级列表</Link>
                </Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub3"
                title={
                  <span>
                    <Icon type="audit" />
                    <span>部门管理</span>
                  </span>
                }
              >
                <Menu.Item key="8">
                  <Link to="/">行政部门</Link>
                </Menu.Item>
                <Menu.Item key="9">
                  <Link to="/">人事部门</Link>
                </Menu.Item>
                <Menu.Item key="10">
                  <Link to="/">财务部门</Link>
                </Menu.Item>
                <Menu.Item key="11">
                  <Link to="/todoList">后勤部门</Link>
                </Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <div className={styles.content}>
            <Content>
              <div style={{ padding: 20, background: '#fff' }}>{children}</div>
            </Content>
          </div>
        </Layout>
      </Layout>
    );
  }
}
export default BasicLayout