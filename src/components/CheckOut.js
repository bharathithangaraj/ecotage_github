import React, {  Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import {Poster} from './Plants/ProductDetail';
 import { showAllProductsInCart,addToOrders} from '../action/action';
import {Link} from 'react-router-dom';
import {Redirect,withRouter} from "react-router";
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

class CheckOut extends Component {

  async  componentDidMount(){

  const { showAllProductsInCart } = this.props;
  await showAllProductsInCart();
   
 }

 componentDidCatch() {
 
}

   
componentWillUnmount() {
  this.props.showAllProductsInCart();
}

confirmOrder = (event,products) => {
  const {addToOrders} = this.props;
 
 const total = document.getElementById('totalPrice').getAttribute('value')
 var orderArr = [];
 var parseTotal = parseFloat(total);
  for(var i=0;i<products.length;i++){
     let orderItem = {
      "cartId": products[i].cartId,
      "orderId": 0,
      "productId": products[i].productId,
      "quantity": products[i].quantity,
      "status": 1,
      "total":parseTotal ,
      "userId": 1
    }
    orderArr.push(orderItem)
  }
 
  addToOrders(orderArr);
  this.props.history.push('/OrderConfirmed');
}

  sortByKey = (array, key) => {
    return array.sort(function(a, b) {
      var x = a[key]; var y = b[key];
      return ((x < y) ? -1 : ((x > y) ? 1 : 0));
  });
  }

    render() {  
      const { productInCart } = this.props
      let totalPrice = 0;
     
  if(!productInCart) return null ;
   
  {productInCart.map((list, index) => (                  
    totalPrice =  totalPrice + Number(list.price * list.quantity)                  
  ))}
  

  return (<div>
      {productInCart.length > 0 ? (
      <span>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            {productInCart.map((list, index) => (
            <span>
              <Divider variant="inset"/>           
              <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                  <Poster style={{ height: '100px', margin: '4%' }} key={list.productId} src={'/'+list.product.imageUrl } alt="Image will display" />
                </Grid>
                <Grid item xs={12} md={3}>
                  <Typography variant="h10" >
                  <span style={{ textAlign: 'left', fontSize: '14px', fontWeight: 700, fontFamily: 'roboto' }}>{list.product ? list.product.productName : undefined} </span>
                  </Typography>
                </Grid>
                <Grid item xs={12} md={4}>
               
                  <Typography variant="h10"> 
                  <span dangerouslySetInnerHTML={{ __html: '&#8377' }}></span> {list.price} &nbsp;&nbsp;
                        X &nbsp; {list.quantity}  &nbsp;
                          =  &nbsp;<span dangerouslySetInnerHTML={{ __html: '&#8377' }}></span> <span id={`price_${list.cartId}`}>{list.quantity*list.price}</span>
                  </Typography>
                </Grid>
              </Grid>
             
            </span>
              ))}
          </Grid>
          <Grid item xs={12} md={12}>
           
          <Typography variant="h10"> 
              <b>Total Price</b> <span dangerouslySetInnerHTML={{ __html: '&#8377' }}></span> 
                  <div id='totalPrice' value={totalPrice}>{totalPrice}</div>
                </Typography>
          </Grid>
        </Grid>
        <br/>
        <button className="addCartButton" onClick={(event)=>this.confirmOrder(event,productInCart)} >Place Order</button> 

      </span>):undefined}
    </div>)
  }
}
const mapStateToProps = state =>({
    productInCart : state.productStore.productInCart
})
const mapDispatchToProps = dispatch => bindActionCreators ({
    showAllProductsInCart,
    addToOrders
},dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(CheckOut));