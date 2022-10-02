import React, { Component } from 'react'
import { setActiveColor, setActiveFirstOpt, setActiveSecondOpt, setActiveSize } from '../../../redux/pdp/actions'
import Attributes from './Attributes'
import { connect } from 'react-redux'
import s from ".././PDP.module.css"
import classnames from "classnames"

class AttributesContainer extends Component {
   PDPAttributesBuilder = (attr, i) => {
      if (attr.type === "swatch") {
         return (<div key={i} className={s.colorBlock}>
            <span className={s.attrLabel}>{attr.id}:</span>
            <div className={s.colorGrids}>
               {attr.items.map((color, i) => {
                  return (<button key={i} onClick={() => this.props.setActiveColor(color.value)} style={color.value === "#FFFFFF" ? { backgroundColor: "#F5F5F5" } : { backgroundColor: color.value }} className={s.colorGrid}>
                     {this.props.activeColor === color.value && <div className={s.colorGridActive}></div>}
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
                  return (<button key={i} onClick={() => this.props.setActiveSize(item.value)} className={classnames(s.sizeGrid, this.props.activeSize === item.value && s.sizeGridActive)}>
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
                  return (<button key={i} onClick={() => this.props.setActiveFirstOpt(item.value)} className={classnames(s.sizeGrid, this.props.activeFirstOpt === item.value && s.sizeGridActive)}>
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
                  return (<button key={i} onClick={() => this.props.setActiveSecondOpt(item.value)} className={classnames(s.sizeGrid, this.props.activeSecondOpt === item.value && s.sizeGridActive)}>
                     <span>{item.value}</span>
                  </button>)
               })}
            </div>
         </div>)
      }
   }
   render() {
      return (
         <Attributes {...this.props} attributes={this.props.item?.product.attributes} PDPAttributesBuilder={this.PDPAttributesBuilder} />
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