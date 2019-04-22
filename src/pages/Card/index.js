// import React, { Component } from 'react';
// import { Card ,Button } from 'antd';
// import { connect } from 'dva';
// @connect(({ user, loading }) => ({ user, loading: loading.effects['user/queryUser'] }))
// export default class PuzzleCardsPage extends Component {
//     componentDidMount(){
//         this.props.dispatch({
//       type: 'user/queryUsers',
//      })
//     }
//   render() {
//       console.log(this.props)
//     return (
//       <div>
//         1
//         <div>
//           <Button onClick={() => this.props.onClickAdd({
//             setup: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
//             punchline: 'here we use dva',
//           })}> 添加卡片 </Button>
//         </div>
//       </div>
//     );
//   }
// }