import React, { PureComponent } from 'react'
import s from "./PDP.module.css"
import AttributesContainer from './Attributes/AttributesContainer';


class PDP extends PureComponent {
   constructor(props) {
      super(props)
      this.state = {
         mainImage: undefined,
         isFirstImageReavealed: true
      }
   }
   async componentDidMount() {
      let id = window.location.href.split("http://localhost:3000/pdp/")[1]
      this.props.setPdpItem(id)
   }

   componentDidUpdate() {
      if (this.state.isFirstImageReavealed && this.state.mainImage !== this.props.item?.product.gallery[0]) {
         this.setState({ mainImage: this.props.item?.product.gallery[0], isFirstImageReavealed: false })
      }
   }

   componentWillUnmount() {
      this.props.clearItem()
   }

   setMainImage = (image) => {
      this.setState({ mainImage: image })
   }

   renderSmallImages = () => {
      return (
         <div className={s.PDP__smallImgs}>
            {this.props.item?.product.gallery.map((img, i) => {
               return <div key={i} onClick={() => this.setMainImage(img)} className={s.PDP__smallImg}><img src={img} alt="" /></div>
            })}
         </div>
      )
   }
   renderMainImage = () => {
      return (
         <div className={s.PDP__mainImg}><img src={this.state.mainImage} alt="" /></div>
      )
   }
   renderPDPInfo = () => {
      return (
         <div className={s.PDP__info}>
            <div className={s.info__title_firm}><span>{this.props.item?.product.brand}</span></div>
            <div className={s.info__title_type}><span>{this.props.item?.product.name}</span></div>
            <AttributesContainer />
            <div className={s.priceBlock}>
               <span>PRICE:</span>
               <br />
               <span>{this.props.item?.product.prices ? this.props.setPrices(this.props.item.product.prices, this.props.activeCurrency) : ""}</span>
            </div>
            <button onClick={() => this.props.setItemToCart(this.props.item?.product)} className={s.addToCart}>
               <div className={s.addToCartBtn}>ADD TO CART</div>
            </button>
            <div dangerouslySetInnerHTML={{ __html: this.props.item?.product?.description }} className={s.description}>
            </div>
         </div>
      )
   }

   render() {
      const {
         isPending
      } = this.props
      return (
         isPending ? <h1>Loading...</h1> :
            <div className={s.PDP}>
               <div className={s.PDPWrapper} >
                  {this.renderSmallImages()}
                  {this.renderMainImage()}
                  {this.renderPDPInfo()}
               </div >
            </div >
      )
   }
}

export default PDP