import React, { Component } from 'react'
import s from ".././Cart.module.css"
import classnames from 'classnames';

export default class CartItem extends Component {
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
   shouldComponentUpdate = (nextProps, nextState) => {
      return nextProps.items[0].activeAttributes.activeColor != this.props.items[0].activeAttributes.activeColor
   }


   render() {
      return (
         this.props.items.map((item, i) => {
            item.activeAttributes.displayPrice = item.prices ? this.setPrices(item.prices, this.props.activeCurrency) : 0
            return <div key={i} className={s.cart__item} >
               <div className={s.item__body}>
                  <div className={s.item__bodyLeft}>
                     <div className={s.item__title}>
                        <span><span>{item.brand} </span>{item.name}</span>
                     </div>
                     <div className={s.item__price}>
                        <span>{item.activeAttributes.displayPrice}</span>
                     </div>
                     {item.attributes.map((attr, i) => {
                        if (attr.type == "swatch") {
                           return <div key={i} className={s.item__colorBlock}>
                              <span>{attr.name}:</span>
                              <div className={s.chooseColorBlock}>
                                 {attr.items.map((color, i) => {
                                    return <div onClick={() => this.setActiveColor(item, color.value)} key={i} style={color.value == "#FFFFFF" ? { backgroundColor: "#F5F5F5" } : { backgroundColor: color.value }} className={classnames(s.color)}>
                                       {item.activeAttributes.activeColor == color.value && <div key={i} className={s.activeColor}></div>}
                                    </div>
                                 })}
                              </div>
                           </div>
                        }
                        else if (attr.type == "text" & attr.id == "Capacity" || attr.id == "Size") {
                           return <div key={i} className={s.item__sizeBlock}>
                              <span>{attr.name}:</span>
                              <div className={s.size__gridsBlock}>
                                 {attr.items.map((size, i) => {
                                    return <a onClick={() => this.setActiveSize(item, size.value)} key={i} className={classnames(s.sizeGrid, item.activeAttributes.activeSize == size.value && s.activeSizeGrid)}>{size.value}</a>
                                 })}
                              </div>
                           </div>
                        }
                        else if (attr.type == "text" & attr.id == "With USB 3 ports") {
                           return <div key={i} className={s.item__sizeBlock}>
                              <span>{attr.name}:</span>
                              <div className={s.size__gridsBlock}>
                                 {attr.items.map((size, i) => {
                                    return <a onClick={() => this.setActiveFirstOpt(item, size.value)} key={i} className={classnames(s.sizeGrid, item.activeAttributes.activeFirstOpt == size.value && s.activeSizeGrid)}>{size.value}</a>
                                 })}
                              </div>
                           </div>
                        }
                        else if (attr.type == "text" & attr.id == "Touch ID in keyboard") {
                           return <div key={i} className={s.item__sizeBlock}>
                              <span>{attr.name}:</span>
                              <div className={s.size__gridsBlock}>
                                 {attr.items.map((size, i) => {
                                    return <a onClick={() => this.setActiveSecondOpt(item, size.value)} key={i} className={classnames(s.sizeGrid, item.activeAttributes.activeSecondOpt == size.value && s.activeSizeGrid)}>{size.value}</a>
                                 })}
                              </div>
                           </div>
                        }

                     })}


                  </div>
                  <div className={s.item__bodyMid}>
                     <div onClick={() => this.incrItem(item)} className={s.item__add}><a>+</a></div>
                     <span>{item.activeAttributes.itemCount}</span>
                     <div onClick={() => item.activeAttributes.itemCount != 0 && this.decrItem(item)} className={s.item__delete}><a>-</a></div>
                  </div>
                  <div className={s.item__bodyRight}>
                     <div className={s.item__img}>
                        <img alt="" src={item.gallery[0]} />
                     </div>
                  </div>
               </div>
            </div >
         })


      )
   }
}
