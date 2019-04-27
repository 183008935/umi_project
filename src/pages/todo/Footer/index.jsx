import React, { Component } from 'react'
import styles from './index.css';
import Link from 'umi/link';
class Footer extends Component {
    changeView=(value)=>{
        this.props.changeView(value)
       }
    render() {
        const { view }= this.props;
        
        return (
            <footer className={styles.footer}>
               <span className={styles.todocount}>
                 <strong>1 </strong>
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
            // onClick={onClearCompleted}  //清除事件
            > 
            清除完成项目
            </button>
            </footer>
        )
    }
}
export default Footer