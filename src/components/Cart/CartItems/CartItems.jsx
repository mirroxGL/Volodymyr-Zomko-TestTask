import React, { PureComponent } from 'react'
import s from ".././Cart.module.css"
import CartItemContainer from './CartItem/CartItemContainer';

export default class CartItems extends PureComponent {
   render() {
      const {
         items,
      } = this.props

      return (
         items.map((item, i) => {
            let {
               activeAttributes: { itemCount }
            } = item

            return itemCount !== 0 && <div key={i} className={s.cart__item} >
               <CartItemContainer item={item} />
            </div >
         })
      )
   }
}
