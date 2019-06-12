import React, {Component} from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import GridList from '@material-ui/core/GridList';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {Redirect,withRouter} from "react-router";
import {getProduct,addToCart,getPageUrl,
    getProductsByCategory,resetProducts,getProductDetailUrl,
    getAllProductsByCateName,getTopProducts,resetProductItem,showAllProductsInCart,productInCart} from '../../action/action';


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
        
        const {getProductsByCategory,getAllProductsByCateName,pageUrl,getTopProducts,pageId,showAllProductsInCart,productInCart} = this.props;
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

       
  console.log("compononet did mount called")
  await showAllProductsInCart();
        
    
    }

    componentDidCatch() {
 
    }

    async componentWillUnmount() {
        
        this.props.resetProducts();
        this.props.resetProductItem();
        this.props.showAllProductsInCart();
    }

    findDuplicate(productId){
        var isDuplicate = false;
        const {productInCart} = this.props;
        for(var i=0;i<productInCart.length;i++){              
            if(productInCart[i].productId === productId){
                isDuplicate = true;
                break;
            }
        }
        return isDuplicate;
    }
    

    addToCartFromAll = (event,product)=>{  
        if(product.quantity === 0) {
            event.target.style.backgroundColor ='grey';
            return
        } 
        const {addToCart,productInCart} = this.props;
        var isDuplicate = false;
        if(productInCart.length > 0 ){
            for(var i=0;i<productInCart.length;i++){              
                if(productInCart[i].productId === product.productId){
                    isDuplicate = true;
                    event.target.style.backgroundColor ='grey';
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
            "userId": 1
          }
       // getProduct(id);
       if(!isDuplicate){
        addToCart(cartItem);
        event.target.style.backgroundColor ='grey';
        
       } 
        
    }
   
    render(){
        //const {Plants} = Products.PlantsList;
        var arr = []
        const {getProduct,getPageUrl,pageUrl,pageId,products,
            resetProducts,getProductDetailUrl,productDetUrl,productId,productInCart} = this.props
        return (
            <ImageGrid>
                    
                    {products.map((list,key) =>

                    
                
                    <div style={{padding:'10px'}} key={key}>
                     <Shadow >
                    <Link to={`/${list.navigageTo}`} onClick={()=>getProduct(list.productId)} >
                     <Poster onClick={()=>getProductDetailUrl(list.productId,list.navigageTo)} style={{padding: '25px'}} src={`/${list.productImageList[0].imageUrl}`} alt='no image'/>
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
                     name={list.quantity === 0 ? 'Sold Out' :'Add To Cart'} value={list.quantity === 0 ? 'Sold Out' :'Add To Cart'} 
                     title={list.quantity === 0 ? 'Stocks Not Available' :'Add To Cart'} 
                     key={key} onClick={(event)=>this.addToCartFromAll(event,list)} 
                      className="addCartButton" 
                      
                      style = {{backgroundColor:  list.quantity ===0 ?'grey':'#058541'}}
                     // style = {{backgroundColor:  arr.length > 0 ?'grey':'#058541'}}
                      /> 

                     
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
    productId :  state.productStore.productId,
    productInCart : state.productStore.productInCart

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
    resetProductItem,
    showAllProductsInCart
    
  },dispatch)
  
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(PlantsList));

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


