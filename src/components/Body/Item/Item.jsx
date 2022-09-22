import React, { PureComponent } from 'react'
import s from "./../body.module.css"
import { NavLink } from 'react-router-dom';
import cart from "../../../assets/images/whiteCart.svg"
import classnames from 'classnames';

export default class Item extends PureComponent {

   setItemId = () => {
      this.props.setItemId(this.props.item.id)
   }

   setPrices = (prices, activeCurrency) => {
      for (let i = 0; i < prices.length; i++) {
         if (prices[i].currency.symbol === activeCurrency.symbol) {
            return prices[i].currency.symbol + " " + prices[i].amount
         }
      }
   }
   setTotalCount = (items) => {
      let sum = 1
      for (let i = 0; i < items.length; i++) {
         let num = items[i].activeAttributes.itemCount
         sum += num
      }
      return sum
   }
   setItemToCart = (item) => {
      if (this.props.cartItems.some(i => i.id === item.id)) {
         this.props.cartItems.forEach(i => { i.id === item.id && (i.activeAttributes.itemCount += 1) }
         )
      }
      else {
         this.props.setItemToCart({
            ...item, activeAttributes: {
               ...item.activeAttributes = {
                  activeColor: item.attributes.find(a => a.name === "Color")?.items[0].value,
                  activeSize: item.attributes.find(a => a.name === "Size" || a.name === "Capacity")?.items[0].value,
                  activeFirstOpt: item.attributes.find(a => a.name === "With USB 3 ports")?.items[0].value,
                  activeSecondOpt: item.attributes.find(a => a.name === "Touch ID in keyboard")?.items[0].value,
                  activeImage: { img: undefined, index: 0 },
                  itemCount: 1,
                  displayPrice: this.setPrices(this.props.item.prices, this.props.activeCurrency)
               }
            }
         })
      }
      this.props.addItem()
   }

   render() {
      const { activeCurrency,
         item,
         item: { id, inStock, brand, prices, gallery, name }
      } = this.props
      return (
         <div className={s.item__wrapper}>
            <NavLink className={s.redirectToPdp} to={`/pdp/${id}`}>
               <div className={s.item}>
                  {inStock && <div className={s.outOfStock__label}>OUT OF STOCK</div>}
                  <div className={classnames(s.item__img, inStock && s.item__50opImg)}><img src={gallery[0]} alt="" /></div>
                  <div className={s.item__title}>{brand} {name}</div>
                  <div className={s.item__price}>{prices ? this.setPrices(prices, activeCurrency) : ""}</div>
               </div>
            </NavLink>
            <div onClick={() => this.setItemToCart(item)} style={{ display: inStock && "none" }} className={s.cart}><img src={cart} alt="" /></div>
         </div >
      )
   }
}





