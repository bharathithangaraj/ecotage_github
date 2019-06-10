import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { Poster } from './Plants/ProductDetail';
import { getAllOrders,getProductDetailUrl,getProduct } from '../action/action';
import { Link } from 'react-router-dom';
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
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles =>({
    avatar: {
      margin: 10,
    },
    bigAvatar: {
      margin: 10,
      width: 60,
      height: 60,
    },
  });


class OrderResponse extends Component {
    
    async  componentDidMount() {

        const { getAllOrders } = this.props;
        await getAllOrders(1);

    }

    componentDidCatch() {
        const { getAllOrders } = this.props;
        getAllOrders(1);
    }


    componentWillUnmount() {
        this.props.getAllOrders(1);
    }

   

    render() {
        const classes = useStyles();
        const { orders,getProductDetailUrl,getProduct } = this.props
        let totalPrice = 0;
        {orders.map((list, index) => (                  
            totalPrice =  totalPrice + Number(list.product.price * list.quantity)                  
          ))}
        return (<div>
<Typography align="left" style={{fontWeight:"bolder",fontSize:'20px'}}>Order Summary</Typography>
<Paper >
        <Card> 
            <CardContent>
                {/* <Typography align="left">
                    Order No: <b>0123456789</b>
                </Typography> */}
                <Typography align="left">
                    Order Place On: <b>15 June 2019 20:00</b>
                </Typography>
                {/* <Typography align="left">
                    Cash On Delivery Status: <b>Approved</b>
                </Typography> */}
            </CardContent>
        </Card>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Category</TableCell>
            <TableCell align="center">Product Description</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Subtotal</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {orders.map((list, index) => (                
                <TableRow key={list.produtId}>
                    <TableCell align="center">{list.categoryName}</TableCell>
                    <TableCell component="th" scope="row"> 
                    <div style={{width:'20%', float:'left'}} className="zoom"><Link to={`/${list.product.navigageTo}`} onClick={()=>getProduct(list.productId)}><Avatar  onClick={()=>getProductDetailUrl(list.productId,list.product.navigageTo)} alt="No Images Found" src={list.imageUrl} className={classes.bigAvatar} /></Link></div>
                    {list.product.productName} 
                    
                    </TableCell>
                    <TableCell align="right">{list.product.price}</TableCell>
                    <TableCell align="right">{list.quantity}</TableCell>
                    <TableCell align="right">{list.quantity * list.product.price}</TableCell>               
                </TableRow>
            ))}
        </TableBody>
      </Table>
        <Grid container spacing={2}>
          <Grid item xs={12} md={11}></Grid>
          <Grid item xs={12} md={1}> 
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                <Typography variant="h8">
                    <b>Total</b>
                </Typography> 
                </Grid>
                <Grid item xs={12} md={6}>
                     {totalPrice}
                </Grid>
            </Grid>           
           
          </Grid>
        </Grid>
    </Paper>
    <br/>
    <Link to='/' style={{cursor:'pointer'}}><button className="addCartButton">continue Shopping</button></Link>
        </div>)
    }
}
const mapStateToProps = state => ({
    productInCart: state.productStore.productInCart,
    orders : state.productStore.orders
})
const mapDispatchToProps = dispatch => bindActionCreators({
    getAllOrders,
    getProductDetailUrl,
    getProduct
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(OrderResponse);
