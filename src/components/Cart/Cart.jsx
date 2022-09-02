import React, { Component } from 'react'
import s from "./Cart.module.css"
import classnames from 'classnames';
import { NavLink } from 'react-router-dom';
import CartItem from './CartItem/CartItem';



export default class Cart extends Component {
   constructor(props) {
      super(props);
      this.toggleFalseRevealCart = this.toggleFalseRevealCart.bind(this)
   }
   shouldComponentUpdate(nextProps, nextState) {
      return nextProps != this.props || nextState != this.state
   }
   toggleFalseRevealCart() {
      this.props.toggleCartReveal(false)
   }
   setTotalPrice(items, activeCurrency) {

      let sum = 0
      let num = 0
      for (let i = 0; i < items.length; i++) {
         let price = items[i].prices.find(({ currency }) => currency.label === activeCurrency.label)
         num = price.amount * items[i].activeAttributes.itemCount
         sum += num
      }
      return <span>{activeCurrency.symbol} {sum.toFixed(2)}</span>
   }

   render() {
      return (
         this.props.isToggleCartReveal ? <div className={classnames(s.cart)} >
            <div className={s.cartWrapper}>
               <div className={s.cart__title}>
                  <h2>My Bag <span>, {this.props.itemsSumCount} items</span></h2>
               </div>
               <div className={classnames(s.cart__body)}>
                  <div className={s.cart__items}>
                     <CartItem addItem={this.props.addItem}
                        substractItem={this.props.substractItem}
                        activeCurrency={this.props.activeCurrency}
                        items={this.props.items}
                        setActiveSize={this.props.setActiveSize}
                        setActiveColor={this.props.setActiveColor}
                        setActiveFirstOpt={this.props.setActiveFirstOpt}
                        setActiveSecondOpt={this.props.setActiveSecondOpt}
                        activeColor={this.props.activeColor}
                        activeSize={this.props.activeSize}
                        activeFirstOpt={this.props.activeFirstOpt}
                        activeSecondOpt={this.props.activeSecondOpt}
                     />
                  </div>
               </div>
            </div>
            <div className={s.bottomBlock}>
               <div className={s.totalBlock}>
                  <span>Total</span>
                  <span>{this.setTotalPrice(this.props.items, this.props.activeCurrency)}</span>
               </div>
               <div className={s.cartButtonsBlock}>
                  <NavLink onClick={this.toggleFalseRevealCart} to="/cart" className={s.viewBagBtn}>VIEW BAG</NavLink>
                  <a href='/' className={s.checkOutBtn}><span>CHECK OUT</span></a>
               </div>
            </div>
         </div> : ""
      )
   }
}


