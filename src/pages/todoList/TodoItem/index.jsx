
import React, { Component } from 'react'
import styles from './index.less';
import { connect } from 'dva';
@connect()
 class TodoItem extends Component {
   state={
    inEdit:false,//初始值是false
    val:''//让值可以控制
   }
     onDestroy = (record) =>{
        const { dispatch } = this.props;
          dispatch({
              type: 'todoList/deleteTodo',
              payload: record._id,
              callback:(response=>{
                if (response) {
                  dispatch({type:'todoList/queryList'})
                  message.success('删除成功')
                } else {
                  message.error('删除失败')
                }
              })
          })
      }
        onToggle =(item)=>{
        const { dispatch } = this.props;
          dispatch({
              type: 'todoList/editStatus',
              payload: item,
              callback:(response=>{
                if (response) {
                  dispatch({type:'todoList/queryList'})
                  message.success('状态更新成功')
                } else {
                  message.error('状态更新失败')
                }
              })
          })
      }
      onEdit=()=>{ 
        let  { todos }=this.props //从他的属性提出内容
         this.setState({
             inEdit:true,
             val:todos.value
         },()=>{this.refs.edit.focus()});//改变初始值可以编辑的状态 并获得焦点  
     }
     inputValue=(ev)=>{
      this.setState({
        val:ev.target.value
      })
     }
     onBlur =(todos)=>{
      const { dispatch } = this.props;

      let { val  } = this.state;

      let todo = {};

      let value = val.trim(); //前后面的空格切掉

      todo._id = todos._id   //给一个ID说明其身份
    
      todo.value = value;  // 内容

      todo.has=todos.has;
      dispatch({
        type: 'todoList/editTodoValue',
        payload: todo,
        callback:(response=>{
          if (response) {
            dispatch({type:'todoList/queryList'})
            this.setState({ // 更新状态
                 inEdit:false //回车后清空
              })
            message.success('操作成功')
          } else {
            message.error('操作失败')
          }
        })
    })
      
      
     }
    onEter =(ev,todos)=>{
      const { dispatch } = this.props;
        if (ev.keyCode !== 13) return;//回车事件
    
        let { val  } = this.state;
    
        let value = val.trim(); //前后面的空格切掉
    
        if (value === "") { return }  //如果值是空的就不让添加
        
        let todo = {};  //声明一个数据 (添加的动作)，是一个对象。
    
        todo._id = todos._id   //给一个ID说明其身份
    
        todo.value = value;  // 内容

        todo.has=todos.has;

        dispatch({
            type: 'todoList/editTodoValue',
            payload: todo,
            callback:(response=>{
              if (response) {
                dispatch({type:'todoList/queryList'})
                this.setState({ // 更新状态
                     inEdit:false //回车后清空
                  })
                message.success('操作成功')
              } else {
                message.error('操作失败')
              }
            })
        })

    }
  render() {
    const { todos } =this.props
    let itemClassName=todos.has?styles.completed:'';//用变量来控制什么时候编辑 
    if(this.state.inEdit){itemClassName=`${itemClassName} ${styles.editing}` }
    return (
      <li className={itemClassName}> 
                <div className={styles.view}>
                  <input 
                   type="checkbox"
                   className={styles.toggle}
                   onChange={()=>this.onToggle(todos)} // 传参数todo
                   checked={todos.has}
                   />
                    <label 
                    onDoubleClick={this.onEdit} //双击可以编辑
                    > 
                       {todos.value}
                    </label>
                    <button
                      className={styles.destroy}
                      onClick={ev=>this.onDestroy(todos)}
                     ></button>
                </div>
                <input
                 type="text" 
                 className={styles.edit}
                 value={this.state.val}  //让input的值可以控制，方便编辑
                 onBlur={()=>this.onBlur(todos)}  //失去焦点的时候的事件
                 onKeyDown={(e)=>this.onEter(e,todos)} //按下去的时候的事件
                 onChange={(e)=>this.inputValue(e)}
                //  onKeyUp={onkeyUp}
                 ref="edit"
                 />
            </li>
     
    )
  }
}
export default TodoItem