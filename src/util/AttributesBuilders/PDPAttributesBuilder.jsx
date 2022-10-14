import React, { PureComponent } from 'react'

class ColorBuilder extends PureComponent {

   render() {
      const { s, attr, attr: { items }, i } = this.props
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

export default class PDPAttributesBuilder extends PureComponent {
   render() {
      return (
         <div>PDPAttributesBuilder</div>
      )
   }
}
