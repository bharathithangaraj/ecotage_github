import React, {Component} from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import GridList from '@material-ui/core/GridList';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import styled from 'styled-components';
import {Link} from 'react-router-dom';
// import Button from '@material-ui/core/Button';
// import Grid from '@material-ui/core/Grid';
// import { unstable_Box as Box } from '@material-ui/core/Box';
//import Products from '../../JsonData/Products.json';
import {getProduct,addToCart,getPageUrl,
    getProductsByCategory,resetProducts,getProductDetailUrl,
    getAllProductsByCateName,getTopProducts,resetProductItem} from '../../action/action';
//import { SHOW_PRODUCT } from '../../Action_Constants.js';


// const styles = theme => ({
//     button: {
//       margin: theme.spacing.unit,
//       paddingTop:'10px'
//     },
//     input: {
//       display: 'none',
//     },
//   });



class PlantsList extends Component {

    async componentDidMount(){
        
        const {getProductsByCategory,getAllProductsByCateName,pageUrl,getTopProducts,pageId} = this.props;
        if(pageUrl.includes('AllPlants')){
            getAllProductsByCateName('Plants')
        } 
        else if(pageUrl.includes('AllSeeds')){
            getAllProductsByCateName('Seeds')
        }
        else if(pageUrl.includes('Top10Plants')) {
            getTopProducts('Plants')
        }
        else if(pageUrl.includes('Top10Seeds')) {
            getTopProducts('Seeds')
        }
        else {
            getProductsByCategory(pageId)
        }
        
    
    }

    async componentWillUnmount() {
        
        this.props.resetProducts();
        this.props.resetProductItem();
    }

    addToCartFromAll = (id)=>{        
        const {getProduct,addToCart} = this.props;
        getProduct(id);
        addToCart(id);
    }
   
    render(){
        //const {Plants} = Products.PlantsList;
        const {getProduct,getPageUrl,pageUrl,pageId,products,
            resetProducts,getProductDetailUrl,productDetUrl,productId} = this.props
       
        console.log('products from db -------------------------------')
        console.log(products)
       
        console.log("Plants:"+JSON.stringify(this.props))
        return (
            <ImageGrid>
                    
                    {products.map((list,key) =>
                
                    <div style={{padding:'10px'}} key={key}>
                     <Shadow >
                    <Link to={`/${list.navigateTo}`} onClick={()=>getProduct(list.productId)} >
                     <Poster onClick={()=>getProductDetailUrl(list.productId,list.navigateTo)} style={{padding: '25px'}} src={`/${list.imageUrl}`} alt='no image'/>
                     </Link>
                     <BoxDeco>
                     <div style={{width:'99%',textOverflow:'ellipsis',whiteSpace:'nowrap',overflow:'hidden'}}>
                     
                     <Link to={`/${list.navigateTo}`} style={{textAlign: "center", padding: '3px',textDecoration: 'none',color: 'black'}}>{list.productName} </Link>
                     </div>
                  
                     <div style={{paddingTop:'10px',fontSize:'16px',fontWeight:'700',color:'#fe5621'}}>
                     <span dangerouslySetInnerHTML={{ __html: '&#8377'}}></span>
                     {list.price}
                     </div>
                        <br/>                    
                     <input type="submit" 
                     name='Add To Cart' value='Add To Card' 
                     title='Add To Card' 
                     key={key} onClick={()=>this.addToCartFromAll(list.productId)} 
                      className="addCartButton" />
                     </BoxDeco>
                     </Shadow>
                    </div>
                   
                )}
                   
    
            </ImageGrid>
        )
    }
    

}


const mapStateToProps = state =>({        
    productItem : state.productStore.productItem ,
    pageUrl : state.productStore.pageUrl ,
    pageId : state.productStore.pageId,
    products :state.productStore.products,
    productDetUrl : state.productStore.productDetUrl,
    productId :  state.productStore.productId

  })
  const mapDispatchToProps = dispatch => bindActionCreators ({    
    getProduct,
    addToCart,
    getPageUrl,
    getProductsByCategory,
    resetProducts,
    getProductDetailUrl,
    getAllProductsByCateName,
    getTopProducts,
    resetProductItem
  },dispatch)
  
export default connect(mapStateToProps,mapDispatchToProps)(PlantsList);

const ImageGrid = styled.div`
 display:grid;
 padding:-1rem;
 grid-template-columns : repeat(4, 1fr);
 grid-row-gap:10px;
 margin-top:1rem;
 background-color:white;
 margin:5%;
 background-color: lighten( $color, 20% );
 border-radius: 5px;
 font-family: roboto;

`

const Shadow = styled.div`
text-align:center;
width: 250px;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
text-align: center;
height: 400px;
`
const Poster = styled.img`
    box-shadow: 0 0 35px white;
    cursor:pointer;
    height: 200px;
`
const BoxDeco =styled.div`
padding-bottom:"25px",
font-family:'Roboto',
min-height:'0',
float:'none'
`

// const TextDeco =styled.div`
// text-align: "center";
//  padding: '3px';
//  text-decoration: 'none';
//  color: 'black'
// `

// const priceDiv = styled.div`
// font-size: 16px;
// font-weight: 700;
// color: #fe5621;
// `


