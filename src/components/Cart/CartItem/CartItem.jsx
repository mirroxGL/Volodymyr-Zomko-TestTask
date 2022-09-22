import React, { PureComponent } from 'react'
import s from ".././Cart.module.css"
import cartAttributesBuilder from './CartAttributesBuilder';

export default class CartItem extends PureComponent {
   setPrices = (prices, activeCurrency) => {
      for (let i = 0; i < prices.length; i++) {
         if (prices[i].currency.symbol === activeCurrency.symbol) {
            return prices[i].currency.symbol + " " + prices[i].amount
         }
      }
   }
   incrItem = (item) => {
      item.activeAttributes.itemCount += 1
      this.props.addItem()
      this.forceUpdate()
   }
   decrItem = (item) => {
      item.activeAttributes.itemCount -= 1
      this.props.substractItem()
      this.forceUpdate()
   }

   ///////////////////////////////RENDERS/////////////////////////////////
   renderLeftSide = (item) => {
      return (
         <div className={s.item__bodyLeft}>
            <div className={s.item__title}>
               <span><span>{item.brand} </span>{item.name}</span>
            </div>
            <div className={s.item__price}>
               <span>{item.activeAttributes.displayPrice}</span>
            </div>
            {item.attributes.map((attr, i) => {
               return cartAttributesBuilder(attr, i, item)
            })}
         </div>
      )
   }
   renderMidSide = (item) => {
      return (
         <div className={s.item__bodyMid}>
            <div onClick={() => this.incrItem(item)} className={s.item__add}><div>+</div></div>
            <span>{item.activeAttributes.itemCount}</span>
            <div onClick={() => item.activeAttributes.itemCount !== 0 && this.decrItem(item)} className={s.item__delete}><div>-</div></div>
         </div>
      )
   }
   renderRightSide = (item) => {
      return (
         <div className={s.item__bodyRight}>
            <div className={s.item__img}>
               <img alt="" src={item.gallery[0]} />
            </div>
         </div>
      )
   }

   render() {
      const {
         activeCurrency,
         items
      } = this.props

      return (
         items.map((item, i) => {
            item.activeAttributes.displayPrice = item.prices ? this.setPrices(item.prices, activeCurrency) : 0
            return item.activeAttributes.itemCount !== 0 && <div key={i} className={s.cart__item} >
               <div className={s.item__body}>
                  {this.renderLeftSide(item)}
                  {this.renderMidSide(item)}
                  {this.renderRightSide(item)}
               </div>
            </div >
         })
      )
   }
}
