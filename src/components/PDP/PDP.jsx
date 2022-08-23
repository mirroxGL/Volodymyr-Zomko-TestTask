import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setPdpItemTC, clearItem } from '../../redux/pdp/actions';
import s from "./PDP.module.css"
import classnames from 'classnames';


class PDP extends Component {
   constructor(props) {
      super(props)

   }

   componentDidMount() {
      console.log(this.props.isPending)
      let id = window.location.href.split("http://localhost:3000/pdp/")[1]
      this.props.setPdpItem(id)


   }
   componentWillUnmount() {
      this.props.clearItem()
   }

   render() {
      return (

         <div className={s.PDP}>
            {/* {this.props.isPending && <h1 style={{ paddingTop: 200 }}>Hello World!</h1>} */}
            <div className={s.PDPWrapper} >
               <div className={s.PDP__smallImgs}>
                  <div className={s.PDP__smallImg}><img src={this.props.item?.product.gallery[2]} alt="" /></div>
                  <div className={s.PDP__smallImg}><img src={this.props.item?.product.gallery[3]} alt="" /></div>
                  <div className={s.PDP__smallImg}><img src={this.props.item?.product.gallery[4]} alt="" /></div>
               </div>
               <div className={s.PDP__mainImg}><img src={this.props.item?.product?.gallery[0]} alt="" /></div>
               <div className={s.PDP__info}>
                  <div className={s.info__title_firm}><span>{this.props.item?.product.brand}</span></div>
                  <div className={s.info__title_type}><span>{this.props.item?.product.name}</span></div>
                  <div className={s.sizeBlock}>
                     <span>SIZE:</span>
                     <div className={s.sizeGrids}>
                        <div className={s.sizeGrid}><span>XS</span></div>
                        <div className={classnames(s.sizeGrid, s.sizeGridActive)}><span>S</span></div>
                        <div className={s.sizeGrid}><span>M</span></div>
                        <div className={s.sizeGrid}><span>L</span></div>
                     </div>
                  </div>
                  <div className={s.colorBlock}>
                     <span>COLOR:</span>
                     <div className={s.colorGrids}>

                        <div className={classnames(s.colorGrid)}>
                           <div className={s.colorGridActive}></div>
                        </div>
                        <div className={s.colorGrid}></div>
                        <div className={s.colorGrid}></div>
                     </div>
                  </div>
                  <div className={s.priceBlock}>
                     <span>PRICE:</span>
                     <br />
                     <span>$50.00</span>
                  </div>
                  <div className={s.addToCart}>
                     <a className={s.addToCartBtn}>ADD TO CART</a>
                  </div>
                  <div className={s.description}>
                     {this.props.item?.product?.description.replace(/<[^>]+>/g, '')}
                  </div>
               </div>
            </div >
         </div>
      )
   }
}



const mapStateToProps = (state) => ({
   item: state.pdpTest.item,
   isPending: state.pdpTest.isPending
})



export default connect(mapStateToProps, {
   setPdpItem: setPdpItemTC,
   clearItem: clearItem,
})(PDP)