import React, { Component } from 'react'
import s from "./MainCart.module.css"
import classnames from 'classnames';
import c from "../../assets/images/Product B.png"
import prev from "../../assets/images/vectorPrev.svg"
import next from "../../assets/images/vectorNext.svg"
<a></a>
export default class MainCart extends Component {
   constructor(props) {
      super(props)

   }


   render() {
      return (
         <div className={s.mainCart}>
            <div className={s.mainCartWrapper}>
               <div className={s.container}>
                  <div className={s.mainCart__title}>CART</div>
                  <div className={s.firstItem}>
                     <div className={s.leftSide}>
                        <div className={s.mainCart__header}>
                           <div className={s.item__title}>Apollo</div>
                           <div className={s.item__type}>Running Short</div>
                        </div>
                        <span className={s.item__price}>$50.00</span>
                        <div className={s.mainCart__size}>
                           <span>SIZE:</span>
                           <div className={s.mainCart__sizeGrids}>
                              <div className={s.mainCart__sizeGrid}>
                                 <span>XS</span>
                              </div>
                              <div className={classnames(s.mainCart__sizeGrid, s.sizeGridActive)}>
                                 <span>S</span>
                              </div>
                              <div className={s.mainCart__sizeGrid}>
                                 <span>M</span>
                              </div>
                              <div className={s.mainCart__sizeGrid}>
                                 <span>L</span>
                              </div>
                           </div>
                        </div>
                        <div className={s.mainCart__color}>
                           <span>COLOR:</span>
                           <div className={s.mainCart__colorGrids}>
                              <div className={s.mainCart__colorGrid}>
                                 <div className={s.colorGridActive}></div>
                              </div>
                              <div className={s.mainCart__colorGrid}></div>
                              <div className={s.mainCart__colorGrid}></div>
                           </div>
                        </div>
                     </div>

                     <div className={s.rightSide}>
                        <div className={s.middle}>
                           <div className={s.addItem}><span>+</span></div>
                           <div className={s.itemCount}><span>1</span></div>
                           <div className={s.deleteItem}><span>_</span></div>
                        </div>
                        <div className={s.itemImg}>
                           <img src={c} alt="" />
                           <div className={s.prevBtn}>
                              <img src={prev} alt="" />
                           </div>
                           <div className={s.nextBtn}>
                              <img src={next} alt="" />
                           </div>

                        </div>
                     </div>
                  </div>
                  <div className={s.item}>
                     <div className={s.leftSide}>
                        <div className={s.mainCart__header}>
                           <div className={s.item__title}>Jupiter</div>
                           <div className={s.item__type}>Wayfarer</div>
                        </div>
                        <span className={s.item__price}>$75.00</span>
                        <div className={s.mainCart__size}>
                           <span>SIZE:</span>
                           <div className={s.mainCart__sizeGrids}>
                              <div className={classnames(s.mainCart__sizeGrid, s.sizeGridActive)}>
                                 <span>S</span>
                              </div>
                              <div className={s.mainCart__sizeGrid}>
                                 <span>M</span>
                              </div>
                           </div>
                        </div>
                        <div className={s.mainCart__color}>
                           <span>COLOR:</span>
                           <div className={s.mainCart__colorGrids}>
                              <div className={s.mainCart__colorGrid}>
                                 <div className={s.colorGridActive}></div>
                              </div>
                              <div className={s.mainCart__colorGrid}></div>
                              <div className={s.mainCart__colorGrid}></div>
                           </div>
                        </div>
                     </div>

                     <div className={s.rightSide}>
                        <div className={s.middle}>
                           <div className={s.addItem}><span>+</span></div>
                           <div className={s.itemCount}><span>1</span></div>
                           <div className={s.deleteItem}><span>_</span></div>
                        </div>
                        <div className={s.itemImg}>
                           <img src={c} alt="" />
                           <div className={s.prevBtn}>
                              <img src={prev} alt="" />
                           </div>
                           <div className={s.nextBtn}>
                              <img src={next} alt="" />
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className={s.amount}>
                     <div className={s.taxes}>
                        <span className={s.label}>Tax 21%: </span>
                        <span className={s.number}>$42.00</span>
                     </div>
                     <div className={s.quantity}>
                        <span className={s.label}>Quantity: </span>
                        <span className={s.number}>3</span>
                     </div>
                     <div className={s.total}>
                        <span className={s.label}>Total: </span>
                        <span className={s.number}>$200.00</span>
                     </div>
                  </div>
                  <div className={s.orderBtn}>
                     <a>ORDER</a>
                  </div>
               </div>
            </div>
         </div>
      )
   }
}
