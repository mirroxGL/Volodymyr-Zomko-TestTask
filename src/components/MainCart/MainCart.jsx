import React, { PureComponent } from 'react'
import s from "./MainCart.module.css"
import MainCartItems from './MainCartItems/MainCartItems';


class MainCart extends PureComponent {
   componentDidMount = () => {
      this.props.setFinalDigits()
   }
   componentDidUpdate = (prevProps) => {
      const { activeCurrency, totalPrice, itemsSumCount, setFinalDigits } = this.props

      if (prevProps.activeCurrency !== activeCurrency || prevProps.totalPrice?.price !== totalPrice?.price || prevProps.itemsSumCount !== itemsSumCount) {
         setFinalDigits()
      }
   }

   renderCartItems = () => {
      const { activeCurrency, items } = this.props

      return (
         <MainCartItems
            activeCurrency={activeCurrency}
            items={items}
         />
      )
   }

   renderTaxes = () => {
      const { taxes } = this.props

      return (
         <div className={s.taxes}>
            <span className={s.label}>Tax 21%: </span>
            <span className={s.number}>{taxes?.symbol} {taxes?.amount}</span>
         </div>
      )
   }
   renderQuantity = () => {
      return (
         <div className={s.quantity}>
            <span className={s.label}>Quantity: </span>
            <span className={s.number}>{this.props.itemsSumCount}</span>
         </div>
      )
   }
   renderTotal = () => {
      const { totalPrice } = this.props
      return (
         <div className={s.total}>
            <span className={s.label}>Total: </span>
            <span className={s.number}>{totalPrice?.symbol} {totalPrice?.price}</span>
         </div>
      )
   }
   renderBottomPart = () => {
      return (
         <div className={s.bottomPart}>
            <div className={s.amount}>
               {this.renderTaxes()}
               {this.renderQuantity()}
               {this.renderTotal()}
            </div>
            <div className={s.orderBtn}>
               <a href='/'>ORDER</a>
            </div>
         </div>
      )
   }

   render() {
      return (
         <div className={s.mainCart}>
            <div className={s.mainCartWrapper}>
               <div className={s.container}>
                  <div className={s.mainCart__title}>CART</div>
                  {this.renderCartItems()}
                  {this.renderBottomPart()}
               </div>
            </div>
         </div>
      )
   }
}


export default MainCart