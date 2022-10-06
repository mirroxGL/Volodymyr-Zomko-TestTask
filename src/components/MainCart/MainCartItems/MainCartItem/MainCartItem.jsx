import React, { PureComponent } from 'react'
import s from "../.././MainCart.module.css"
import prev from "../../../../assets/images/vectorPrev.svg"
import next from "../../../../assets/images/vectorNext.svg"
import { cartAttributesBuilder } from '../../../../util/object-helpers'

export default class MainCartItem extends PureComponent {
   renderLeftSide = (item) => {
      const { setPrices, activeCurrency } = this.props
      const { name, brand, prices, attributes } = item

      return (
         <div className={s.leftSide}>
            <div className={s.mainCart__header}>
               <div className={s.item__title}>{brand}</div>
               <div className={s.item__type}>{name}</div>
            </div>
            <span className={s.item__price}>{setPrices(prices, activeCurrency)}</span>
            {attributes.map((attr, i) => {
               return cartAttributesBuilder(attr, i, item, s)
            })}
         </div>
      )
   }

   renderRightSide = (item) => {
      const { incrItemHandler,
         decrItem,
         currentImg,
         currentImgIndex,
         prevImage,
         nextImage } = this.props
      const { gallery,
         activeAttributes: { itemCount } } = item

      return (
         <div className={s.rightSide}>
            <div className={s.middle}>
               <button className={s.addItem} onClick={() => incrItemHandler(item)}><span>+</span></button>
               <div className={s.itemCount}><span>{itemCount}</span></div>
               <button className={s.deleteItem} onClick={() => itemCount !== 0 && decrItem(item)}><span>_</span></button>
            </div>
            <div className={s.itemImg}>
               <img src={(currentImg !== undefined && currentImg) || gallery[0]} alt="" />
               <div className={s.prevBtn}>
                  <img src={prev} onClick={() => currentImgIndex !== 0 && prevImage(item, currentImgIndex)} alt="" />
               </div>
               <div className={s.nextBtn}>
                  <img src={next} onClick={() => currentImgIndex !== gallery.length - 1 && nextImage(item, currentImgIndex)} alt="" />
               </div>
            </div>
         </div>
      )
   }
   render() {
      const { item } = this.props
      return (
         <div className={s.firstItem}>
            {this.renderLeftSide(item)}
            {this.renderRightSide(item)}
         </div>
      )
   }
}
