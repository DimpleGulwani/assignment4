import * as actionType from '../constants/productConstant';


//switch case present in reducer     initial state and action
export const getProductsReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case actionType.GET_PRODUCT_SUCCESS:
      return { products: action.payload }

    case actionType.GET_PRODUCT_FAIL:
      return { error: action.payload }

    default:
      return state
  }
}


export const getProductDetailsReducer = (state = { products: {}}, action) => {
  switch (action.type) {
    case actionType.GET_PRODUCT_DETAILS_SUCCESS:
      return { products: action.payload }

    case actionType.GET_PRODUCT_DETAILS_FAIL:
      return { error: action.payload }

    default:
      return state
  }
}