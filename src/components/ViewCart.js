import React, {  Component } from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {Poster} from './ProductDetail';
import {buyNow,removeFromCart} from '../actions';

class ProductList extends Component {
 componentDidMount(){

 } 
   
 componentWillUnmount() {
    // console.log(JSON.stringify(this.props))        
  }
   removeCart = (list,event)=>{
     this.props.removeFromCart(list);
     const {productInCart} = this.props;
    // event.target.parent.parent.parent.display = 'none';
    
    event.target.parentNode.parentNode.style.display="none";
    document.getElementById('cartView').innerHTML = productInCart.length == 0?"Your cart is Empty":"Your cart have "+productInCart.length+"items";
   }

  async componentDidMount() {
    // alert('yest')
  }
  render() {
  // const trees = this.props.productsList.products.Trees;
  const {productInCart,removeFromCart} = this.props

  if(!productInCart) return null ;

  console.log(JSON.stringify(productInCart))
  return (<div>
    {}
      {productInCart.length == 0 ? (
        <div id="cartView"> Your cart is Empty</div>
      ):(<span><div id="cartView">Your cart have {productInCart.length} items</div>
      <table>
          <tbody>
          {productInCart.map((list,index)=>(
            <tr>
                <td>
                    <Poster key={list.id} src={'../'+list.url} alt="Image will display" />            
                </td>
                <td><button onClick={(event)=>this.removeCart(list,event)}>Remove</button></td>
            </tr>
          ))}   
          </tbody>       
      </table>
      
          <button >continue Shopping</button>
          <button>BuyNow</button>
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