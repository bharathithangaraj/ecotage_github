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




class ProductList extends Component {
 async componentDidMount(){

 } 
   
 componentWillUnmount() {
    // console.log(JSON.stringify(this.props))        
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
   removeCart = (list,event)=>{
     this.props.removeFromCart(list);
     const {productInCart} = this.props;
    // event.target.parent.parent.parent.display = 'none';
    
    event.target.parentNode.parentNode.parentNode.style.display="none";
    
    
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
          {productInCart.map((list,index)=>(
            <tr>
                <td>
                    <Poster key={list.id} src={'../'+list.url} alt="Image will display" />            
                </td>
                <td>
                  {list.name}  
                </td>  
                <td>
                <span class="fa fa-rupee"></span>{list.price}
                </td>
                <td>
                <TextField          
                  type="number"
                  defaultValue="Bare"
                  margin="normal"
                  variant="outlined"
                  style={{width:'90px'}}
                  onBlur ={this.priceCalculate(this,list.price)}
                />
                </td>
                <td>
                  <span id={`{list.id}`.totalPrice}></span>
                </td>
                <td>
                <DeleteIcon onClick={(event)=>this.removeCart(list,event)} />
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

