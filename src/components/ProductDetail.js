import React, { Component } from 'react';
// import {Poster} from './Plants/PlantsList';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import styled from 'styled-components';

  
import {getProduct,addToCart,buyNow} from '../actions'

class ProductDetail extends Component {
  
  async componentDidMount() {
    console.log("componentDidMount:"+JSON.stringify(this.props))
  }
  componentWillUnmount() {
  
  }

  render() {
	  
    const { productItem } = this.props;
    console.log("herersfsf"+JSON.stringify(productItem))
    if(!productItem) return null;
    return (
      <div className="productWrapper">
          <div className="productInfo">
            <Poster src= {"../../"+productItem.url} alt="Image will display" />
          </div>                          
          <button onClick={()=>this.props.addToCart()} >Add To Card</button>
          <button onClick={()=>this.props.buyNow()} >Buy Now</button>
      </div>
    );
  }
}
const mapStateToProps = state =>({  
    productInCart : state.productStore.productInCart,
    productItem : state.productStore.productItem
})
const mapDispatchToProps = dispatch => bindActionCreators ({
  addToCart,
  buyNow
},dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(ProductDetail);

const Poster = styled.img`
    box-shadow: 0 0 35px white;
    cursor:pointer;
    height: 200px;
`
