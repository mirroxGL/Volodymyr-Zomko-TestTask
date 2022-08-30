
import { request, GraphQLClient } from 'graphql-request';

import { gql } from "@apollo/client"

const LOAD_ITEMS = gql`
   query{
       categories{ 
         name 
         products{
            id 
            name 
            inStock 
            brand
            gallery 
            prices{
               currency{
                  label 
                  symbol
               } 
                  amount
            } 
         } 
      }
   }

`



const LOAD_PDP = (itemId) => gql`
   query{
      product(id:"${itemId}"){
      id
      name
      brand
      inStock
      gallery
      description
      category
      prices{
         currency{
            label
            symbol
         }
         amount
      }
      attributes{
         id
         name
         type
         items{
           displayValue
           value
           id
         }
         
       }
      }
   }

`

const LOAD_CURRENCIES = gql`
query{
	currencies{
    label
    symbol
  }
}

`
const LOAD_CATEGORIES = gql`
   query{
       categories{ 
         name 
      }
   }

`

export const bodyAPI = {
   async getBodyItems() {
      return await request("http://localhost:4000/graphql", LOAD_ITEMS);
   },
   async getCurrencies() {
      return await request("http://localhost:4000/graphql", LOAD_CURRENCIES);
   }
}

export const headerAPI = {
   async getCategories() {
      return await request("http://localhost:4000/graphql", LOAD_CATEGORIES);
   },

}

export const pdpAPI = {
   async getPdpItem(itemId) {
      return await request("http://localhost:4000/graphql", LOAD_PDP(itemId));

   }
}





