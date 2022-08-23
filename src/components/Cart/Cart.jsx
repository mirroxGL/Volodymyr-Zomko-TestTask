import React, { Component } from 'react'
import s from "./Cart.module.css"
import classnames from 'classnames';
import c from "../../assets/images/Product B.png"
import { NavLink } from 'react-router-dom';


export default class Cart extends Component {
   constructor(props) {
      super(props);
      this.toggleFalseRevealCart = this.toggleFalseRevealCart.bind(this)

   }
   toggleFalseRevealCart() {
      this.props.toggleCartReveal(false)
   }



   render() {
      return (

         this.props.isToggleCartReveal ? <div className={classnames(s.cart)} >
            <div className={s.cartWrapper}>
               <div className={s.cart__title}>
                  <h2>My Bag <span>, 3 items</span></h2>
               </div>
               <div className={classnames(s.cart__body)}>
                  <div className={s.cart__items}>
                     <div className={s.cart__item}>
                        <div className={s.item__body}>
                           <div className={s.item__bodyLeft}>
                              <div className={s.item__title}>
                                 <span>Apollo Running Short</span>
                              </div>
                              <div className={s.item__price}>
                                 <span>$50.00</span>
                              </div>
                              <div className={s.item__sizeBlock}>
                                 <span>Size:</span>
                                 <div className={s.size__gridsBlock}>
                                    <a className={s.sizeGrid}>XS</a>
                                    <a className={classnames(s.sizeGrid, s.activeSizeGrid)}>S</a>
                                    <a className={s.sizeGrid}>M</a>
                                    <a className={s.sizeGrid}>L</a>
                                 </div>
                              </div>
                              <div className={s.item__colorBlock}>
                                 <span>Color:</span>
                                 <div className={s.chooseColorBlock}>
                                    <div className={classnames(s.color)}>
                                       <div className={s.activeColor}></div>
                                    </div>
                                    <div className={classnames(s.color)}></div>
                                    <div className={classnames(s.color)}></div>
                                 </div>
                              </div>
                           </div>
                           <div className={s.item__bodyMid}>
                              <div className={s.item__add}><a>+</a></div>
                              <span>1</span>
                              <div className={s.item__delete}><a>-</a></div>
                           </div>
                           <div className={s.item__bodyRight}>
                              <div className={s.item__img}>
                                 <img src={c} alt="" />
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className={s.cart__item}>
                        <div className={s.item__body}>
                           <div className={s.item__bodyLeft}>
                              <div className={s.item__title}>
                                 <span>Jupiter Wayfarer</span>
                              </div>
                              <div className={s.item__price}>
                                 <span>$75.00</span>
                              </div>
                              <div className={s.item__sizeBlock}>
                                 <span>Size:</span>
                                 <div className={s.size__gridsBlock}>
                                    <a className={classnames(s.sizeGrid, s.activeSizeGrid)}>S</a>
                                    <a className={s.sizeGrid}>M</a>
                                 </div>
                              </div>
                              <div className={s.item__colorBlock}>
                                 <span>Color:</span>
                                 <div className={s.chooseColorBlock}>
                                    <div className={classnames(s.color)}>
                                       <div className={s.activeColor}></div>
                                    </div>
                                    <div className={classnames(s.color)}></div>
                                    <div className={classnames(s.color)}></div>
                                 </div>
                              </div>
                           </div>
                           <div className={s.item__bodyMid}>
                              <div className={s.item__add}><a>+</a></div>
                              <span>2</span>
                              <div className={s.item__delete}><a>-</a></div>
                           </div>
                           <div className={s.item__bodyRight}>
                              <div className={s.item__img}>
                                 <img src={c} alt="" />
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className={s.totalBlock}>
                     <span>Total</span>
                     <span>$200.00</span>
                  </div>
               </div>
               <div className={s.cartButtonsBlock}>
                  <NavLink onClick={this.toggleFalseRevealCart} to="/cart" className={s.viewBagBtn}>VIEW BAG</NavLink>
                  <a className={s.checkOutBtn}>CHECK OUT</a>
               </div>
            </div>
         </div> : ""


      )
   }
}
