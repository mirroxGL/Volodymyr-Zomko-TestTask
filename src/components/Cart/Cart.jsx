import React, { Component } from 'react'
import s from "./Cart.module.css"
import classnames from 'classnames';
import { NavLink } from 'react-router-dom';
import CartItemsContainer from './CartItems/CartItemsContainer';

export default class Cart extends Component {
   renderBottomBlock = () => {
      return (
         <div className={s.bottomBlock}>
            <div className={s.totalBlock}>
               <span>Total</span>
               <span>{this.props.setTotalPrice(this.props.items, this.props.activeCurrency)}</span>
            </div>
            <div className={s.cartButtonsBlock}>
               <NavLink onClick={() => this.props.toggleFalseRevealCart()} to="/cart" className={s.viewBagBtn}>VIEW BAG</NavLink>
               <a href='/' className={s.checkOutBtn}><span>CHECK OUT</span></a>
            </div>
         </div>
      )
   }
   renderCartBody = () => {
      return (
         <div className={classnames(s.cart__body)}>
            <div className={s.cart__items}>
               <CartItemsContainer
                  activeCurrency={this.props.activeCurrency}
                  items={this.props.items}
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


