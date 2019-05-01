import React, { Component } from 'react'
import styles from './index.less';
import TodoItem from './TodoItem';
import { connect } from 'dva';
@connect(({ todoList }) => ({ todoList:todoList.todoList,}))
 class TodoList extends Component {
    state={
        inputValue:''
     }
     componentDidMount() {
        this.props.dispatch({
            type:'todoList/queryList'
        })
      }
     inputChange=(ev)=>{ //改变事件,让value受控制
        this.setState({
            inputValue:ev.target.value  //让input受到控制
        })
      }
      keyDownPost = (ev) => {
        const { dispatch } = this.props;
        if (ev.keyCode !== 13) return;//回车事件
    
        let { inputValue  } = this.state;
    
        let value = inputValue.trim(); //前后面的空格切掉
    
        if (value === "") { return }  //如果值是空的就不让添加
        
        let todo = {};  //声明一个数据 (添加的动作)，是一个对象。
    
        todo.id = new Date().getTime();   //给一个ID说明其身份
    
        todo.value = value;  // 内容
    
        todo.has = false;  //他的初始状态。
    
        dispatch({
            type: 'todoList/addTodo',
            payload: todo,
            callback:(response=>{
              if (response) {
                dispatch({type:'todoList/queryList'})
                this.setState({ // 更新状态
                    inputValue: '' //回车后清空
                  })
                message.success('操作成功')
              } else {
                message.error('操作失败')
              }
            })
        })
      }
    render() {
     const { todoList } = this.props;
     let items=null,footer=null,itemsBox=null;
          
     items=todoList.map((elt,i)=>{  //改变这个数组
        return (//接收一些props
            <TodoItem
              todos={elt}
              key={i}
            />
        )
    })
        return (
            <div className={styles.Html}>
            <div className={styles.Body}>
            <div className={styles.todoApp}> 
                <header className={styles.header}>
                <h1>待办事项</h1>
                <input 
                type="text" 
                value={this.state.inputValue}//受控制
                onChange={this.inputChange}
                className={styles.newTodo}
                onKeyDown={(e) => this.keyDownPost(e)}
                placeholder="请输入待办事项"
                />
                </header>
                <div className={styles.main}>
                <input
                type="checkbox"
                className={styles.toggleAll}
                // onChange={this.toggleAll}
               />
               <ul className={styles.todoList}>
               {todoList.length>0?items:null}
               </ul>
                </div>
              
                </div>
             </div>
             <div style={{height:'200px',background:'#fff'}}></div>
            </div>
        )
    }
}
export default TodoList 