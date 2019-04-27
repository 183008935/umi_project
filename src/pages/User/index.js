import React, { Component } from 'react'
import { connect } from 'dva';
import {Form,InputNumber,Input,Select, Table, Tag, Popconfirm, Divider,message,Card,Button,Modal} from 'antd';
const colorMap = new Map([["true", 'green'], ["false", 'red']]);
const enableMap = new Map([["true", '休假中'], ["false", '工作中']]);
const { Option } = Select;
const formItemLayout = {
  labelCol: { span: 10, },
  wrapperCol: { span: 13,pull:3 },
};
@connect(({ user, loading,confirmLoading }) => ({ user:user.userList, loading: loading.effects['user/deleteUser'],confirmLoading:loading.effects['user/addUser']}))
class Index extends Component {  
  state={
    visible:false
  }
 componentDidMount() {
   this.props.dispatch({
       type:'user/queryList'
   })
 }
 /**
    * 删除
    */
   onStatusClick = (record) =>{
    const { dispatch } = this.props;
      dispatch({
          type: 'user/deleteUser',
          payload: record._id,
          callback:(response=>{
            if (response) {
              dispatch({type:'user/queryList'})
              message.success('删除成功')
            } else {
              message.error('删除失败')
            }
          })
      })
  }
  render() {
    const { user,loading,form,confirmLoading } = this.props;
    return (
    <Card title="用户列表" bordered={false} extra={<Button type="primary" onClick={this.showModal}>新增用户</Button>}>
        <Table
        rowKey="key"
        dataSource={user}
        columns={this.getTableColumns()}
        pagination={false}
        loading={loading}
      />
      <Modal
          title="新增用户"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          confirmLoading={confirmLoading}
          okText="确认"
          cancelText="取消">
           <Form {...formItemLayout} >
           <Form.Item label='姓名' >
             {form.getFieldDecorator('name',{
               rules: [{ required: true, message: '姓名不能为空' }]
             })(
              <Input placeholder="请输入姓名" />
             )}
        </Form.Item>
           <Form.Item label={'年龄'} >
             {form.getFieldDecorator('key',{
               rules: [{ required: true, message: '年龄不能为空' }]
             })(
              <InputNumber placeholder="请输入年龄" min={1} style={{width:'100%'}} />
             )}
        </Form.Item>
        <Form.Item label={'工作状态'} >
             {form.getFieldDecorator('enable',{
               rules: [{ required: true, message: '工作状态不能为空' }]
             })(
              <Select placeholder="请选择状态">
          <Option value="true">工作中</Option>
          <Option value="false">休假中</Option>
        </Select>
             )}
        </Form.Item> 
           </Form>
        </Modal>
    </Card>
    )
  }
  handleOk = () => {
    const { dispatch } = this.props;
    this.props.form.validateFields((err,values)=>{
     if(!err){
      dispatch({
        type: 'user/addUser',
        payload: values,
        callback:(response=>{
          if (response) {
            dispatch({type:'user/queryList'})
            this.setState({visible: false});
            message.success('操作成功')
          } else {
            message.error('删除失败')
          }
        })
    })
     }
    })
   
  }

  handleCancel = () => {
    this.props.form.resetFields();
    this.setState({
      visible: false,
    });
  }
  showModal = () => {
    this.props.form.resetFields();
    this.setState({
      visible: true,
    });
  }
  getTableColumns = () => {
    return [
      {
        title: '姓名',
        width: '20%',
        render: (text, record) => (
          <div>
            {record.name}
          </div>
        ),
        // eslint-disable-next-line arrow-body-style
        // onCell: (record, index) => {
        //   return {
        //     onMouseEnter: () => {
        //       this.onMouseEnter(record, index);
        //     },
        //     onMouseLeave: () => {
        //       this.onMouseLeave();
        //     },
        //   };
        // },
      },
      {
        title: '年龄',
        dataIndex: 'key',
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
export default Form.create()(Index);
