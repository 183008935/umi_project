import React, { Component } from 'react'
import styles from './index.css';
import ContenItem from './ContenItem';
import Footer from './Footer'
export default class index extends Component {
  state = {
    inputValue: '',
    todos: [],
    view:'all'
  }
  inputChange = (e) => {
    this.setState({
      inputValue: e.target.value
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
  onDestroy =(todo)=>{ //删除的是那一个参数 设置一个todo
    let {todos}=this.state;  //先把所有的todo拿出来
 
    todos=todos.filter(elt=>{ //过滤这个todo 
        return elt.id!==todo.id // id不相匹配删除掉 
    })
    this.setState({todos}) //更新状态
}
  toggleAll = (ev) => {  //是input 改变事件 全选勾
    let { checked } = ev.target;   //勾选和未勾选的状态
    let { todos } = this.state;
    todos = todos.map(elt => {
  
      elt.has = checked; //全选后checked会变成true 反之false

      return elt
    })
    this.setState({ todos })  //更新状态；
  }
  onToggle = (todo) => {  //改变的是哪一个todo  识别
    let { todos } = this.state;
    todos = todos.map(elt => {  //elt 代表每一个todo
      if (elt.id === todo.id) {  //如果id相等 说明操作的就是这个todo
        elt.has = !elt.has //勾选上就是反向的状态
      }
      return elt
    })
    this.setState({ todos })
  } 
  inputValue=(ev)=>{ //改变value的方法;
    this.setState({
        val:ev.target.value
    })  
}
changeView=(view)=>{  //改变视图触发
  this.setState({view })
}
 //修改totosData的方法，设置一个方法;给Item的属性
 itemEditDone=(todo,value)=>{
  let {todos}=this.state;
  todos=todos.map(elt=>{ //遍历这个数组
      if(todo.id===elt.id){ //如果数组的id相同 说明就是编辑的这个todo
          elt.value=value   //todosDate的值就是编辑的值
      }
      return elt;  //返回值；
  })
  if(todo.value==""){  //如果值为空。 清除这个todo
      todos=todos.filter(elt=>{
          return elt.id!==todo.id
      })
  }
this.setState({todos})

}
  render() {
    const { todos } =this.state;
    let items=null,footer=null,itemsBox=null;
    let leftCount=todos.length; //数组的长度;
     items=todos.map((item,i)=>{  //改变这个数组
        return (//接收一些props
            <ContenItem
              todo={item}
              onDestroy={(todo)=>this.onDestroy(todo)}
              onToggle={(todo)=>this.onToggle(todo)}
              itemEditDone={(todo,value)=>this.itemEditDone(todo,value)}
              key={i}
            />
        )
    })
     if(todos.length){
      itemsBox=(<div className={styles.main}>
        <input
            type="checkbox"
            className={styles.toggleall}
            onChange={this.toggleAll}
        />
         <ul className={styles.todolist}>
         {items}
         </ul>
         </div>)
     }
  

    return (
      <div className={styles.todoHtml}>
        <div className={styles.Body}>
          <div className={styles.todoApp}>
            <header className={styles.header}>
              <h1>待办事项</h1>
              <input
                type="text"
                value={this.state.inputValue}//受控制
                onChange={(e) => this.inputChange(e)}
                className={styles.newtodo}
                onKeyDown={(e) => this.keyDownPost(e)}
                placeholder="吃饭 睡觉 打豆豆"
              />
            </header>
            {itemsBox}
           
            <Footer  view={this.state.view} changeView={(value)=>this.changeView(value)}/>
          </div>
        </div>
        <footer class={styles.info}>
          <p>双击编辑一个待办事项</p>
          <p>Created by <a href="https://github.com/183008935/Router-todo">钟声github</a></p>
          <p>-钟声-</p>
        </footer>
      </div>
    )
  }
}