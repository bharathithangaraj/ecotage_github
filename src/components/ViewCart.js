import React, {  Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import {Poster} from './Plants/ProductDetail';
import { buyNow, removeFromCart, showAllProductsInCart, updateProductQuantity } from '../action/action';
import {Link} from 'react-router-dom';
import { Divider } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import TextField from '@material-ui/core/TextField';
//import styled from 'styled-components';



class ProductList extends Component {
  async  componentDidMount(){

  const { productInCart, showAllProductsInCart } = this.props;
  console.log("compononet did mount called")
  await showAllProductsInCart();
   
 } 

 componentDidCatch() {
 
}

   
componentWillUnmount() {
  this.props.showAllProductsInCart();
}

  sortByKey = (array, key) => {
    return array.sort(function(a, b) {
      var x = a[key]; var y = b[key];
      return ((x < y) ? -1 : ((x > y) ? 1 : 0));
  });
  }

  cartMsg = (items)=>{
    let cartMsg = "";
    if(items.length === 0){
      cartMsg = "Your cart is Empty";
    }else if(items.length === 1){
      cartMsg = "Your cart have "+items.length+" item";
    }else {
      cartMsg = "Your cart have "+items.length+" items";
    }
    return cartMsg;
  }
  removeCart = (cart, id) => {
    
    this.props.removeFromCart(cart);
//    const { productInCart } = this.props;

  //  document.getElementById(id).style.display = 'none';

    //document.getElementById('cartView').innerHTML = this.cartMsg(productInCart);
  }

   priceCalculate = () =>(event,destId,price) =>{
    console.log(event.target.value+"  destId:"+destId+"    price:"+price);
  }

  updateItemQuantity = (event, cart) => {

    let cartItem = {
      "cartId": cart.cartId,
      "price": cart.price,
      "productId": cart.productId,
      "quantity": event.target.value,
      "status": cart.status,
      "userId": cart.userId
    }    
    console.log('updateItemQuantity:::'+cart.cartId+'::'+cart.price+"\t"+event.target.value);
    document.getElementById('price_'+cart.cartId).innerHTML = cart.price * event.target.value;
    this.props.updateProductQuantity(cartItem)
  }
  onloadCartQuantityUpdate(cart) {
    
    let cartItem = {
      "cartId": cart.cartId,
      "price": cart.price,
      "productId": cart.productId,
      "quantity": cart.product.quantity,
      "status": cart.status,
      "userId": cart.userId
    }
    this.props.updateProductQuantity(cartItem)
  }

    render() {
      const { productInCart, showAllProductsInCart } = this.props
  
      const emptyCart = (
        <span>
          <Link to='/' >
            <Poster style={{ padding: '25px', align: 'center' }} src='/images/empty-cart.jpg' alt='Your shopping cart is empty.' />
          </Link>
          <Divider />
          <Button component={Link} to="/" style={{ backgroundColor: '#40d83d ' }} >
            Continue Shopping
  </Button>
  
        </span>
      )
  

  if(!productInCart) return null ;

  console.log(JSON.stringify(productInCart))
  return (<div>
      {productInCart.length === 0 ? (
        <div id="cartView"> {emptyCart}</div>
      ) : (<span><h1 id="cartView">{this.cartMsg(productInCart)}</h1>
        <table>
          <tbody>
            {productInCart.map((list, index) => (
              <tr id={`element_${list.productId}`} >
                <td>
                {(list.product) ? <Poster style={{ height: '200px', margin: '4%' }} key={list.productId} src={'/'+list.product.imageUrl } alt="Image will display" /> : undefined}
                </td>
                <td style={{ padding: '3%' }}>
                  <span style={{ textAlign: 'left', fontSize: '14px', fontWeight: 700, fontFamily: 'roboto' }}>{list.product ? list.product.productName : undefined}  </span>
                </td>
                <td>
                  <div style={{ fontSize: '16px', fontWeight: '700', color: '#fe5621', fontFamily: 'Roboto', textAlign: 'left' }}>
                    <span dangerouslySetInnerHTML={{ __html: '&#8377' }}></span> {list.price} &nbsp;&nbsp;
                </div>
                </td>
                <td>
                  <TextField
                    type="number"
                    defaultValue={list.quantity > list.product.quantity ? list.product.quantity : list.quantity}
                    margin="normal"
                    variant="outlined"
                    inputProps={{ min: 1, max: list.product ? list.product.quantity : 10 }}
                    onClick={(event) => this.updateItemQuantity(event, list)}
                    style={{ width: '90px' }}
                   // value={list.product ? list.quantity > list.product.quantity ? list.product.quantity : list.quantity : undefined}
                    onBlur={this.priceCalculate(this, list.price)}
                  />

                  {list.product ? list.quantity > list.product.quantity ? this.onloadCartQuantityUpdate(list) : undefined : undefined}
                </td>
                <td>
                  <span id={`{list.productId}`}></span>
                </td>
                <td>
                  <DeleteIcon onClick={(event) => this.removeCart(list, `element_${list.productId}`)} />
                  {/* <button className="addCartButton" >Remove</button> */}
                </td>
                <td>
                  =
                </td>
                <td>
                  &nbsp;
                <span dangerouslySetInnerHTML={{ __html: '&#8377' }}></span> <span id={`price_${list.cartId}`}>{list.quantity*list.price}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <button className="addCartButton"><Link to='/' style={{cursor:'pointer'}}>continue Shopping</Link></button>
        <button className="addCartButton">BuyNow</button>
      </span>)}
    </div>)
  }
}
const mapStateToProps = state =>({
    productInCart : state.productStore.productInCart
})
const mapDispatchToProps = dispatch => bindActionCreators ({
  buyNow,
  removeFromCart,
  showAllProductsInCart,
  updateProductQuantity
},dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(ProductList);
