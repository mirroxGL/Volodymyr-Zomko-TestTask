import { Component } from "react"
import s from "./body.module.css"
import classnames from 'classnames';
import Item from "./Item/Item";



class Body extends Component {
   constructor(props) {
      super(props)
   }
   componentDidMount() {
      this.props.setBodyItems()


   }
   componentDidUpdate() {
   }





   render() {
      return (
         <div className={s.bodyBlock}>
            <div className={classnames(s.bodyWrapper)}>

               <div className={s.title}><span>Category name</span></div>
               <div className={s.items}>

                  {this.props.items.map((value, i) => <Item
                     activeCurrency={this.props.activeCurrency}
                     setItemId={this.props.setItemId}
                     data={value}
                     key={i} />)}

               </div>
            </div>
         </div>
      )
   }

}


export default Body