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
      const { setPdpItem } = this.props
      let id = window.location.href.split("http://localhost:3000/pdp/")[1]
      setPdpItem(id)
   }

   componentDidUpdate() {
      const { isFirstImageReavealed, mainImage } = this.state
      const { item } = this.props
      const firstImage = item?.product.gallery[0]

      if (isFirstImageReavealed && mainImage !== firstImage) {
         this.setState({ mainImage: firstImage, isFirstImageReavealed: false })
      }
   }

   componentWillUnmount() {
      const { clearItem } = this.props
      clearItem()
   }

   setMainImage = (image) => {
      this.setState({ mainImage: image })
   }

   renderSmallImages = () => {
      const { item } = this.props
      const gallery = item?.product.gallery

      return (
         item ? <div className={s.PDP__smallImgs}>
            {gallery.map((img, i) => {
               return <div key={i} onClick={() => this.setMainImage(img)} className={s.PDP__smallImg}><img src={img} alt="" /></div>
            })}
         </div> : <h1>Images are loading...</h1>
      )
   }
   renderMainImage = () => {
      const { mainImage } = this.state
      return (
         <div className={s.PDP__mainImg}><img src={mainImage} alt="" /></div>
      )
   }
   renderPDPInfo = () => {
      const { item,
         setPrices,
         setItemToCart,
         activeCurrency } = this.props
      const product = item?.product

      return (
         item ? <div className={s.PDP__info}>
            <div className={s.info__title_firm}><span>{product.brand}</span></div>
            <div className={s.info__title_type}><span>{product.name}</span></div>
            <AttributesContainer />
            <div className={s.priceBlock}>
               <span>PRICE:</span>
               <br />
               <span>{product.prices ? setPrices(product.prices, activeCurrency) : ""}</span>
            </div>
            <button onClick={() => setItemToCart(product)} className={s.addToCart}>
               <div className={s.addToCartBtn}>ADD TO CART</div>
            </button>
            <div dangerouslySetInnerHTML={{ __html: product.description }} className={s.description}>
            </div>
         </div> : <h1>Attributes are loading...</h1>
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