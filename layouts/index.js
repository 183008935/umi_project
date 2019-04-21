import { Component } from 'react';
import { Layout, Menu, Icon, Row, Col, Progress} from 'antd';
import Util from '../src/components/timeDisplay'
import styles from "./index.css";
const { Header, Footer, Sider, Content } = Layout;
export default class BasicLayout extends Component {
  state = {}
  componentWillMount() {
    // if (this.props.location.pathname === '/login') {
    //   return <SimpleLayout>{ this.props.children }</SimpleLayout>
    // }
    setInterval(() => {
      let sysTime = Util.formateDate(new Date().getTime());
      this.setState({
        sysTime
      })
    }, 1000)

  }
  render() {
    return (
      <Layout>
        <Header style={{ background: '#1a1957', textAlign: 'center', padding: 0 }}>
          <Row>
            <Col span={7} pull={1} className={styles.normal}>
              <div className={styles.title}>
                <img src="http://favicon.byi.pw/?url=lan.com" alt="标题"
                  style={{ width: '1.2rem', marginRight: 10, paddingBottom: 6 }} />空弦 -- 等待是一种服务</div>
            </Col>
            <Col className={styles.titleConent} span={11} pull={2}>
            <div>
            <Progress type="circle"
             percent={100} 
             format={() => <span style={{fontSize:'.1rem',color:'#fff'}}>首页内容</span>}
             strokeColor={'#faa02b'}
             width={62}
             strokeWidth={3}
             />
              <Progress 
              style={{marginLeft:'2rem'}}
             type="circle"
             percent={100} 
             format={() => <span style={{fontSize:'.1rem',color:'#fff'}}>管理内容</span>}
             width={62}
             strokeWidth={3}
             />
            </div>
           
            </Col>
            <Col span={6} push={1} className={styles.titleRight}>
              <span style={{ maiginRight: '.2rem', fontSize: '.1rem', color: '#fff' }}><Icon type="user" style={{ fontSize: '1rem' }} />某某某</span>
              <div style={{ fontSize: '.2rem', lineHeight: 1 }}>{this.state.sysTime}</div>
            </Col>
          </Row>

        </Header>
        <Layout >

          {/* <Content style={{ margin: '24px 16px 0' }}>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              {this.props.children}
            </div>
          </Content> */}
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    )
  }
}