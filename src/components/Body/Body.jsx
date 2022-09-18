import { Component } from "react"
import s from "./body.module.css"
import classnames from 'classnames';
import Item from "./Item/Item";



class Body extends Component {
   componentDidMount() {
      this.props.setBodyItems(this.props.activeBodyCategory)
   }
   componentDidUpdate(prevProps) {
      if (prevProps.activeBodyCategory !== this.props.activeBodyCategory) {
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
                     item={value}
                     items={this.props.items}
                     cartItems={this.props.cartItems}
                     key={i}
                     setItemToCart={this.props.setItemToCart}
                     setSumCountItems={this.props.setSumCountItems}
                     addItem={this.props.addItem} />)}
               </div>
            </div>
         </div>
      )
   }

}


export default Body