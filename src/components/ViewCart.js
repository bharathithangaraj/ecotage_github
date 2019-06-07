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

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

class ViewCart extends Component {
  async  componentDidMount(){

  const { productInCart, showAllProductsInCart } = this.props;
  console.log("compononet did mount called")
  await showAllProductsInCart();
   
 }

 componentDidCatch() {
 
}

   
componentWillUnmount() {
  console.log("View cart componentWillUnmount")
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
      let totalPrice = 0;
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
  {productInCart.map((list, index) => (                  
    totalPrice =  totalPrice + Number(list.price * list.quantity)                  
  ))}
  return (<div>
      {productInCart.length === 0 ? (
        <div id="cartView"> {emptyCart}</div>
      ) : (<span><h1 id="cartView">{this.cartMsg(productInCart)}</h1>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
          {productInCart.map((list, index) => (
            <span>
              <Divider variant="inset"/>           
            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <Poster style={{ height: '200px', margin: '4%' }} key={list.productId} src={'/'+list.product.imageUrl } alt="Image will display" />
              </Grid>
              <Grid item xs={12} md={3}>
                <Typography variant="h10" >
                    {list.product ? list.product.productName : undefined}
                </Typography>
              </Grid>
              <Grid item xs={12} md={1}>
                <span dangerouslySetInnerHTML={{ __html: '&#8377' }}></span> {list.price} &nbsp;&nbsp;
              </Grid>
              <Grid item xs={12} md={2}>
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
              </Grid>
              <Grid item xs={12} md={1}>
                <DeleteIcon onClick={(event) => this.removeCart(list, `element_${list.productId}`)} />
              </Grid>
              <Grid item xs={12} md={1}>
                = <span dangerouslySetInnerHTML={{ __html: '&#8377' }}></span> <span id={`price_${list.cartId}`}>{list.quantity*list.price}</span>
              </Grid>
            </Grid>
            </span>
            ))}
          </Grid>
          <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
            <Typography  variant="h5" style={{fontWeight:'bold'}} >Summary</Typography>
            <Divider variant="inset"  />           
            <Grid container spacing={2}>
                <Grid item xs={12} md={8}>       
                Invoice Total
                </Grid>
                <Grid item xs={12} md={4}>
                {totalPrice}
               
                   
                </Grid>
            </Grid>
            </CardContent>
            <CardActions>
            <Link to='/CheckOut' style={{width:'100%'}}> <button className="addCartButton" style={{width:'100%'}}>Check out</button> </Link>
            </CardActions>
          </Card>
          </Grid>
        </Grid>
       

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

export default connect(mapStateToProps,mapDispatchToProps)(ViewCart);