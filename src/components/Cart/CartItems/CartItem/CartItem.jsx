import React, { PureComponent } from 'react'
import { setPrices } from '../../../../util/object-helpers.jsx'
import CartAttributesBuilder from '../../../../util/AttributesBuilders/CartAttributesBuilder'
import s from "../../Cart.module.css"

export default class CartItem extends PureComponent {
   renderLeftSide = (item) => {
      const { attributes,
         prices,
         brand,
         name
      } = item

      return (
         <div className={s.item__bodyLeft}>
            <div className={s.item__title}>
               <span><span>{brand}</span>{name}</span>
            </div>
            <div className={s.item__price}>
               <span>{setPrices(prices, this.props.activeCurrency)}</span>
            </div>
            {attributes.map((attr, i) => {
               return <CartAttributesBuilder key={i} attr={attr} i={i} item={item} s={s} />
            })}
         </div>
      )
   }
   renderMidSide = (item) => {
      const { incrItem, decrItem } = this.props
      const { activeAttributes: { itemCount } } = item

      return (
         <div className={s.item__bodyMid}>
            <button onClick={() => incrItem(item)} className={s.item__add}><div>+</div></button>
            <span>{itemCount}</span>
            <button onClick={() => itemCount !== 0 && decrItem(item)} className={s.item__delete}><div>-</div></button>
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
