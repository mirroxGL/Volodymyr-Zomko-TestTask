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
      const { isFirstImageReavealed, mainImage } = this.state
      const { item } = this.props

      if (isFirstImageReavealed && mainImage !== item?.product.gallery[0]) {
         this.setState({ mainImage: item?.product.gallery[0], isFirstImageReavealed: false })
      }
   }

   componentWillUnmount() {
      this.props.clearItem()
   }

   setMainImage = (image) => {
      this.setState({ mainImage: image })
   }

   renderSmallImages = () => {
      const { item } = this.props

      return (
         <div className={s.PDP__smallImgs}>
            {item?.product.gallery.map((img, i) => {
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
      const { item,
         setPrices,
         setItemToCart,
         activeCurrency } = this.props

      return (
         <div className={s.PDP__info}>
            <div className={s.info__title_firm}><span>{item?.product.brand}</span></div>
            <div className={s.info__title_type}><span>{item?.product.name}</span></div>
            <AttributesContainer />
            <div className={s.priceBlock}>
               <span>PRICE:</span>
               <br />
               <span>{item?.product.prices ? setPrices(item.product.prices, activeCurrency) : ""}</span>
            </div>
            <button onClick={() => setItemToCart(item?.product)} className={s.addToCart}>
               <div className={s.addToCartBtn}>ADD TO CART</div>
            </button>
            <div dangerouslySetInnerHTML={{ __html: item?.product?.description }} className={s.description}>
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