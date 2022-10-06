import React, { PureComponent } from 'react'
import { setActiveColor, setActiveFirstOpt, setActiveSecondOpt, setActiveSize } from '../../../redux/pdp/actions'
import Attributes from './Attributes'
import { connect } from 'react-redux'
import s from "../PDP.module.css"
import classnames from 'classnames'

class AttributesContainer extends PureComponent {
   PDPAttributesBuilder = (attr, i) => {
      const { activeColor,
         setActiveColor,
         setActiveSize,
         activeSize,
         setActiveFirstOpt,
         setActiveSecondOpt,
         activeFirstOpt,
         activeSecondOpt } = this.props

      if (attr.type === "swatch") {
         return (<div key={i} className={s.colorBlock}>
            <span className={s.attrLabel}>{attr.id}:</span>
            <div className={s.colorGrids}>
               {attr.items.map((color, i) => {
                  return (<button key={i} onClick={() => setActiveColor(color.value)} style={color.value === "#FFFFFF" ? { backgroundColor: "#F5F5F5" } : { backgroundColor: color.value }} className={s.colorGrid}>
                     {activeColor === color.value && <div className={s.colorGridActive}></div>}
                  </button>)
               })}
            </div>
         </div>)
      }
      else if (attr.type === "text" & attr.id === "Capacity" || attr.id === "Size") {
         return (<div key={i} className={s.sizeBlock}>
            <span className={s.attrLabel}>{attr.id}:</span>
            <div className={s.sizeGrids}>
               {attr.items.map((item, i) => {
                  return (<button key={i} onClick={() => setActiveSize(item.value)} className={classnames(s.sizeGrid, activeSize === item.value && s.sizeGridActive)}>
                     <span >{item.value}</span>
                  </button>)
               })}
            </div>
         </div>)
      }
      else if (attr.type === "text" & attr.id === "With USB 3 ports") {
         return (<div key={i} className={s.sizeBlock}>
            <span className={s.attrLabel}>{attr.id}:</span>
            <div className={s.sizeGrids}>
               {attr.items.map((item, i) => {
                  return (<button key={i} onClick={() => setActiveFirstOpt(item.value)} className={classnames(s.sizeGrid, activeFirstOpt === item.value && s.sizeGridActive)}>
                     <span>{item.value}</span>
                  </button>)
               })}
            </div>
         </div>)
      }
      else {
         return (<div key={i} className={s.sizeBlock}>
            <span className={s.attrLabel}>{attr.id}:</span>
            <div className={s.sizeGrids}>
               {attr.items.map((item, i) => {
                  return (<button key={i} onClick={() => setActiveSecondOpt(item.value)} className={classnames(s.sizeGrid, activeSecondOpt === item.value && s.sizeGridActive)}>
                     <span>{item.value}</span>
                  </button>)
               })}
            </div>
         </div>)
      }
   }
   render() {
      const { item } = this.props

      return (
         <Attributes {...this.props} PDPAttributesBuilder={this.PDPAttributesBuilder} attributes={item?.product.attributes} />
      )
   }
}


const mapStateToProps = (state) => ({
   item: state.pdp.item,
   activeColor: state.pdp.activeColor,
   activeSize: state.pdp.activeSize,
   activeFirstOpt: state.pdp.activeFirstOpt,
   activeSecondOpt: state.pdp.activeSecondOpt,
})

const mapDispatchToProps = (dispatch) => {
   return {
      setActiveColor: (color) => dispatch(setActiveColor(color)),
      setActiveSize: (size) => dispatch(setActiveSize(size)),
      setActiveSecondOpt: (opt) => dispatch(setActiveSecondOpt(opt)),
      setActiveFirstOpt: (opt) => dispatch(setActiveFirstOpt(opt)),
   }

}

export default connect(mapStateToProps, mapDispatchToProps)(AttributesContainer)