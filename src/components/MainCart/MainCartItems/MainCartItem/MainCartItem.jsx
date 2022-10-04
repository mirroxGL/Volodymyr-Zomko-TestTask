import React, { PureComponent } from 'react'
import s from "../.././MainCart.module.css"
import prev from "../../../../assets/images/vectorPrev.svg"
import next from "../../../../assets/images/vectorNext.svg"

import { cartAttributesBuilder } from '../../../../util/object-helpers'

export default class MainCartItem extends PureComponent {
   renderLeftSide = (item) => {
      return (
         <div className={s.leftSide}>
            <div className={s.mainCart__header}>
               <div className={s.item__title}>{item.brand}</div>
               <div className={s.item__type}>{item.name}</div>
            </div>
            <span className={s.item__price}>{this.props.setPrices(item.prices, this.props.activeCurrency)}</span>
            {item.attributes.map((attr, i) => {
               return cartAttributesBuilder(attr, i, item, s)
            })}
         </div>
      )
   }

   renderRightSide = (item) => {
      return (
         <div className={s.rightSide}>
            <div className={s.middle}>
               <button className={s.addItem} onClick={() => this.props.incrItemHandler(item)}><span>+</span></button>
               <div className={s.itemCount}><span>{item.activeAttributes.itemCount}</span></div>
               <button className={s.deleteItem} onClick={() => item.activeAttributes.itemCount !== 0 && this.props.decrItem(item)}><span>_</span></button>
            </div>
            <div className={s.itemImg}>
               <img src={(this.props.currentImg !== undefined && this.props.currentImg) || item.gallery[0]} alt="" />
               <div className={s.prevBtn}>
                  <img src={prev} onClick={() => this.props.currentImgIndex !== 0 && this.props.prevImage(item, this.props.currentImgIndex)} alt="" />
               </div>
               <div className={s.nextBtn}>
                  <img src={next} onClick={() => this.props.currentImgIndex !== item.gallery.length - 1 && this.props.nextImage(item, this.props.currentImgIndex)} alt="" />
               </div>
            </div>
         </div>
      )
   }
   render() {
      return (
         <div className={s.firstItem}>
            {this.renderLeftSide(this.props.item)}
            {this.renderRightSide(this.props.item)}
         </div>
      )
   }
}
