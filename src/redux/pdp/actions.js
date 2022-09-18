import { pdpAPI } from "../../api/api.js"

import {
   SET_ITEM,
   SET_PENDING,
   CLEAR_ITEM,
   SET_ACTIVE_COLOR,
   SET_ACTIVE_SIZE,
   SET_ACTIVE_FIRST_OPT,
   SET_ACTIVE_SECOND_OPT,
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

export const setActiveColor = (color) => ({
   type: SET_ACTIVE_COLOR,
   payload: color
})
export const setActiveFirstOpt = (opt) => ({
   type: SET_ACTIVE_FIRST_OPT,
   payload: opt
})
export const setActiveSecondOpt = (opt) => ({
   type: SET_ACTIVE_SECOND_OPT,
   payload: opt
})

export const setActiveSize = (size) => ({
   type: SET_ACTIVE_SIZE,
   payload: size
})


export const setPdpItemTC = (itemId) => async (dispatch) => {
   dispatch(setPending(true))
   const data = await pdpAPI.getPdpItem(itemId)
   if (data !== undefined) {
      dispatch(setItem(data))
   }
   dispatch(setPending(false))
}
