import React, { PureComponent } from 'react'
import s from "./MainCart.module.css"
import MainCartItems from './MainCartItems/MainCartItems';


class MainCart extends PureComponent {
   componentDidMount = () => {
      this.props.setFinalDigits()
   }

   componentDidUpdate = (prevProps) => {
      if (prevProps.activeCurrency !== this.props.activeCurrency || prevProps.totalPrice?.price !== this.props.totalPrice?.price || prevProps.itemsSumCount !== this.props.itemsSumCount) {
         this.props.setFinalDigits()
      }
   }

   renderCartItems = () => {
      return (
         <MainCartItems
            activeCurrency={this.props.activeCurrency}
            items={this.props.items}
         />
      )
   }

   renderTaxes = () => {
      return (
         <div className={s.taxes}>
            <span className={s.label}>Tax 21%: </span>
            <span className={s.number}>{this.props.taxes?.symbol} {this.props.taxes?.amount}</span>
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
      return (
         <div className={s.total}>
            <span className={s.label}>Total: </span>
            <span className={s.number}>{this.props.totalPrice?.symbol} {this.props.totalPrice?.price}</span>
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