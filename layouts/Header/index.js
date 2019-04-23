import React, { Component } from 'react'
import { Popconfirm, message,Row, Col,Layout,Icon,Avatar,Statistic} from 'antd';
const { Header, } = Layout;
import img3 from '../../public/carousel-img/4.gif';
import Util from '../../src/components/timeDisplay';
import styles from "./index.less";
class TitleHeader extends Component {
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
    confirm = () => {
        message.success('对不起,暂时没有这项业务');
      };
    render () {
        return (
            <div>
            <Header style={{background:'#000',padding:0}}>
              <Row type="flex" justify="space-between">
               <Col span={4} className={styles.title} style={{width: '200px'}}>
                <img src="http://favicon.byi.pw/?url=lan.com" alt="标题"/>
                <span style={{ color: '#ffbf00' }}>空弦-等待是一种服务</span>
              </Col>
              <Col span={3} push={2} className={styles.titleContent}>
                <img src={img3} style={{width:'8rem',height:'3rem'}} />
                </Col>
                <Col span={3} push={2} className={styles.titleContent}>
                <img src={img3} style={{width:'8rem',height:'3rem'}} />
                </Col>
                <Col span={3} push={2} className={styles.titleContent}>
                <img src={img3} style={{width:'8rem',height:'3rem'}} />
                </Col>
                <Col span={5} push={1} className={styles.titleContents}>
                <span style={{color:'#ffbf00'}}>{'访问量'}</span>
                <Statistic
                  value={11.28}
                  precision={2}
                  valueStyle={{ color: '#3f8600',fontSize:'1.3rem' }}
                  prefix={<Icon type="arrow-up" />}
                  suffix="%"
                />
                </Col>
                <Col span={2}  className={styles.titleContents}>
                <span style={{color:'#ffbf00'}}>{'关注度'}</span>
                <Statistic
                  value={2.28}
                  precision={2}
                  valueStyle={{ color: '#cf1322',fontSize:'1.3rem' }}
                  prefix={<Icon type="arrow-down" />}
                  suffix="%"
                />
                </Col>
                <Col span={3} className={styles.titleRight}>
                <span style={{ fontSize: '.1rem', color: '#7265e6',lineHeight: '2rem' }}>
                <Avatar style={{ backgroundColor: '#ffbf00'}} size={16} icon="user" /> 用户:田家豪 
                <span style={{marginLeft:'.5rem',color:'#ffbf00'}}>
                <Popconfirm
                 placement="left"
                 title="是否要退出?"
                 onConfirm={this.confirm}
                >
                  (退出)
                </Popconfirm>
                </span>
                </span>
                <div style={{ fontSize: '.2rem', lineHeight: '1rem',color: '#7265e6' }}>{this.state.sysTime}</div>
                </Col>
              </Row>
              {/* <div>
                <img src="http://favicon.byi.pw/?url=lan.com" alt="标题"
                style={{ width: '1.2rem', marginRight: 2, paddingBottom: 6 }} />
                <span style={{ color: '#fff', fontSize: 15 }}>空弦-等待是一种服务</span>
              </div> */}
           


              
            </Header>
            {/* <div className={styles.clearfix}>
              <div className={styles.header}>
                <span style={{ color: '#fff', fontSize: 15 }}>空弦 -- 等待是一种服务</span>
                <div className={styles.headerLeft}>
                  <a className={styles.homePage}>首页内容</a>
                </div>
                <div className={styles.headerRight}>
                  <Popconfirm
                    placement="left"
                    title="是否要退出空弦空间,去百度?"
                    onConfirm={this.confirm}
                  >
                    欢迎,某某的到来 (退出)
                  </Popconfirm>
                </div>
              </div>
            </div> */}
          </div>
        )
    }
}

export default TitleHeader














// export default class Index extends Component {
// state = {}
//   componentWillMount() {
//     // if (this.props.location.pathname === '/login') {
//     //   return <SimpleLayout>{ this.props.children }</SimpleLayout>
//     // }
//     setInterval(() => {
//       let sysTime = Util.formateDate(new Date().getTime());
//       this.setState({
//         sysTime
//       })
//     }, 1000)
//   }
//   render() {
//     return (
//         <Header style={{ background: '#07031d', textAlign: 'center', padding: 0 }}>
//         <Row>
//           <Col span={8} pull={2} className={styles.normal}>
//             <div className={styles.title}>
//               <img src="http://favicon.byi.pw/?url=lan.com" alt="标题"
//                 style={{ width: '1.2rem', marginRight: 10, paddingBottom: 6 }} />
//                 空弦-等待是一种服务</div>
//           </Col>
//           <Col  span={10} push={6}>
//           <div>
//           <Progress 
//            type="dashboard"
//            percent={100}
//            strokeColor={'#faa02b'}
//            format={() => <span style={{fontSize:'.1rem',color:'#fff',borderBottom:'.2rem solid #108ee9',}}>首 页</span>}
//            width={50}
//            strokeWidth={4}
//            gapPosition={'right'}
//            />
//             <Progress 
//            style={{marginLeft:'-1.4rem'}}
//            strokeColor={'#faa02b'}
//            type="dashboard"
//            percent={100}
//            format={() => <span style={{fontSize:'.1rem',color:'#fff',borderBottom:'.2rem solid #108ee9'}}>内 容</span>}
//            width={50}
//            strokeWidth={4}
//            gapPosition={'left'}
//            />
//           </div>
//           </Col>
//           <Col span={3} push={2} className={styles.titleRight}>
//             <span style={{ fontSize: '.1rem', color: '#fff' }}><Icon type="user" style={{ fontSize: '1rem' }} />大神:田家豪</span>
//             <div style={{ fontSize: '.2rem', lineHeight: 1 }}>{this.state.sysTime}</div>
//           </Col>
//         </Row>
//       </Header>
//     )
//   }
// }
