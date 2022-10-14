import classnames from "classnames"


export const setPrices = (prices, activeCurrency) => {
   const price = prices.find(({ currency }) => currency.symbol === activeCurrency.symbol)
   let amount = price.amount
   let symbol = price.currency.symbol
   return symbol + " " + amount
}

export const setTotalPriceLogic = (items, activeCurrency) => {
   if (items.length !== 0) {
      return items.reduce((total, item) => {
         const { prices, activeAttributes: { itemCount } } = item
         return total + (prices.find(({ currency }) => currency.label === activeCurrency.label).amount * itemCount)
      }, 0)
   }
   else return 0
}

