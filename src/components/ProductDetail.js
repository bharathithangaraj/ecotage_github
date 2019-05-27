import React, { Component } from 'react';
// import {Poster} from './Plants/PlantsList';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import styled from 'styled-components';
import DescriptionData from '../JsonData/DescriptionData'
import {Link} from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

  
import {addToCart,buyNow} from '../action/action'

const styles = theme => ({
  
  // a: { 
  //   color: 'white',
  //   textDecoration: 'none',
  //   cursor: 'auto',
  // }

});

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
          <div className="iamgeWrapper" style={{ width:'31%', float:'left'}}>
          
           <div className="productInfo">
             
            <Poster src= {"../../"+productItem.imageUrl} alt="Image will display" />
        
            </div>   
       
          <div className="buttons">
         
           <input type="submit" 
                     name='Add To Cart' value='Add To Cart' 
                     title='Add To Cart' 
                      onClick={()=>this.props.addToCart(productItem.productId)} 
                      className="addCartButton" />
                <Link to='/ViewCart/'>   
            <input type="submit" 
                     name='Buy Now' value='Buy Now' 
                     title='Buy Now' 
                     onClick={()=>this.props.buyNow()} 
                      className="addCartButton" />   </Link>
            </div>
              <span style={{color:'red', fontFamily:'roboto', fontSize:'12px',marginLeft:'30px'}}><b>Note:</b> The image is for reference purpose only. The actual product may vary in shape or appearance based on climate, age, height etc.</span>
            </div>
            <div className="specification" style={{width:'33%', float:'left', fontFamily:'Roboto', color:'grey'}}>
              {productItem.specification}
              <div style={{padding:'4%',fontSize:'24px',fontWeight:'700',color:'#fe5621',fontFamily:'Roboto', textAlign:'left'}}>
                     <span dangerouslySetInnerHTML={{ __html: '&#8377'}}></span> &nbsp;&nbsp;
                     {productItem.price}
               </div>
              <div className="quantity" style={{textAlign:'left',margin:'2%'}}>
                <span style={{fontWeight:700}}>Quantity :
                &nbsp;&nbsp;
                <TextField          
                  type="number"
                  defaultValue="1"
                  margin="normal"
                  variant="outlined"
                  inputProps={{ min: 0, max: 10 }}
                  style={{width:'90px', marginTop:'-4%'}}
                  
                />

                </span>
              
              </div>
            </div>
          <div style={{border:"#ddd 1px solid", borderRadius:'2%', padding:'4%', margin:'2%', position:'relative', overflow:'hidden', float:'left', width:'82%', textAlign:'left', fontFamily:'roboto'}}>
               <div dangerouslySetInnerHTML={ {__html: productItem.description} } />
            </div>


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

//export default connect(mapStateToProps,mapDispatchToProps)(ProductDetail);
export default withStyles(styles) (connect(mapStateToProps,mapDispatchToProps) (ProductDetail));

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



