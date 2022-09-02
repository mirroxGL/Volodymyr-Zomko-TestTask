import React, { Component } from 'react'
import s from "./MainCart.module.css"
import classnames from 'classnames';
import MainCartItem from './MainCartItem/MainCartItem';
import { connect } from 'react-redux'
import { setActiveColor, setActiveFirstOpt, setActiveSecondOpt, setActiveSize } from '../../redux/pdp/actions';
import { addItem, setItemToCart, setSumCountItems, setTaxes, setTotalPrice, substractItem, toggleCartRevealAC } from '../../redux/cart-reducer';


class MainCart extends Component {
   constructor(props) {
      super(props)

   }
   shouldComponentUpdate(nextProps, nextState) {
      return nextProps != this.props || nextState != this.state
   }
   componentDidMount = () => {
      this.setFinalDigits()
   }

   componentDidUpdate = (prevProps) => {
      if (prevProps.activeCurrency != this.props.activeCurrency || prevProps.totalPrice?.price != this.props.totalPrice?.price || prevProps.itemsSumCount != this.props.itemsSumCount) {
         this.setFinalDigits()
      }
   }

   setFinalDigits = () => {
      this.setTotalPrice(this.props.items, this.props.activeCurrency)
      this.props.setTaxes(this.props.activeCurrency?.symbol, ((this.props.totalPrice?.price) * 0.21).toFixed(2))
   }

   setTotalPrice(items, activeCurrency) {
      let sum = 0
      let num = 0
      for (let i = 0; i < items.length; i++) {
         let price = items[i].prices.find(({ currency }) => currency.label === activeCurrency.label)
         num = price.amount * items[i].activeAttributes.itemCount
         sum += num
      }
      this.props.setTotalPrice(activeCurrency.symbol, sum.toFixed(2))
   }

   render() {
      return (
         <div className={s.mainCart}>
            <div className={s.mainCartWrapper}>
               <div className={s.container}>
                  <div className={s.mainCart__title}>CART</div>
                  <MainCartItem
                     addItem={this.props.addItem}
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
                     activeSecondOpt={this.props.activeSecondOpt} />
                  <div className={s.bottomPart}>
                     <div className={s.amount}>
                        <div className={s.taxes}>
                           <span className={s.label}>Tax 21%: </span>
                           <span className={s.number}>{this.props.taxes?.symbol} {this.props.taxes?.amount}</span>
                        </div>
                        <div className={s.quantity}>
                           <span className={s.label}>Quantity: </span>
                           <span className={s.number}>{this.props.itemsSumCount}</span>
                        </div>
                        <div className={s.total}>
                           <span className={s.label}>Total: </span>
                           <span className={s.number}>{this.props.totalPrice?.symbol} {this.props.totalPrice?.price}</span>
                        </div>
                     </div>
                     <div className={s.orderBtn}>
                        <a href='/'>ORDER</a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      )
   }
}


const mapStateToProps = (state) => {
   return {
      taxes: state.cart.taxes,
      itemsSumCount: state.cart.itemsSumCount,
      items: state.cart.items,
      activeCurrency: state.currency.activeCurrency,
      activeColor: state.pdp.activeColor,
      activeSize: state.pdp.activeSize,
      activeFirstOpt: state.pdp.activeFirstOpt,
      activeSecondOpt: state.pdp.activeSecondOpt,
      totalPrice: state.cart.totalPrice
   }

}




export default connect(mapStateToProps, {
   setTotalPrice: setTotalPrice,
   setSumCountItems: setSumCountItems,
   addItem: addItem,
   substractItem: substractItem,
   toggleCartReveal: toggleCartRevealAC,
   setItemToCart: setItemToCart,
   setActiveColor: setActiveColor,
   setActiveSize: setActiveSize,
   setActiveSecondOpt: setActiveSecondOpt,
   setActiveFirstOpt: setActiveFirstOpt,
   setTaxes: setTaxes,
})(MainCart)