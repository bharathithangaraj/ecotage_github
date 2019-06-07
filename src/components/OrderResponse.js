import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { Poster } from './Plants/ProductDetail';
import { showAllProductsInCart } from '../action/action';
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

class OrderResponse extends Component {
    async  componentDidMount() {

        const { showAllProductsInCart } = this.props;
        await showAllProductsInCart();

    }

    componentDidCatch() {

    }


    componentWillUnmount() {
        this.props.showAllProductsInCart();
    }

    sortByKey = (array, key) => {
        return array.sort(function (a, b) {
            var x = a[key]; var y = b[key];
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        });
    }

    render() {
        let totalPrice = 0;

        if (!productInCart) return null;

        {
            productInCart.map((list, index) => (
                totalPrice = totalPrice + Number(list.price * list.quantity)
            ))
        }
        return (<div>

            <Card>
                <CardHeader>
                    
                </CardHeader>
                <CardContent>
                    <Typography variant="h5" style={{ fontWeight: 'bold' }} >Summary</Typography>
                    <Divider variant="inset" />
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
                    <Link to='/CheckOut' style={{ width: '100%' }}> <button className="addCartButton" style={{ width: '100%' }}>Check out</button> </Link>
                </CardActions>
            </Card>
        </div>)
    }
}
const mapStateToProps = state => ({
    productInCart: state.productStore.productInCart
})
const mapDispatchToProps = dispatch => bindActionCreators({
    showAllProductsInCart
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(OrderResponse);