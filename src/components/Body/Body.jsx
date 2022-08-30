import { Component } from "react"
import s from "./body.module.css"
import classnames from 'classnames';
import Item from "./Item/Item";



class Body extends Component {
   constructor(props) {
      super(props)
   }
   componentDidMount() {
      this.props.setBodyItems(this.props.activeBodyCategory)


   }
   componentDidUpdate(prevProps) {
      if (prevProps.activeBodyCategory != this.props.activeBodyCategory) {
         this.props.setBodyItems(this.props.activeBodyCategory)
      }

   }





   render() {
      return (
         <div className={s.bodyBlock}>
            <div className={classnames(s.bodyWrapper)}>

               <div className={s.title}><span>{this.props.activeCategory}</span></div>
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