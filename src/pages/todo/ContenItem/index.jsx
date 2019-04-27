import React, { Component } from 'react'
import styles from './index.css';
class ContenItem extends Component {
  state={ //是不是编辑状态。
    inEdit:false,//初始值是false
    val:''//让值可以控制
}      
  onDestroy =(todo)=>{
   this.props.onDestroy(todo)
  }
  onToggle =(todo)=>{
    this.props.onToggle(todo)
   }
  onEdit = () => {
    let { value } = this.props.todo //从他的属性提出内容
    this.setState({
      inEdit: true,
      val: value
    }, () => { this.refs.edit.focus() });//改变初始值可以编辑的状态 并获得焦点

  }
  inputValue=(ev)=>{ //改变value的方法;
    this.setState({
        val:ev.target.value
    })
    
}
onBlur=()=>{  //失去焦点的动作
  this.setState({
      inEdit:false
  })
let {itemEditDone,todo}=this.props;

this.props.itemEditDone(todo,this.state.val) //这些都是为了修改内容
}
//为了方便下面的内容   不嫌麻烦就不用写.
    itemEditDone=()=>{
      this.setState({
            inEdit:false
        })

      this.props.itemEditDone(todo,this.state.val)
    }
  render() {
    const { todo } =this.props
    let { inEdit }=this.state;
    let itemClassName=todo.has?styles.completed:'';//用变量来控制什么时候编辑 

    if(inEdit){itemClassName=`${itemClassName} ${styles.editing}` } //通过状态来控制什么时候可以编辑
    return (
    <li className={itemClassName}>
     <div className={styles.view}>
        <input
           type="checkbox"
           className={styles.toggle}
           onChange={ev=>this.onToggle(this.props.todo)} // 传参数todo
           checked={todo.has} 
        />
        <label
        onDoubleClick={this.onEdit} //双击可以编辑
        >
         {todo.value}
          </label>
        <button
          className={styles.destroy}
          onClick={ev=>this.onDestroy(this.props.todo)}
        />
        </div>
        <input
          type="text"
          className={styles.edit}
           value={this.state.val}  //让input的值可以控制，方便编辑
           onBlur={this.onBlur}  //失去焦点的时候的事件
          //  onKeyDown={onEter} //按下去的时候的事件
           onChange={(e)=>this.inputValue(e)}
          //  onKeyUp={onkeyUp}
          ref="edit"
        />
    
      </li>
    )
  }
}
export default ContenItem