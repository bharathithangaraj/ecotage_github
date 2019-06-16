import React, { Component } from 'react';
// import {Poster} from './Plants/PlantsList';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import styled from 'styled-components';
import DescriptionData from '../../JsonData/DescriptionData'
import {Link} from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import {Redirect,withRouter} from "react-router";

  
import {addToCart,buyNow,addToOrders} from '../../action/action'

const styles = theme => ({
  
  // a: { 
  //   color: 'white',
  //   textDecoration: 'none',
  //   cursor: 'auto',
  // }

});



class ProductDetail extends Component {

  state = {
    quantity : 1
  }
  
  async componentDidMount() {
    console.log("componentDidMount:"+JSON.stringify(this.props))
  }
  componentWillUnmount() {
  
  }

  addToCartFromAll = (event,product)=>{
    if(product.quantity === 0) {
      event.target.style.backgroundColor ='grey';
      return
    }         
    const {addToCart,productInCart,logininfo} = this.props;
    if(logininfo.userId == null){
      this.props.history.push("/Signin")
      return
    }
    var isDuplicate = false;
    
    if(productInCart.length >0 ){
      for(var i=0;i<productInCart.length;i++){              
          if(productInCart[i].productId === product.productId){
              isDuplicate = true;
              break;
          }
      }
    }
    let cartItem = {
        "cartId": 0,
        "price": product.price,
        "productId": product.productId,
        "quantity": 1,
        "status": product.status,
        "userId": logininfo.userId
      }
      if(!isDuplicate){
    addToCart(cartItem);
    event.target.style.backgroundColor ='grey';
      }
  }

  updateQuantity = (event) => {
    const value= event.target.value
    this.setState({
      quantity: value
    });
    
  }

  buyCurrentProduct = (product) => {
    const {addToOrders,logininfo} = this.props;
    if(logininfo.userId == null){
      this.props.history.push("/Signin")
      return
    }

    //const total = document.getElementById('totalPrice').getAttribute('value')
    const {quantity} = this.state ;
    console.log('quantity ------------------->'+quantity)
    const totalPrice = product.price * quantity;
    var orderArr = [];
 
     let orderItem = {
      "cartId": 0,
      "orderId": 0,
      "productId": product.productId,
      "quantity": quantity,
      "status": product.status,
      "total":totalPrice ,
      "userId": logininfo.userId
    }
    orderArr.push(orderItem)
  
 
  addToOrders(orderArr);
  this.props.history.push('/OrderConfirmed');
  }

  render() {
	  
    const { productItem } = this.props;
    const {PlantsDetails} = DescriptionData.PlantsDetailsList;
    
    return (
      <div className="productWrapper">
          <div className="iamgeWrapper" style={{ width:'31%', float:'left'}}>
           
           <div className="productInfo">
             {
               (productItem.productImageList)?
               productItem.productImageList.map((list,key) =>
            <Poster src= {`/../../${list.imageUrl}`} alt="Image will display" />
             ) :undefined
             
             }
        
            </div>    
       
          <div className="buttons">
         
           <input type="submit" 
                     name={productItem.quantity === 0 ? 'Sold Out' :'Add To Cart'} value={productItem.quantity === 0 ? 'Sold Out' :'Add To Cart'} 
                     title={productItem.quantity === 0 ? 'Stocks Not Available' :'Add To Cart'}  
                      onClick={(event)=>this.addToCartFromAll(event,productItem)} 
                      className="addCartButton" 
                      style = {{backgroundColor:productItem.quantity ===0 ?'grey':'#058541'}}
                    />
              {/* {productItem.quantity > 0 ?
               <input type="submit" 
               name='Buy Now' value='Buy Now' 
               title='Buy Now' 
               onClick={()=>this.buyCurrentProduct(productItem)} 
                className="addCartButton" />   : undefined
              }   */}
           
            </div>
              <span style={{color:'red', fontFamily:'roboto', fontSize:'12px',marginLeft:'30px'}}><b>Note:</b> The image is for reference purpose only. The actual product may vary in shape or appearance based on climate, age, height etc.</span>
            </div>
            <div className="specification" style={{width:'33%', float:'left', fontFamily:'Roboto', color:'grey'}}>
              {productItem.productDetails ? productItem.productDetails.specificaton :undefined}
              <div style={{padding:'4%',fontSize:'24px',fontWeight:'700',color:'#fe5621',fontFamily:'Roboto', textAlign:'left'}}>
                     <span dangerouslySetInnerHTML={{ __html: '&#8377'}}></span> &nbsp;&nbsp;
                     {productItem.price}
               </div>
              <div className="quantity" style={{textAlign:'left',margin:'2%'}}>
                <span style={{fontWeight:700}}>Quantity :
                &nbsp;&nbsp;
                {/* <TextField          
                  type="number"
                  defaultValue="1"
                  margin="normal"
                  variant="outlined"
                  inputProps={{ min: 0, max: 10 }}
                  style={{width:'90px', marginTop:'-4%'}}
                  
                /> */}

                <TextField id="quantity"
                      type="number"
                      defaultValue="1"
                      margin="normal"
                      variant="outlined"
                      inputProps={{ min: 1, max: productItem.quantity}}
                      onClick={(event) => this.updateQuantity(event)}
                      style={{width:'90px', marginTop:'-4%'}}
                  />
                </span>
              
              </div>
            </div> 
          <div style={{border:"#ddd 1px solid", borderRadius:'2%', padding:'4%', margin:'2%', position:'relative', overflow:'hidden', float:'left', width:'82%', textAlign:'left', fontFamily:'roboto'}}>
               <div dangerouslySetInnerHTML={ {__html: productItem.productDetails ?productItem.productDetails.description : undefined} } />
            </div> 


      </div>
    );
  }
}
const mapStateToProps = state =>({  
    productInCart : state.productStore.productInCart,
    productItem : state.productStore.productItem,
    logininfo:state.loginStore.logininfo
})
const mapDispatchToProps = dispatch => bindActionCreators ({
  addToCart,
  buyNow,
  addToOrders
},dispatch)

//export default connect(mapStateToProps,mapDispatchToProps)(ProductDetail);
export default withStyles(styles) (connect(mapStateToProps,mapDispatchToProps) (withRouter(ProductDetail)));

export const Poster = styled.img`
    box-shadow: 0 0 35px white;
    cursor:pointer;
    height: 350px;
    text-align: center;
    border-radius:3%;
   
`

export const Table = styled.img`
  border: #ddd 1px solid;
`



