import React, { Component } from 'react'
import styles from './index.css';
import Link from 'umi/link';
import { connect } from 'dva';
@connect()
class Footer extends Component {
    changeView=(value)=>{
        this.props.changeView(value)
       }
       onClearCompleted =()=>{
        const { dispatch } = this.props;
        dispatch({
            type: 'todoList/deleteTrue',
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
        const { view,todoList }= this.props;
        
        return (
            <footer className={styles.footer}>
               <span className={styles.todocount}>
                 <strong>{todoList.length} </strong>
                 <span>事件 项目</span>
               </span>
               <ul className={styles.filters}>
               <li>
                        {/* <Link  
                        to="/"   
                        className={styles.selected}
                        >所有</Link> */}
                     <a 
                     href="#/all"
                     className={view==='all'?styles.selected:''}
                     onClick={ev=>{this.changeView('all')}}
                     >all</a>
                 </li>
                 <li>
                 {/* <Link
                        to="/active"
                        className={styles.selected}
                        >未完成</Link> */}
                     <a 
                     href="#/active"
                     className={view==='active'?styles.selected:''}
                     onClick={ev=>{this.changeView('active')}}
                     >Active</a>
                 </li>
                 <li>
                 {/* <Link
                        to="/completed"
                        className={styles.selected}
                        >已完成</Link> */}
                     <a
                      href="#/Completed"
                      className={view==='completed'?styles.selected:''}
                      onClick={ev=>{this.changeView('completed')}}
                      >Completed</a>
                 </li>
               </ul>
               <button className={styles.clearcompleted}
                  onClick={this.onClearCompleted}  //清除事件
            > 
            清除完成项目
            </button>
            </footer>
        )
    }
}
export default Footer