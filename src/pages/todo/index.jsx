import React, { Component } from 'react'
import styles from './index.css';
import ContenItem from './ContenItem';
import Footer from './Footer'
export default class index extends Component {
  render() {
    return (
      <div className={styles.todoHtml}>
        <div className={styles.Body}>
        <div className={styles.todoApp}>
         <header className={styles.header}>
                <h1>待办事项</h1>
                <input 
                type="text" 
                // value={inputValue}//受控制
                // onChange={inputChange}
                className={styles.newtodo}
                // onKeyDown={keyDownPost}
                placeholder="吃饭 睡觉 打豆豆"
                />
                </header>
            <ContenItem />
            <Footer />
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


// import * as React from 'react';
// import styles from "./index.less";
// import ContenItem from './ContenItem';
// class Todo extends React.Component{
//   state={
//     inputValue:'',
//     todoList:[]
//   }
//   inputChange =(e)=>{
//      this.setState({
//       inputValue:e.target.value
//      })
//   }
//   keyDownPost = (e) => {
//     if (e.keyCode !== 13) return;//回车事件
//     let { inputValue, todoList } = this.state;
//     let value = inputValue.trim();
//     if (value === "") { return }
//     let todo = {};
//     todo.id = new Date().getTime();
//     todo.value = value;  // 内容
//     todo.has = false;  //他的初始状态
//     todoList.push(todo);
//     this.setState({
//       todoList,
//       inputValue:''
//     })
//   }
//   toggleAll=(ev)=>{  // 全部选中
//     let {checked}=ev.target;

//     let {todoList}=this.state;
    
//     todoList=todoList.map(elt=>{
//         elt.has=checked;
//         return elt;
//     })
    
//     this.setState({todoList})
//   }
//   onDestroy=(todo)=>{ //删除的是那一个参数 设置一个todo
//     let {todoList}=this.state;  //先把所有的todo拿出来
//    // 取localStorage
//    todoList=todoList.filter(elt=>{ //过滤这个todo 
//         return elt.id!==todo.id // id不相匹配删除掉 
//     })
//     this.setState({todoList}) //更新状态
// }
// onToggle=(todo)=>{  //改变的是哪一个todo  识别
//   let { todoList }=this.state;
//   todoList=todoList.map(elt=>{  //elt 代表每一个todo
//     if(elt.id===todo.id){  //如果id相等 说明操作的就是这个todo
//         elt.has=!elt.has //勾选上就是反向的状态
//     }
//     return elt
// })
// this.setState({todoList})
// } 

// itemEditDone=(todo,value)=>{
//   let {todoList}=this.state;
//   todoList=todoList.map(elt=>{ //遍历这个数组
//       if(todo.id===elt.id){ //如果数组的id相同 说明就是编辑的这个todo
//           elt.value=value   //todosDate的值就是编辑的值
//       }
//       return elt;  //返回值；
//   })
//   if(todo.value==""){  //如果值为空。 清除这个todo
//     todoList=todoList.filter(elt=>{
//           return elt.id!==todo.id
//       })
//   }
// this.setState({todoList})

// }
//   render() {
//    const { inputValue,todoList } = this.state;
//    let leftCount=todoList.length;
//   let  items=todoList.map((elt,i)=>{  //改变这个数组
//     return (//接收一些props
//         <ContenItem
         
//              onDestroy={this.onDestroy}
//              todo={elt} // 内容
//              onToggle={()=>this.onToggle(elt)}//事件绑定 
//              itemEditDone={this.itemEditDone}
             
         
//           key={i}
//         />
//     )
//   })

//    //如果数组的长度
//     let itemsBox=(
//         <section className={styles.main}>
//         <input
//          type="checkbox"
//          className={styles.toggleAll}
//          onChange={(e)=>this.toggleAll(e)}
//          checked={leftCount===0}
         
//          />
//            <ul className={styles.todolist}>
//               {items}
//            </ul>
//         </section> 
//     );



//     return (
//       <div className={styles.BodyHtml}>

    
//       <div className={styles.todoapp}>
//       <header className={styles.header}>
//       <h1>待办事项</h1>
//       <input 
//       type="text" 
//       value={inputValue}//受控制
//       onChange={(e)=>this.inputChange(e)}
//       className={styles.newTodo}
//       onKeyDown={(e)=>this.keyDownPost(e)}
//       placeholder="吃饭 睡觉 打豆豆"
     
//       />
//       </header>
//       {itemsBox}
      
//   </div>
//   </div>
//     )
//   }
// }
// export default  Todo