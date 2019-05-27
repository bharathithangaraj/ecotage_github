
import {SHOW_ALL_PRODUCT,SHOW_PRODUCT,PRODUCT_SEARCH,ADD_TO_CART,REMOVE_FROM_CART,
    BUY_NOW,CART_ITEM_REMOVE,SHOW_ALL_CATEGORY,PAGE_URL,
    SHOW_PRODUCTS_BY_CATEGORY,RESET_PRODUCTS,PRODUCT_DET_URL,SHOW_PRODUCTS_BY_CATNAME,
    SHOW_TOP_PRODUCTS, RESET_PRODUCTITEM} from '../Action_Constants';

const ecoteageState = {
    // productsList : [],
    productItem : {},
    filterProducts : [],
    // isProductListLoaded : false,
    // directBuyProduct : [],
    productInCart : [],
    loginInfo:{},
    categories:[],
    pageUrl:{},
    pageId:{},
    products : [],
    productDetUrl : {},
    productId : {},
    cartCount : 0

    
}

export default function (state = ecoteageState , action) {
    const {type,data} = action
    // console.log("called here&&&&&&&&&&&:"+JSON.stringify(data))
    switch(type){
        case SHOW_ALL_PRODUCT:
        return {
            ...state,
            // productsList : data,
            // isProductListLoaded : true
        }
        case SHOW_PRODUCT :
        return {
            ...state,
            productItem : data,
        }
        case PRODUCT_SEARCH :
        return {
            ...state,
            filterProducts : data 
        }
        case SHOW_ALL_CATEGORY :
        return {
            ...state,
            categories : data
        }
        case ADD_TO_CART :    
      //  console.log("from REducer:"+JSON.stringify(state.productItem))        
           // state.productInCart.push(state.productItem)
           state.productInCart.push(data)
        return {
            ...state,
            productInCart : state.productInCart,
            cartCount : state.cartCount+1
        }
        case REMOVE_FROM_CART :            
            state.productInCart.pop(data)
        return {
            ...state,
            productInCart : state.productInCart,
            cartCount : state.cartCount-1
        }
        case BUY_NOW : 
        state.productInCart.push(state.productItem)
        return {
            ...state,
            directBuyProduct :state.productInCart,
        }
        case CART_ITEM_REMOVE : 
        return {
            ...state
        }
        case "SIGNIN" : 
        return {
            loginInfo:data,
            ...state
        }
        case PAGE_URL :
        return {
            ...state,
            pageUrl : data.pageUrl,
            pageId: data.pageId
        }
        case SHOW_PRODUCTS_BY_CATEGORY : 
        return {
            ...state,
            products : data
        }
        case SHOW_PRODUCTS_BY_CATNAME : 
        return {
            ...state,
            products : data
        }

        case RESET_PRODUCTS :
            return {
                ...state,
                products : []
            }
        case RESET_PRODUCTITEM:
            return {
                ...state,
                productItem:{}
            }
        
        case PRODUCT_DET_URL:
            return {
                ...state,
                productDetUrl : data.productDetUrl,
                productId: data.productId
            }
        case SHOW_TOP_PRODUCTS:
            return {
                ...state,
                products: data
            }
        
       default :
        return state
    }
}