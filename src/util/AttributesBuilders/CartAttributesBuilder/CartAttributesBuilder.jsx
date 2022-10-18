import React, { PureComponent } from 'react'
import classnames from "classnames"

const sizeClasses = (activeAttr, size, s) => {
   return classnames(s.sizeGrid, activeAttr === size && s.activeSizeGrid)
}

class ColorBuilder extends PureComponent {
   render() {
      const { type,
         name,
         items,
         s,
         i,
         activeAttributes: { activeColor } } = this.props
      return (
         type === "swatch" && <div key={i} className={s.item__colorBlock}>
            <span>{name}:</span>
            <div className={s.chooseColorBlock}>
               {items.map((color, i) => {
                  return <div key={i} style={color.value === "#FFFFFF" ? { backgroundColor: "#F5F5F5" } : { backgroundColor: color.value }} className={s.color}>
                     {activeColor === color.value && <div key={i} className={s.activeColor}></div>}
                  </div>
               })}
            </div>
         </div >
      )
   }
}

class AttributesBuilder extends PureComponent {
   render() {
      const {
         name,
         items,
         s,
         i,
         activeClass } = this.props

      return <div key={i} className={s.item__sizeBlock}>
         <span>{name}:</span>
         <div className={s.size__gridsBlock}>
            {items.map((size, i) => {
               return <div key={i} className={sizeClasses(activeClass, size.value, s)}><span>{size.value}</span></div>
            })}
         </div>
      </div>
   }
}

export default class CartAttributesBuilder extends PureComponent {
   attribute = (activeId, activeClass) => {
      const {
         i,
         s, attr: { type,
            name,
            items,
            id } } = this.props
      return (type === "text" & id === activeId) ? <AttributesBuilder name={name} items={items} i={i} activeClass={activeClass} s={s} type={type} /> : ""
   }
   render() {
      const { i,
         s, attr: { type,
            name,
            items, },
         item: { activeAttributes,
            activeAttributes: {
               activeFirstOpt,
               activeSecondOpt,
               activeSize
            } } } = this.props

      return (<div>
         <ColorBuilder name={name} type={type} items={items} i={i} activeAttributes={activeAttributes} s={s} />
         {this.attribute("Size", activeSize)}
         {this.attribute("Capacity", activeSize)}
         {this.attribute("With USB 3 ports", activeFirstOpt)}
         {this.attribute("Touch ID in keyboard", activeSecondOpt)}
      </div>
      )
   }
}

