import React, { Component } from "react";
import Result from "../components/Result";
import { Button } from "antd";
import Link from "umi/link";
import { connect } from 'dva';
@connect()
class IndexPage extends Component {
  
  
  componentWillMount() {
    this.props.dispatch({
      type:'user'
    })
  }
  
  
   render() {
    console.log(this.props,"!")
    return (
      <Result
        type="success"
        title="谢谢您我们的的关注，该功能正在火速开发中"
        description="我们非常重视您的需求以及对我们的的支持，如有任何意见，请联系我们会第一时间支持"
        actions={
          <div>
            <Link to="/">
              <Button type="primary">返回主页</Button>
            </Link>
          </div>
        }
      />
    );
  }
}

export default IndexPage;