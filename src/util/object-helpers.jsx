export const setPrices = (prices, activeCurrency) => {
   for (let i = 0; i < prices.length; i++) {
      if (prices[i].currency.symbol === activeCurrency.symbol) {
         return prices[i].currency.symbol + " " + prices[i].amount
      }
   }
}