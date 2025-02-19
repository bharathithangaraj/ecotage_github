import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import { showAllProductsInCart,addToOrders} from '../../action/action'
import {Link} from 'react-router-dom';
import {Redirect,withRouter} from "react-router";
import { Divider } from '@material-ui/core';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { getUserDetail,addUserDetails} from '../../action/UserAction'

const useStyles = makeStyles => (theme => ({
    listItem: {
      padding: theme.spacing(1, 0),
    },
    total: {
      fontWeight: '700',
    },
    title: {
      marginTop: theme.spacing(2),
    },
  }));

class Review extends Component {

    async  componentDidMount(){

        const { showAllProductsInCart,getUserDetail,logininfo } = this.props;
        if(logininfo.userId != null) {
            await showAllProductsInCart(logininfo.userId);
            this.props.getUserDetail(logininfo.userName,logininfo.token);
        }
       
       }
      
       componentDidCatch() {
       
      }
      
         
      componentWillUnmount() {
          if(this.props.logininfo.userId != null) {
            this.props.showAllProductsInCart(this.props.logininfo.userId);
            this.props.getUserDetail(this.props.logininfo.userName,this.props.logininfo.token);
          }
       
      }

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    prev = e => {
        e.preventDefault()
        this.props.prevStep();
    }

    confirmOrder = (event,products) => {


        const {addToOrders,values,logininfo,addUserDetails,userDetail} = this.props;
        if(logininfo.userId == null) {
            this.props.history.push("/Signin")
            return
        }

        let userdetailInfo = {
           
                "address1": values.addressline1 ==='' ?userDetail.showUserDetails.address1:values.addressline1,
                "address2": values.addressline2 ===''? userDetail.showUserDetails.address2:values.addressline2,
                "addressType": "OFFICE",
                "city": values.city  ===''?userDetail.showUserDetails.city :values.city,
                "country": values.country ==='' ? userDetail.showUserDetails.country:values.country,
                "firstName": values.firstName ==='' ? userDetail.firstName : values.firstName,
                "gender": "MALE",
                "houseNo": "1/24",
                "landMark":values.city ===''? userDetail.showUserDetails.city:values.city,
                "lastName": values.lastName ===''?userDetail.lastName :values.lastName ,
                "location": values.city ===''? userDetail.showUserDetails.city:values.city,
                "pincode": parseInt(values.zip ==='' ?userDetail.showUserDetails.pincode:values.zip),
                "state": values.state ==='' ? userDetail.showUserDetails.state:values.state,
                "token": logininfo.token,
                "userId": logininfo.userId
             
          }

          addUserDetails(userdetailInfo)  
       
       const total = document.getElementById('totalPrice').getAttribute('value')
       var orderArr = [];
       var parseTotal = parseFloat(total);
        for(var i=0;i<products.length;i++){
           let orderItem = {
            "cardHolderName" : values.nameOnCard,
            "cardNo" : values.cardNumber,
            "cartId": products[i].cartId,
            "cvv":values.cvv,
            "expDate":values.values,
            "orderId": 0,
            "paymentType":'CARD',
            "productId": products[i].productId,
            "quantity": products[i].quantity,
            "status": 1,
            "total":parseTotal ,
            "userId": logininfo.userId
          }
          orderArr.push(orderItem)
        }
       
        addToOrders(orderArr);
        
        this.props.history.push('/OrderConfirmed');
      }

    render() {
        const classes = useStyles();
        const {handleChange,values,productInCart,userDetail} = this.props;

        let totalPrice = 0;
     
        if(!productInCart) return null ;
        
        {productInCart.map((list, index) => (                  
            totalPrice =  totalPrice + Number(list.price * list.quantity)                  
        ))}
        return (
            <React.Fragment>
                <Typography variant="h6" gutterBottom>
                    Order summary
                </Typography>

                <List disablePadding>
                {productInCart.map(list => (
                <ListItem className={classes.listItem} key={list.productId}>
                    <ListItemText primary={list.product ? list.product.productName : undefined}  />
                    <span dangerouslySetInnerHTML={{ __html: '&#8377' }}></span> &nbsp; <Typography variant="body2">
                    
                    {list.price} &nbsp;&nbsp; X &nbsp; {list.quantity}  &nbsp; 

                    =  &nbsp;<span dangerouslySetInnerHTML={{ __html: '&#8377' }}></span> <span id={`price_${list.cartId}`}>{list.quantity*list.price}</span>
                    
                    </Typography>
                </ListItem>
                ))}
                <ListItem className={classes.listItem}>
                <ListItemText primary="Total" />
                <Typography variant="subtitle1" className={classes.total}>
                    
                    <div id='totalPrice' value={totalPrice}><span dangerouslySetInnerHTML={{ __html: '&#8377' }}></span> {totalPrice}</div>
                </Typography>
                </ListItem>
            </List>

                <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                <Typography variant="h6" gutterBottom className={classes.title}>
                    Shipping
                </Typography>
                <Typography gutterBottom>{values.firstName === ''?userDetail.firstName :values.firstName}</Typography>
                <Typography gutterBottom>{values.addressline1 === ''?userDetail.showUserDetails.address1 : values.addressline1} {values.addressline2 ===''?userDetail.showUserDetails.address2 :values.addressline2}</Typography>
                <Typography gutterBottom>{values.city ==='' ?userDetail.showUserDetails.city:values.city} <b>:</b> {values.zip ==='' ? userDetail.showUserDetails.zip :values.zip}</Typography>
                <Typography gutterBottom>{values.state === '' ? userDetail.showUserDetails.state:values.state} {values.country}</Typography>
                </Grid>


                <Grid item container direction="column" xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom className={classes.title}>
                        Payment details
                    </Typography>
                    <Grid container>
                        <React.Fragment>
                        <Grid item xs={6}>
                            <Typography gutterBottom> Card Type</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography gutterBottom>Visa</Typography>
                        </Grid>

                        <Grid item xs={6}>
                            <Typography gutterBottom> Card Holder</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography gutterBottom>{values.nameOnCard}</Typography>
                        </Grid>

                        <Grid item xs={6}>
                            <Typography gutterBottom> Expiry Date</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography gutterBottom>{values.expDate}</Typography>
                        </Grid>
                        </React.Fragment>
                    </Grid>
                </Grid>
            </Grid>

                <Button variant="contained"
                         color="primary"
                        style={styles.button}
                        onClick={this.prev}> Back </Button>

            <Button variant="contained"
                         color="primary"
                        style={styles.button}
                        onClick={(event)=>this.confirmOrder(event,productInCart)}> Place Order </Button>
            </React.Fragment>
        )
    }
}

const styles = {
    button : {
        margin:15,
        backgroundColor: '#058541',
        color: 'white',
        fontSize: '14px',
        border:'none',
        cursor:'pointer',
        
        textTransform:'capitalize',
        padding:'8px 20px',
        border:'none',
        margin:'5px',
    }
}

const mapStateToProps = state =>({
    productInCart : state.productStore.productInCart,
    logininfo : state.loginStore.logininfo,
    userDetail : state.loginStore.userDetail
})
const mapDispatchToProps = dispatch => bindActionCreators ({
    showAllProductsInCart,
    addToOrders,
    getUserDetail,
    addUserDetails
},dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Review));