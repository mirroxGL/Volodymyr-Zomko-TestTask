import React, { Component } from 'react'
import s from ".././PDP.module.css"
import classnames from 'classnames';

export default class Attribute extends Component {
   componentDidMount() {
      this.props.attributes?.forEach((attr, i) => {
         if (attr.type === "swatch") {
            this.props.setActiveColor(attr.items[0].value);
         }
         else if (attr.type === "text" & attr.id === "Capacity" || attr.id === "Size") {
            this.props.setActiveSize(attr.items[0].value)
         }
         else if (attr.type === "text" & attr.id === "With USB 3 ports") {
            this.props.setActiveFirstOpt(attr.items[0].value)
         }
         else {
            this.props.setActiveSecondOpt(attr.items[0].value)
         }
      })
   }

   PDPAttributesBuilder = (attr, i) => {
      if (attr.type === "swatch") {
         return (<div key={i} className={s.colorBlock}>
            <span className={s.attrLabel}>{attr.id}:</span>
            <div className={s.colorGrids}>
               {attr.items.map((color, i) => {
                  return (<div key={i} onClick={() => this.props.setActiveColor(color.value)} style={color.value === "#FFFFFF" ? { backgroundColor: "#F5F5F5" } : { backgroundColor: color.value }} className={s.colorGrid}>
                     {this.props.activeColor === color.value && <div className={s.colorGridActive}></div>}
                  </div>)
               })}
            </div>
         </div>)
      }
      else if (attr.type === "text" & attr.id === "Capacity" || attr.id === "Size") {
         return (<div key={i} className={s.sizeBlock}>
            <span className={s.attrLabel}>{attr.id}:</span>
            <div className={s.sizeGrids}>
               {attr.items.map((item, i) => {
                  return (<div key={i} onClick={() => this.props.setActiveSize(item.value)} className={classnames(s.sizeGrid, this.props.activeSize === item.value && s.sizeGridActive)}>
                     <span >{item.value}</span>
                  </div>)
               })}
            </div>
         </div>)
      }
      else if (attr.type === "text" & attr.id === "With USB 3 ports") {
         return (<div key={i} className={s.sizeBlock}>
            <span className={s.attrLabel}>{attr.id}:</span>
            <div className={s.sizeGrids}>
               {attr.items.map((item, i) => {
                  return (<div key={i} onClick={() => this.props.setActiveFirstOpt(item.value)} className={classnames(s.sizeGrid, this.props.activeFirstOpt === item.value && s.sizeGridActive)}>
                     <span>{item.value}</span>
                  </div>)
               })}
            </div>
         </div>)
      }
      else {
         return (<div key={i} className={s.sizeBlock}>
            <span className={s.attrLabel}>{attr.id}:</span>
            <div className={s.sizeGrids}>
               {attr.items.map((item, i) => {
                  return (<div key={i} onClick={() => this.props.setActiveSecondOpt(item.value)} className={classnames(s.sizeGrid, this.props.activeSecondOpt === item.value && s.sizeGridActive)}>
                     <span>{item.value}</span>
                  </div>)
               })}
            </div>
         </div>)
      }
   }
   render() {
      const {
         attributes
      } = this.props
      return (
         <div>
            {attributes?.map((attr, i) => {
               return this.PDPAttributesBuilder(attr, i)
            })}
         </div >
      )
   }
}
