import { pdpAPI } from "../../api/api.js"

import {
   SET_ITEM,
   SET_PENDING,
   CLEAR_ITEM
} from "./types.js"

export const setPending = (isPending) => ({
   type: SET_PENDING,
   payload: isPending
})

export const setItem = (item) => ({
   type: SET_ITEM,
   payload: item
})

export const clearItem = () => ({
   type: CLEAR_ITEM,
})

export const setPdpItemTC = (itemId) => async (dispatch) => {
   dispatch(setPending(true))
   const data = await pdpAPI.getPdpItem(itemId)
   console.log(data, itemId);
   if (data != undefined) {
      dispatch(setItem(data))
   }
   dispatch(setPending(false))
}
