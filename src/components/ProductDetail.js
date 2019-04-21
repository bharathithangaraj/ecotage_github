import React, { Component } from 'react';
// import {Poster} from './Plants/PlantsList';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import styled from 'styled-components';
import DescriptionData from '../JsonData/DescriptionData'


  
import {addToCart,buyNow} from '../action/action'

class ProductDetail extends Component {
  
  async componentDidMount() {
    console.log("componentDidMount:"+JSON.stringify(this.props))
  }
  componentWillUnmount() {
  
  }

  render() {
	  
    const { productItem } = this.props;
    const {PlantsDetails} = DescriptionData.PlantsDetailsList;
    console.log("herersfsf"+JSON.stringify(productItem))
    if(!productItem) return null;
    return (
      <div className="productWrapper">
          <div className="productInfo">
            <Poster src= {"../../"+productItem.url} alt="Image will display" />
          </div>                          
          {/* <button onClick={()=>this.props.addToCart()} >Add To Card</button>
          <button onClick={()=>this.props.buyNow()} >Buy Now</button> */}
          <div >
           <input type="submit" 
                     name='Add To Cart' value='Add To Cart' 
                     title='Add To Cart' 
                      onClick={()=>this.props.addToCart()} 
                      className="addCartButton" />
                     
            <input type="submit" 
                     name='Buy Now' value='Buy Now' 
                     title='Buy Now' 
                     onClick={()=>this.props.buyNow()} 
                      className="addCartButton" />
                      </div>
{/*          
          {PlantsDetails.map(list => {
            if(list.id == productItem.id ? (
              <div dangerouslySetInnerHTML={ {__html: PlantsDetails[0].desc} } />

            ) : undefined

            
            })} */}
            {PlantsDetails.map((list,key) => 
            {
              console.log(list.id);
              return (
                (list.id === productItem.id) ?
                  <div dangerouslySetInnerHTML={ {__html: PlantsDetails[0].desc} } />
                  : undefined
              )
            })}

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

export const Poster = styled.img`
    box-shadow: 0 0 35px white;
    cursor:pointer;
    height: 200px;
    text-align: center;
   
`
