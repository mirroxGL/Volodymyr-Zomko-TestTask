import React, { PureComponent } from 'react'
import classnames from 'classnames'
import s from "../../../components/PDP/PDP.module.css"

const sizeClasses = (activeAttr, size, s) => {
   return classnames(s.sizeGrid, activeAttr === size && s.sizeGridActive)
}

class ColorBuilder extends PureComponent {
   render() {
      const {
         attr,
         attr: { items },
         i,
         setActiveColor,
         activeColor } = this.props
      return (attr.type === "swatch" && <div key={i} className={s.colorBlock} >
         <span className={s.attrLabel}>{attr.id}:</span>
         <div className={s.colorGrids}>
            {items.map((color, i) => {
               return (<button key={i} onClick={() => setActiveColor(color.value)} style={color.value === "#FFFFFF" ? { backgroundColor: "#F5F5F5" } : { backgroundColor: color.value }} className={s.colorGrid}>
                  {activeColor === color.value && <div className={s.colorGridActive}></div>}
               </button>)
            })}
         </div>
      </div>)

   }
}

class AttributesBuilder extends PureComponent {
   render() {
      const {
         clickHandler,
         i,
         attr,
         activeClass,
         attr: { items } } = this.props
      return <div key={i} className={s.sizeBlock}>
         <span className={s.attrLabel}>{attr.id}:</span>
         <div className={s.sizeGrids}>
            {items.map((item, i) => {
               return (<button key={i} onClick={() => clickHandler(item.value)} className={sizeClasses(activeClass, item.value, s)}>
                  <span >{item.value}</span>
               </button>)
            })}
         </div>
      </div>
   }
}

export default class PDPAttributesBuilder extends PureComponent {
   attribute = (activeId, activeClass, clickHandler) => {
      const {
         i, attr: { type,
            id }, attr } = this.props
      return (type === "text" & id === activeId) ? <AttributesBuilder attr={attr} i={i} activeClass={activeClass} clickHandler={clickHandler} /> : ""
   }

   render() {
      const { i,
         attr,
         setActiveSize,
         setActiveFirstOpt,
         setActiveSecondOpt,
         setActiveColor,
         activeSize,
         activeColor,
         activeFirstOpt,
         activeSecondOpt,
      } = this.props

      return (<div>
         <ColorBuilder setActiveColor={setActiveColor} attr={attr} i={i} activeColor={activeColor} />
         {this.attribute("Size", activeSize, setActiveSize)}
         {this.attribute("Capacity", activeSize, setActiveSize)}
         {this.attribute("With USB 3 ports", activeFirstOpt, setActiveFirstOpt)}
         {this.attribute("Touch ID in keyboard", activeSecondOpt, setActiveSecondOpt)}
      </div>
      )
   }
}
