import React, { PureComponent } from 'react'
import s from "./../body.module.css"
import { NavLink } from 'react-router-dom';
import cart from "../../../assets/images/whiteCart.svg"
import classnames from 'classnames';

export default class Item extends PureComponent {
   render() {
      const { activeCurrency,
         item,
         setPrices,
         setItemToCart,
         item: { id, inStock, brand, prices, gallery, name }
      } = this.props

      return (
         <div className={s.item__wrapper}>
            <NavLink className={s.redirectToPdp} to={`/pdp/${id}`}>
               <div className={s.item}>
                  {!inStock && <div className={s.outOfStock__label}>OUT OF STOCK</div>}
                  <div className={classnames(s.item__img, !inStock && s.item__50opImg)}><img src={gallery[0]} alt="" /></div>
                  <div className={s.item__title}>{brand} {name}</div>
                  <div className={s.item__price}>{prices ? setPrices(prices, activeCurrency) : ""}</div>
               </div>
            </NavLink>
            <button onClick={() => inStock && setItemToCart(item)} className={s.cart}><img src={cart} alt="" /></button>
         </div >
      )
   }
}





