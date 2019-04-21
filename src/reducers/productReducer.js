
import {SHOW_ALL_PRODUCT,SHOW_PRODUCT,PRODUCT_SEARCH,ADD_TO_CART,REMOVE_FROM_CART,BUY_NOW,CART_ITEM_REMOVE} from '../Action_Constants';

const ecoteageState = {
    // productsList : [],
    productItem : {},
    filterProducts : [],
    // isProductListLoaded : false,
    // directBuyProduct : [],
    productInCart : [],
    loginInfo:{}
    
}

export default function (state = ecoteageState , action) {
    const {type,data} = action
    console.log("called here&&&&&&&&&&&:"+JSON.stringify(data))
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
        case ADD_TO_CART :    
        console.log("from REducer:"+JSON.stringify(state.productItem))        
            state.productInCart.push(state.productItem)
        return {
            ...state,
            productInCart : state.productInCart
        }
        case REMOVE_FROM_CART :            
            state.productInCart.pop(data)
        return {
            ...state,
            productInCart : state.productInCart
        }
        case BUY_NOW : 
        return {
            ...state,
            directBuyProduct : data,
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
        
       default :
        return state
    }
}