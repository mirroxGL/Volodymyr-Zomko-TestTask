import React, { PureComponent } from 'react'
import s from "./Cart.module.css"
import classnames from 'classnames';
import { NavLink } from 'react-router-dom';
import CartItemsContainer from './CartItems/CartItemsContainer';

export default class Cart extends PureComponent {
   componentDidUpdate(prevProps) {
      const { activeCurrency,
         totalPrice,
         itemsSumCount,
         items,
         setTotalPrice } = this.props

      if (prevProps.activeCurrency !== activeCurrency || prevProps.totalPrice?.price !== totalPrice?.price || prevProps.itemsSumCount !== itemsSumCount) {
         setTotalPrice(items, activeCurrency)
      }
   }
   componentDidMount() {
      const { activeCurrency,
         items,
         setTotalPrice } = this.props
      setTotalPrice(items, activeCurrency)
   }
   renderBottomBlock = () => {
      const {
         toggleFalseRevealCart,
         totalPrice } = this.props

      return (
         <div className={s.bottomBlock}>
            <div className={s.totalBlock}>
               <span>Total</span>
               <span>{totalPrice.symbol} {totalPrice.price}</span>
            </div>
            <div className={s.cartButtonsBlock}>
               <NavLink onClick={() => toggleFalseRevealCart()} to="/cart" className={s.viewBagBtn}>VIEW BAG</NavLink>
               <a href='/' className={s.checkOutBtn}><span>CHECK OUT</span></a>
            </div>
         </div>
      )
   }
   renderCartBody = () => {
      const {
         items,
         activeCurrency,
      } = this.props
      return (
         <div className={classnames(s.cart__body)}>
            <div className={s.cart__items}>
               <CartItemsContainer
                  activeCurrency={activeCurrency}
                  items={items}
               />
            </div>
         </div>
      )
   }

   render() {
      const {
         isToggleCartReveal,
         itemsSumCount
      } = this.props

      return (
         isToggleCartReveal ? <div className={classnames(s.cart)} >
            <div className={s.cartWrapper}>
               <div className={s.cart__title}>
                  <h2>My Bag <span>, {itemsSumCount} items</span></h2>
               </div>
               {this.renderCartBody()}
            </div>
            {this.renderBottomBlock()}
         </div> : ""
      )
   }
}


