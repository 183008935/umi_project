import React, { Component } from 'react'
import { Layout,Icon, Row, Col, Progress} from 'antd';
const { Header, } = Layout;
import Util from '../../src/components/timeDisplay';
import styles from "./index.css";
export default class Index extends Component {
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
        <Header style={{ background: '#0b1836', textAlign: 'center', padding: 0 }}>
        <Row>
          <Col span={8} pull={2} className={styles.normal}>
            <div className={styles.title}>
              <img src="http://favicon.byi.pw/?url=lan.com" alt="标题"
                style={{ width: '1.2rem', marginRight: 10, paddingBottom: 6 }} />
                空弦-等待是一种服务</div>
          </Col>
          <Col  span={10} push={6}>
          <div>
          <Progress 
           type="dashboard"
           percent={100}
           strokeColor={'#faa02b'}
           format={() => <span style={{fontSize:'.1rem',color:'#fff',borderBottom:'.2rem solid #108ee9',}}>首 页</span>}
           width={50}
           strokeWidth={4}
           gapPosition={'right'}
           />
            <Progress 
           style={{marginLeft:'-1.4rem'}}
           strokeColor={'#faa02b'}
           type="dashboard"
           percent={100}
           format={() => <span style={{fontSize:'.1rem',color:'#fff',borderBottom:'.2rem solid #108ee9'}}>内 容</span>}
           width={50}
           strokeWidth={4}
           gapPosition={'left'}
           />
          </div>
          </Col>
          <Col span={3} push={2} className={styles.titleRight}>
            <span style={{ fontSize: '.1rem', color: '#fff' }}><Icon type="user" style={{ fontSize: '1rem' }} />某某某</span>
            <div style={{ fontSize: '.2rem', lineHeight: 1 }}>{this.state.sysTime}</div>
          </Col>
        </Row>
      </Header>
    )
  }
}
