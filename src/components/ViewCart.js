import React, {  Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import {Poster} from './ProductDetail';
import {buyNow,removeFromCart} from '../action/action';
import {Link} from 'react-router-dom';
import { Divider } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import TextField from '@material-ui/core/TextField';
//import styled from 'styled-components';



class ProductList extends Component {
 async componentDidMount(){
  const {productInCart} = this.props;
 
 
  // let sortProductInCart = this.sortByKey(productInCart,'productName')
  // console.log(sortProductInCart)
   
 } 
   
 componentWillUnmount() {
    // console.log(JSON.stringify(this.props))        
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
   removeCart = (productId,id)=>{
     this.props.removeFromCart(productId);
     const {productInCart} = this.props;
    // event.target.parent.parent.parent.display = 'none';
    
    //event.target.parentNode.parentNode.parentNode.style.display="none";
    document.getElementById(id).style.display='none';
    
    document.getElementById('cartView').innerHTML = this.cartMsg(productInCart);
   }

   priceCalculate = () =>(event,destId,price) =>{
    console.log(event.target.value+"  destId:"+destId+"    price:"+price);
    // document.getElementById(destId+".totalPrice").innerHTML = (price * event.target.value )
  }
    render() {
  // const trees = this.props.productsList.products.Trees;
  const {productInCart} = this.props
  
  const emptyCart = (
    <span>
    <Link to='/' >
    <Poster style={{padding: '25px', align:'center'}} src='../images/empty-cart.jpg' alt='Your shopping cart is empty.'/>
    </Link>
    <Divider/>    
         <Button component={Link} to="/" style={{backgroundColor:'#40d83d '}} >
          Continue Shopping
</Button>

    </span>
  )
  

  if(!productInCart) return null ;

  console.log(JSON.stringify(productInCart))
  return (<div>
      {productInCart.length === 0 ? (
        <div id="cartView"> {emptyCart}</div>
      ):(<span><h1 id="cartView">{this.cartMsg(productInCart)}</h1>

      <table>
          <tbody>
             
            
            
          { this.sortByKey(productInCart,'productName').map((list,index)=>(
            <tr id={`element_${list.productId}`}>
                <td>
                    <Poster style={{height:'200px' ,margin:'4%'}} key={list.productId} src={'../'+list.imageUrl} alt="Image will display" />            
                </td>
                <td style={{padding:'3%'}}>
                  <span style={{textAlign:'left',fontSize:'14px',fontWeight:700,fontFamily:'roboto'}}>{list.productName}  </span>
                </td>  
                <td>
                <div style={{fontSize:'16px',fontWeight:'700',color:'#fe5621',fontFamily:'Roboto', textAlign:'left'}}>
                <span dangerouslySetInnerHTML={{ __html: '&#8377'}}></span> {list.price} &nbsp;&nbsp;
                </div>
                </td>
                <td>
                <TextField          
                  type="number"
                  defaultValue="1"
                  margin="normal"
                  variant="outlined"
                  inputProps={{ min: 0, max: 10 }}
                  style={{width:'90px'}}
                  onBlur ={this.priceCalculate(this,list.price)}
                />
                </td>
                <td>
                  <span id={`{list.productId}`.totalPrice}></span>
                </td>
                <td>
                <DeleteIcon onClick={(event)=>this.removeCart(list,`element_${list.productId}`)} />
                  {/* <button className="addCartButton" >Remove</button> */}
                  </td>
            </tr>
          ))}   
          </tbody>       
      </table>
          
          <button className="addCartButton">continue Shopping</button>
          <button className="addCartButton">BuyNow</button>
          </span> )}
  </div>)
  }
}
const mapStateToProps = state =>({
    productInCart : state.productStore.productInCart
})
const mapDispatchToProps = dispatch => bindActionCreators ({
    buyNow,
    removeFromCart
},dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(ProductList);
