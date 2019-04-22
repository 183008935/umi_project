import React from 'react'
import styles from './404.less';
import Result from "../components/Result";
import { Button } from 'antd';
import Link from "umi/link";
import { connect } from 'dva';
export default connect()(({ dispatch }) => {
  return (
  <div style={{marginTop:'5rem'}}> 
    <Result
        type="error"
        title="404 Not Found"
        actions={
          <div>
            <Link to="/">
              <Button type="primary">返回主页</Button>
            </Link>
          </div>
        }
      />
  </div>
  );
});