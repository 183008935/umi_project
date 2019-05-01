import React, { Component } from 'react'
import styles from './index.less';
import { connect } from 'dva';
@connect()
class TodoItem extends Component {
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
    render() {

      
        const { list } = this.props;
          let todos = list.map((item,index)=>{
            let itemClassName=item.has?styles.completed:'';//用变量来控制什么时候编辑 

            //  if(inEdit){itemClassName+=' editing'} //通过状态来控制什么时候可以编辑
 
              return ( <li key={index} className={itemClassName}>
                <div className={styles.view}>
                <input 
                 type="checkbox"
                 className={styles.toggle}
                 onChange={()=>this.onToggle(item)} // 传参数todo
                 checked={item.has} 
                      />
                     <label 
                       // onDoubleClick={onEdit} //双击可以编辑
                       > 
                         {item.value}
                       </label>
                       <button
                         className={styles.destroy}
                         onClick={()=>this.onDestroy(item)}
                        />
                </div>
                </li>)
            

            })
       
        return (
            <div className={styles.main}>
            <input
                type="checkbox"
                className={styles.toggleAll}
                // onChange={this.toggleAll}
            />
             <ul className={styles.todoList}>
             {list?todos:<li></li>}
             </ul>
             </div>
        )
    }
}
export default TodoItem