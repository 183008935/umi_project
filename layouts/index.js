import { Component } from 'react';
import Link from 'umi/link';
import { Layout, Menu, Icon, Row, Col, Progress,Carousel} from 'antd';
import Header from './Header'
import styles from "./index.less";
const { Footer, Sider, Content } = Layout;
const { SubMenu } = Menu;
// const lunboSetting = {
//     dots: false,
//     lazyLoad: true,
//     autoplay:true
//    };
 class BasicLayout extends Component {
  
  render() {
    return (
      <Layout>
         <Header/>
        <Layout>
      <Sider width={200} style={{ background: '#fff' }}>
      <div key={1} className={styles.Menu_title}>空弦世界</div>
      {/* <Carousel  {...lunboSetting} ref={el => (this.slider = el)}>
       
        <img src={img3}  className ={styles.imgs} key={2}/>
        <img src={png2}  className ={styles.imgs} key={3}/>   
      </Carousel> */}
          <Menu
            mode="inline"
            defaultOpenKeys={['sub1']}
          >
            <SubMenu key="sub1" 
              title={<span><Icon type="global" />总项目</span>}>
              <Menu.Item key="1"><Link to="/">项目管理</Link></Menu.Item>
              <Menu.Item key="2"><Link to="/user">用户列表</Link></Menu.Item>
              <Menu.Item key="3"><Link to="/cards">变更用户</Link></Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout >
           <div className={styles.content}>
            <Content style={{ padding:'1rem',background: "#fff", minHeight: '32rem' }}>
                {this.props.children}
            </Content>
          </div>
        </Layout>
      </Layout>
      <Layout >
        <Footer style={{ textAlign: 'center',  width: '100%',background:'#0b1836',color:'#fff',lineHeight:'1rem'}}>
        发现 | 帮助中心 | 数据安全 |关于我们 | 服务协议 | 反馈
        <br/>
        <a href='https://github.com/183008935/umi_app' target="_blank" style={{fontSize:'.1rem'}}> &copy;2019-04-22 田家豪</a>
        </Footer>
        </Layout>
      </Layout>
    )
  }
}
export default BasicLayout