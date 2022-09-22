import s from "./body.module.css"
import classnames from 'classnames';
import Item from "./Item/Item";
import { PureComponent } from "react";

class Body extends PureComponent {
   componentDidMount() {
      this.props.setBodyItems(this.props.activeBodyCategory)
   }
   componentDidUpdate(prevProps) {
      if (prevProps.activeBodyCategory !== this.props.activeBodyCategory) {
         this.props.setBodyItems(this.props.activeBodyCategory)
      }
   }


   render() {
      const { activeCurrency,
         activeCategory,
         setItemId,
         items,
         cartItems,
         setItemToCart,
         setSumCountItems,
         addItem } = this.props
      return (
         <div className={s.bodyBlock}>
            <div className={classnames(s.bodyWrapper)}>
               <div className={s.title}><span>{activeCategory}</span></div>
               <div className={s.items}>
                  {items.map((value, i) => <Item
                     activeCurrency={activeCurrency}
                     setItemId={setItemId}
                     item={value}
                     items={items}
                     cartItems={cartItems}
                     key={i}
                     setItemToCart={setItemToCart}
                     setSumCountItems={setSumCountItems}
                     addItem={addItem} />)}
               </div>
            </div>
         </div>
      )
   }
}


export default Body