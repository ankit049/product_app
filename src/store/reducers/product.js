import * as actionTypes from '../actions/actionTypes';


const initialState = {
  loading: false,
  hasProduct: false,
  userId: null,
  name: null,
  qty: null,
  products: []
};


const reducer = (state=initialState, action) => {
  switch (action.type) {
    case actionTypes.ON_PRODUCT_START:
      return {
        ...state,
        loading: true
      }
    case actionTypes.ON_PRODUCT_SUCCESS:
      let d = {};
      d[action.userId] = {
        name: action.name,
        qty: action.qty,
        hasProduct: true
      }
      let p = [
        ...state.products,
        d
      ];
      return {
        ...state,
        loading: false,
        hasProduct: true,
        userId: action.userId,
        products: p,
        name: action.name,
        qty: action.qty
      }
    default: return state;

  }
}


export default reducer;
