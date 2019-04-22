import React, { Component } from 'react'
import { connect } from 'dva';
import { Table, Tag, Popconfirm, Divider } from 'antd';
const colorMap = new Map([["true", 'green'], ["false", 'red']]);
const enableMap = new Map([["true", '休假中'], ["false", '工作中']]);
@connect(({ user, loading }) => ({ user, loading: loading.effects['user/queryUser'] }))
class Index extends Component {  

 componentDidMount() {
   this.props.dispatch({
       type:'user/queryUsers'
   })
 }
 
  render() {
    const {  user } = this.props;
    console.log(this.props,"!")
    return (
      <div>
         <Table
        rowKey="key"
        dataSource={user}
        columns={this.getTableColumns()}
        pagination={false}
      />
      </div>
    )
  }
  getTableColumns = () => {
    return [
      {
        title: '编号',
        dataIndex: 'key',
        key: 'key',
      },
      {
        title: '姓名',
        width: '20%',
        render: (text, record) => (
          <div>
            {record.name}
          </div>
        ),
        // eslint-disable-next-line arrow-body-style
        onCell: (record, index) => {
          return {
            onMouseEnter: () => {
              this.onMouseEnter(record, index);
            },
            onMouseLeave: () => {
              this.onMouseLeave();
            },
          };
        },
      },
      {
        title: '工作状态',
        dataIndex: 'enable',
        render: record => <Tag color={colorMap.get(record)}>{enableMap.get(record)}</Tag>,
      },
      {
        title: '操作',
        dataIndex: 'op',
        key: 'op',
        render: (text, record) => (
          <span>
            <a>查看</a>
            <Divider type="vertical" />
            <Popconfirm
              placement="topLeft"
              title="确定要删除用户么？"
              onConfirm={() => this.onStatusClick(record)}
              okText="是"
              cancelText="否"
            >
              <a>删除</a>
            </Popconfirm>
          </span>
        ),
      },
    ];
  };
}
export default Index