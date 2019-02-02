import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as actions from '../../store/actions';
import '../Auth/Auth.css';

class Product extends Component {

  state = {
    name: '',
    qty: ''
  }

  onInputChangehandler1 = (e) => {
    this.setState({
      name: e.target.value
    });
  }
  onInputChangehandler2 = (e) => {
    this.setState({
      qty: e.target.value
    });
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onProduct(this.state.name, this.state.qty, this.props.userId);
  }

  render() {
    // console.log(this.state);
    // console.log(this.props.products);

    let form = (
      <form className="loginForm" onSubmit={this.onFormSubmit}>
        <input type="text" placeholder="Product Name" name='name'
          value={this.state.name} onChange={this.onInputChangehandler1}/>
        <br />
      <input type="text" placeholder="Quantity" name='qty'
          value={this.state.qty} onChange={this.onInputChangehandler2}/>
        <button>submit</button>
      </form>
    );
    if(this.props.loading) {
      form = <p style={{textAlign:'center'}}>loading...</p>
    }

    let productDetails = null;
    let noProduct = <p style={{textAlign:'center'}}> No Products..</p>;
    if(this.props.hasProduct) {
      productDetails = this.props.products.map((product, key) => {
        if(this.props.userId in product) {
          if(product[this.props.userId]['hasProduct']) {
            return (
              <ul key={key}>
                <li>Product Name : {product[this.props.userId]['name']}</li>
                <li>Product QTY : {product[this.props.userId]['qty']}</li>
              </ul>
            )
          }
        }
      });
    }
    return (
      <div className="auth">
        {form}
      <hr/>
      <div>
        {productDetails ? productDetails : noProduct}
      </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    loading: state.product.loading,
    isAuthenticated: state.auth.token !== null,
    userId: state.auth.userId,
    hasProduct: state.product.hasProduct,
    name: state.product.name,
    qty: state.product.qty,
    products: state.product.products
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onProduct: (name, qty, userId) => dispatch(actions.onProduct(name, qty, userId)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);
