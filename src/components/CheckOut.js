import React, {  Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import {Poster} from './Plants/ProductDetail';
 import { showAllProductsInCart} from '../action/action';
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
          <Grid item xs={8} md={8}>
          {productInCart.map((list, index) => (
            <span>
              <Divider variant="inset"/>           
            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <Poster style={{ height: '100px', margin: '4%' }} key={list.productId} src={'/'+list.product.imageUrl } alt="Image will display" />
              </Grid>
              <Grid item xs={12} md={3}>
                <Typography variant="h10" >
                    {list.product ? list.product.productName : undefined}
                </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
               
                <Typography variant="h10"> 
                <span dangerouslySetInnerHTML={{ __html: '&#8377' }}></span> {list.price} &nbsp;&nbsp;
                      X &nbsp; {list.quantity}  &nbsp;
                        =  &nbsp;<span dangerouslySetInnerHTML={{ __html: '&#8377' }}></span> <span id={`price_${list.cartId}`}>{list.quantity*list.price}</span>
                </Typography>
              </Grid>
              
              {/* <Grid item xs={12} md={3}>
                <Typography variant="h10">
                        {list.quantity}
                        = <span dangerouslySetInnerHTML={{ __html: '&#8377' }}></span> <span id={`price_${list.cartId}`}>{list.quantity*list.price}</span>
                </Typography>
              </Grid> */}
           
            </Grid>
            </span>
            ))}
          </Grid>
        </Grid>
        <Link to='/CheckOut'> <button className="addCartButton">Place Order</button> </Link>

      </span>):undefined}
    </div>)
  }
}
const mapStateToProps = state =>({
    productInCart : state.productStore.productInCart
})
const mapDispatchToProps = dispatch => bindActionCreators ({
    showAllProductsInCart
},dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(CheckOut);