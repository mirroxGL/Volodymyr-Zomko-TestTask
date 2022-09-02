import React, { Component } from 'react'
import s from ".././MainCart.module.css"
import prev from "../../../assets/images/vectorPrev.svg"
import next from "../../../assets/images/vectorNext.svg"
import classnames from 'classnames';

export default class MainCartItem extends Component {
   constructor(props) {
      super(props)
   }
   setPrices = (prices, activeCurrency) => {
      for (let i = 0; i < prices.length; i++) {
         if (prices[i].currency.symbol == activeCurrency.symbol) {
            return prices[i].currency.symbol + " " + prices[i].amount
         }
      }
   }

   incrItemHandler = (item) => {
      item.activeAttributes.itemCount += 1
      this.props.addItem()
      this.forceUpdate()

   }
   decrItem = (item) => {
      item.activeAttributes.itemCount -= 1
      this.props.substractItem()
      this.forceUpdate()
   }
   setActiveColor = (item, color) => {
      if (item.activeAttributes.activeColor != color) {
         item.activeAttributes.activeColor = color
         this.forceUpdate()
      }
   }
   setActiveSize = (item, size) => {
      if (item.activeAttributes.activeSize != size) {
         item.activeAttributes.activeSize = size
         this.forceUpdate()
      }
   }
   setActiveFirstOpt = (item, opt) => {
      if (item.activeAttributes.activeFirstOpt != opt) {
         item.activeAttributes.activeFirstOpt = opt
         this.forceUpdate()
      }
   }

   setActiveSecondOpt = (item, opt) => {
      if (item.activeAttributes.activeSecondOpt != opt) {
         item.activeAttributes.activeSecondOpt = opt
         this.forceUpdate()
      }
   }

   setActiveImage = (item, img, index) => {
      item.activeAttributes.activeImage.img = img
      item.activeAttributes.activeImage.index = index
      this.forceUpdate()

   }
   nextImage = (item, currImgNumber) => {
      if (currImgNumber + 1 < item.gallery.length) {
         this.setActiveImage(item, item.gallery[currImgNumber + 1], currImgNumber + 1)
      }
      else if (currImgNumber + 1 == item.gallery.length) {
         this.setActiveImage(item, item.gallery[currImgNumber], currImgNumber)
      }
   }

   prevImage = (item, currImgNumber) => {
      if (currImgNumber - 1 > -1) {
         this.setActiveImage(item, item.gallery[currImgNumber - 1], currImgNumber - 1)
      }
      if (currImgNumber - 1 == item.gallery[0]) {
         this.setActiveImage(item, item.gallery[0], currImgNumber)
      }
   }


   render() {
      return (
         this.props.items.map((item, i) => item.activeAttributes.itemCount != 0 && <div className={s.firstItem}>
            <div className={s.leftSide}>
               <div className={s.mainCart__header}>
                  <div className={s.item__title}>{item.brand}</div>
                  <div className={s.item__type}>{item.name}</div>
               </div>
               <span className={s.item__price}>{this.setPrices(item.prices, this.props.activeCurrency)}</span>
               {item.attributes.map((attr, i) => {
                  if (attr.type == "swatch") {
                     return <div key={i} className={s.mainCart__color}>
                        <span>{attr.name}:</span>
                        <div className={s.mainCart__colorGrids}>
                           {attr.items.map((color, i) => {
                              return <div onClick={() => this.setActiveColor(item, color.value)} key={i} style={color.value == "#FFFFFF" ? { backgroundColor: "#F5F5F5" } : { backgroundColor: color.value }} className={classnames(s.mainCart__colorGrid)}>
                                 {item.activeAttributes.activeColor == color.value && <div key={i} className={s.colorGridActive}></div>}
                              </div>
                           })}
                        </div>
                     </div>
                  }
                  else if (attr.type == "text" & attr.id == "Capacity" || attr.id == "Size") {
                     return <div key={i} className={s.mainCart__size}>
                        <span>{attr.name}:</span>
                        <div className={s.mainCart__sizeGrids}>
                           {attr.items.map((size, i) => {
                              return <a onClick={() => this.setActiveSize(item, size.value)} key={i} className={classnames(s.mainCart__sizeGrid, item.activeAttributes.activeSize == size.value && s.sizeGridActive)}><span>{size.value}</span></a>
                           })}
                        </div>
                     </div>
                  }
                  else if (attr.type == "text" & attr.id == "With USB 3 ports") {
                     return <div key={i} className={s.mainCart__size}>
                        <span>{attr.name}:</span>
                        <div className={s.mainCart__sizeGrids}>
                           {attr.items.map((size, i) => {
                              return <a onClick={() => this.setActiveFirstOpt(item, size.value)} key={i} className={classnames(s.mainCart__sizeGrid, item.activeAttributes.activeFirstOpt == size.value && s.sizeGridActive)}>{size.value}</a>
                           })}
                        </div>
                     </div>
                  }
                  else if (attr.type == "text" & attr.id == "Touch ID in keyboard") {
                     return <div key={i} className={s.mainCart__size}>
                        <span>{attr.name}:</span>
                        <div className={s.mainCart__sizeGrids}>
                           {attr.items.map((size, i) => {
                              return <a onClick={() => this.setActiveSecondOpt(item, size.value)} key={i} className={classnames(s.mainCart__sizeGrid, item.activeAttributes.activeSecondOpt == size.value && s.sizeGridActive)}>{size.value}</a>
                           })}
                        </div>
                     </div>
                  }
               })}
            </div>
            <div className={s.rightSide}>
               <div className={s.middle}>
                  <div className={s.addItem} onClick={() => this.incrItemHandler(item)}><span>+</span></div>
                  <div className={s.itemCount}><span>{item.activeAttributes.itemCount}</span></div>
                  <div className={s.deleteItem} onClick={() => item.activeAttributes.itemCount != 0 && this.decrItem(item)}><span>_</span></div>
               </div>
               <div className={s.itemImg}>
                  <img src={item.activeAttributes.activeImage != undefined && item.activeAttributes.activeImage?.img || item.gallery[0]} alt="" />
                  <div className={s.prevBtn}>
                     <img src={prev} onClick={() => item.activeAttributes.activeImage.index != 0 && this.prevImage(item, item.activeAttributes.activeImage.index)} alt="" />
                  </div>
                  <div className={s.nextBtn}>
                     <img src={next} onClick={() => item.activeAttributes.activeImage.index != item.gallery.length - 1 && this.nextImage(item, item.activeAttributes.activeImage.index)} alt="" />
                  </div>

               </div>
            </div>
         </div>)

      )
   }
}
