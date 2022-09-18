import React from 'react'
import { Component } from 'react';
import logo from '../.././assets/images/logo.svg'
import vectorDown from '../.././assets/images/vectorDown.svg'
import vectorUp from '../.././assets/images/vectorUp.svg'
import cart from '../.././assets/images/cart.svg'
import s from "./header.module.css"
import { NavLink } from 'react-router-dom';





class Header extends Component {
   constructor(props) {
      super(props);
      this.cartRef = React.createRef();
      this.currencyRef = React.createRef();

   }

   componentDidMount() {
      this.props.getCategories()
   }
   componentDidUpdate() {

   }
   handleLogoClick = () => {
      this.props.toggleCartReveal(false)
      this.props.toggleCurrencyReveal(false)
      this.props.setActiveCategory("all")
      this.props.setActiveBodyCategory("all")
   }

   handleCartMouseClick = (e) => {
      this.props.toggleCurrencyReveal(false)
      this.props.toggleCartReveal(true)
      if (this.props.isToggleCartReveal) {
         this.props.toggleCartReveal(false)
      }
   }
   handleCurrencyMouseClick = (e) => {
      this.props.toggleCartReveal(false)
      this.props.toggleCurrencyReveal(true)
      if (this.props.isToggleCurrencyReveal) {
         this.props.toggleCurrencyReveal(false)
      }
   }
   handleCategoryClick = (category) => {
      this.props.setActiveCategory(category)
      this.props.setActiveBodyCategory(category)
      this.props.setPreviousUrl(category)

   }

   render() {
      return (
         <header>
            <div className={s.flexNavBlock}>
               <div className={s.categoriesBlock}>
                  <div className={s.categories}>
                     {this.props.categories?.map((category, i) => {
                        return <NavLink to={{ pathname: `/${category.name}` }} key={i} onClick={() => this.handleCategoryClick(category.name)} className={s.categories__item}><span className={this.props.activeCategory === category.name ? s.active : 0}>{category.name}</span></NavLink>
                     })}
                  </div>
               </div>
               <NavLink onClick={this.handleLogoClick} to={this.props.previousUrl} className={s.logoBlock}>
                  <img src={logo} alt="logo" />
               </NavLink>
               <div className={s.cartNcurrency}>
                  <div ref={this.currencyRef} onClick={this.handleCurrencyMouseClick} className={s.currencyBlock}>
                     <div className={s.currency}>$<img className={s.vector} src={this.props.isToggleCurrencyReveal ? vectorUp : vectorDown} alt="" /> </div>
                  </div>

                  <div ref={this.cartRef} onClick={this.handleCartMouseClick} className={s.cart}>
                     <div style={{ display: this.props.itemsSumCount === 0 && "none" }} className={s.itemsCount}><span>{this.props.itemsSumCount}</span></div>
                     <div><img src={cart} alt="" /></div>
                  </div>
               </div>
            </div>
         </header >
      )
   }

}


export default Header