import React, { PureComponent } from 'react'
import s from ".././Cart.module.css"
import CartItemContainer from './CartItem/CartItemContainer';

export default class CartItems extends PureComponent {
   render() {
      const {
         activeCurrency,
         items,
         setPrices,
      } = this.props

      return (
         items.map((item, i) => {
            item.activeAttributes.displayPrice = item.prices ? setPrices(item.prices, activeCurrency) : 0
            return item.activeAttributes.itemCount !== 0 && <div key={i} className={s.cart__item} >
               <CartItemContainer item={item} />
            </div >
         })
      )
   }
}
