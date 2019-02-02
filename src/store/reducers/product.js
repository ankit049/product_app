import * as actionTypes from '../actions/actionTypes';


const initialState = {
  loading: false,
  hasProduct: false,
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
        products: p,
      }

    case actionTypes.ON_PRODUCT_DELETE:
      let newProducts = [];
      let da = [...state.products].map(d => {
        if(!d[action.userId]) {
          newProducts.push(d);
        }
        console.log(d[action.userId]);
        return (d)
      });
      console.log(newProducts);
      return {
        ...state,
        products: newProducts,
      }
    default: return state;

  }
}


export default reducer;
