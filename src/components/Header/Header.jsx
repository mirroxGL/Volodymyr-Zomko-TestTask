import React from 'react'
import { PureComponent } from 'react';
import logo from '../.././assets/images/logo.svg'
import vectorDown from '../.././assets/images/vectorDown.svg'
import vectorUp from '../.././assets/images/vectorUp.svg'
import cart from '../.././assets/images/cart.svg'
import s from "./header.module.css"
import { NavLink } from 'react-router-dom';


class Header extends PureComponent {
   constructor(props) {
      super(props)
      this.state = {
         burgerActive: false
      }
   }
   burgerHandler = (e) => {
      this.state.burgerActive === false ? this.setState({ burgerActive: true }) : this.setState({ burgerActive: false })
      const navbar = document.querySelector('#nav')
      e.currentTarget.classList.toggle('active');
      navbar.classList.toggle('active')
   }
   componentDidMount() {
      const { getCategories } = this.props

      getCategories()
   }

   renderCategories = () => {
      const { handleCategoryClick, activeCategory, categories } = this.props

      return (
         <div>
            {this.renderLogo()}
            <div id='nav' className={s.navbar} style={{ transform: this.state.burgerActive && "translateX(0)" }}>
               <div className={s.categoriesBlock}>
                  <div className={s.categories}>
                     {categories?.map((category, i) => {
                        return <NavLink to={{ pathname: `/${category.name}` }} key={i} onClick={() => handleCategoryClick(category.name)} className={s.categories__item}><span className={activeCategory === category.name ? s.active : 0}>{category.name}</span></NavLink>
                     })}
                  </div>
               </div>
            </div>
         </div>


      )
   }

   renderLogo = () => {
      // const { handleLogoClick } = this.props

      return (
         <div>
            <button className={s.logoBlock}>
               <span className={s.store_name}>G-Store</span>
               <a href="/"><img src={logo} alt="logo" /></a>
            </button>
         </div>
      )
   }

   renderCartAndCurrency = () => {
      const { handleCurrencyMouseClick,
         handleCartMouseClick,
         itemsSumCount,
         isToggleCurrencyReveal } = this.props
      return (
         <div className={s.cartNcurrency}>
            <button onClick={() => handleCurrencyMouseClick()} className={s.currencyBlock}>
               <div className={s.currency}>$<img className={s.vector} src={isToggleCurrencyReveal ? vectorUp : vectorDown} alt="" /> </div>
            </button>
            <button onClick={() => handleCartMouseClick()} className={s.cart}>
               <div style={{ display: !itemsSumCount && "none" }} className={s.itemsCount}><span>{itemsSumCount}</span></div>
               <div><img src={cart} alt="" /></div>
            </button>
            <div className={s.burger} onClick={this.burgerHandler}>
               <span></span>
               <span></span>
               <span></span>
            </div>
         </div>
      )
   }

   render() {
      return (<div>
         <div className={s.wrapper__marquee}>
            <div className={s.marquee}>
               <ul className={s.marquee__content}>
                  <li>EPIC SALE | 15% OFF EVERYTHING - APPLIED AT THE CHECKOUT</li>
                  <li>EPIC SALE | 15% OFF EVERYTHING - APPLIED AT THE CHECKOUT</li>
                  <li>EPIC SALE | 15% OFF EVERYTHING - APPLIED AT THE CHECKOUT</li>
                  <li>EPIC SALE | 15% OFF EVERYTHING - APPLIED AT THE CHECKOUT</li>
                  <li>EPIC SALE | 15% OFF EVERYTHING - APPLIED AT THE CHECKOUT</li>
                  <li>EPIC SALE | 15% OFF EVERYTHING - APPLIED AT THE CHECKOUT</li>
                  <li>EPIC SALE | 15% OFF EVERYTHING - APPLIED AT THE CHECKOUT</li>
                  <li>EPIC SALE | 15% OFF EVERYTHING - APPLIED AT THE CHECKOUT</li>
                  <li>EPIC SALE | 15% OFF EVERYTHING - APPLIED AT THE CHECKOUT</li>
                  <li>EPIC SALE | 15% OFF EVERYTHING - APPLIED AT THE CHECKOUT</li>
                  <li>EPIC SALE | 15% OFF EVERYTHING - APPLIED AT THE CHECKOUT</li>
                  <li>EPIC SALE | 15% OFF EVERYTHING - APPLIED AT THE CHECKOUT</li>
                  <li>EPIC SALE | 15% OFF EVERYTHING - APPLIED AT THE CHECKOUT</li>
                  <li>EPIC SALE | 15% OFF EVERYTHING - APPLIED AT THE CHECKOUT</li>
                  <li>EPIC SALE | 15% OFF EVERYTHING - APPLIED AT THE CHECKOUT</li>
                  <li>EPIC SALE | 15% OFF EVERYTHING - APPLIED AT THE CHECKOUT</li>
                  <li>EPIC SALE | 15% OFF EVERYTHING - APPLIED AT THE CHECKOUT</li>
                  <li>EPIC SALE | 15% OFF EVERYTHING - APPLIED AT THE CHECKOUT</li>
               </ul>
            </div>
         </div>
         <header>
            <div className={s.header__container}>
               <div className={s.flexNavBlock}>
                  {this.renderCategories()}
                  {this.renderCartAndCurrency()}
               </div>
            </div>
         </header >
      </div>

      )
   }
}


export default Header