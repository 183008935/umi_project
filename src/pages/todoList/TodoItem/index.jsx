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
    render() {
        const { list } = this.props;
          let todos = list.map((item,index)=>{
              return ( <li key={index}>
                <div className={styles.view}>
                <input 
                 type="checkbox"
                 className={styles.toggle}
               //   onChange={ev=>onToggle(todo)} // 传参数todo
               //   checked={todo.has} 
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