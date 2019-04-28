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
        if (ev.keyCode !== 13) return;//回车事件
    
        let { inputValue, todos } = this.state;
    
        let value = inputValue.trim(); //前后面的空格切掉
    
        if (value === "") { return }  //如果值是空的就不让添加
    
        let todo = {};  //声明一个数据 (添加的动作)，是一个对象。
    
        todo.id = new Date().getTime();   //给一个ID说明其身份
    
        todo.value = value;  // 内容
    
        todo.has = false;  //他的初始状态。
    
        todos.push(todo);//新添加的对象todo添加到数组里
    
        this.setState({ // 更新状态
          inputValue: '' //回车后清空
        })
      }
    render() {
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
                <TodoItem list={this.props.todoList}/>
                </div>
             </div>
             <div style={{height:'200px',background:'#fff'}}></div>
            </div>
        )
    }
}
export default TodoList 