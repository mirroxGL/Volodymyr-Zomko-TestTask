import React, { Component } from 'react'
import cartAttributesBuilder from './CartAttributesBuilder'
import s from "../../Cart.module.css"

export default class CartItem extends Component {
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
            <button onClick={() => this.props.incrItem(item)} className={s.item__add}><div>+</div></button>
            <span>{item.activeAttributes.itemCount}</span>
            <button onClick={() => item.activeAttributes.itemCount !== 0 && this.props.decrItem(item)} className={s.item__delete}><div>-</div></button>
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
         item,
      } = this.props

      return (
         item && <div className={s.item__body}>
            {this.renderLeftSide(item)}
            {this.renderMidSide(item)}
            {this.renderRightSide(item)}
         </div>
      )
   }
}
