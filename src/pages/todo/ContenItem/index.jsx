import React, { Component } from 'react'
import styles from './index.css';
 class ContenItem extends Component {
  render() {
    let itemClassName='';//用变量来控制什么时候编辑
    // if(inEdit){itemClassName+=' editing'} //通过状态来控制什么时候可以编辑
    return (
      <div className={styles.main}>
            <input
                type="checkbox"
                className={styles.toggleall}
                // onChange={toggleAll}
                // checked={leftCount === 0}
            />
             <ul className={styles.todolist}>
             <li className={itemClassName}> 
             <input 
                  type="checkbox"
                  className={styles.toggle}
                //    onChange={ev=>onToggle(todo)} // 传参数todo
                //    checked={todo.has} 
                   />
                   <label 
                    // onDoubleClick={onEdit} //双击可以编辑
                    > 
                       123123123123
                    </label>
                    <button
                      className={styles.destroy}
                    //   onClick={ev=>onDestroy(todo)}
                     />
                  <input
                 type="text" 
                 className={styles.edit}
                //  value={val}  //让input的值可以控制，方便编辑
                //  onBlur={onBlur}  //失去焦点的时候的事件
                //  onKeyDown={onEter} //按下去的时候的事件
                //  onChange={inputValue}
                //  onKeyUp={onkeyUp}
                 ref="edit"
                 />
            </li>
             </ul>
      </div>
    )
  }
}
export default ContenItem