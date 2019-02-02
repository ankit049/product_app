import * as actionTypes from './actionTypes';
import axios from 'axios';

export const productStart = () => {
  return {
    type: actionTypes.ON_PRODUCT_START
  }
}

export const productSuccess = (productData) => {
  return {
    type: actionTypes.ON_PRODUCT_SUCCESS,
    userId: productData.userId,
    name: productData.name,
    qty: productData.qty
  }
}

export const onProduct = (name, qty, userId) => {
  return dispatch => {
    dispatch(productStart());

    const productData = {
      name: name,
      qty: qty,
      userId: userId,
    }

    setTimeout(() => {
      dispatch(productSuccess(productData));
    }, 2000);
  }
}

export const productDelete = (userId) => {
  return {
    type: actionTypes.ON_PRODUCT_DELETE,
    userId: userId,
  }
}
