
import { APP_URL,SHOW_ALL_PRODUCT_IN_CART_URL,
    UPDATE_CART_ITEM_QUANTITY_URL,
    REMOVE_CART_ITEM_QUANTITY_URL,ADD_ORDER_URL,SHOW_ORDERS_URL, SHOW_ORDERS } from "../Action_Constants";

export function getAllCategories() {

    return async function(dispatch){
        console.log("getAllCategories coming:::::::::::::")
        const res = await fetch(`${APP_URL}/categories`);
        const categories = await res.json();
        console.log("categories :::::::::::::"+categories)
        return dispatch({
            type : 'SHOW_ALL_CATEGORY',
             data: categories  
        })
    }

}
export function getProduct(id){
    
    return async function(dispatch){
        console.log('product ID ############################'+id);
        const res = await fetch(`${APP_URL}/products/${id}`);
        const product = await res.json();
        
        return dispatch({
            type : 'SHOW_PRODUCT',
             data: product  
        })
    }
}
export function showAllProductsInCart(userId){
    userId = 1;
    return async function(dispatch){                
        const res = await fetch(SHOW_ALL_PRODUCT_IN_CART_URL+'/'+userId);
        const cartProducts = await res.json();        
        console.log('showAllProductsInCart');
        console.log(cartProducts)
        
        return dispatch({
            type : 'SHOW_PRODUCTS_IN_CART',
            data: cartProducts
        })
    }
}
export function updateProductQuantity(cartItem){
    //userId = 1;
    console.log("updateProductQuantity::::::::"+JSON.stringify(cartItem))
    const settings = {
        method: 'PUT', // or 'PUT'
        body: JSON.stringify(cartItem), // data can be `string` or {object}!
        headers:{
          'Content-Type': 'application/json'
        }
    };

    return async function(dispatch){                
        const res = await fetch(UPDATE_CART_ITEM_QUANTITY_URL,settings);
        const cartProducts = await res.json();  
        console.log("cartProducts:::::::"+JSON.stringify(cartProducts));
        if(!cartProducts || cartProducts.message !== "success"){
            alert('Could not increase/decrease product quantity');
        }
        return dispatch({
            type : 'UPDATE_CART_ITEM_QUANTITY',
            data: cartItem//cartProducts
        })
    }
}
export function addToCart(product){

    const settings = {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(product), // data can be `string` or {object}!
        headers:{
          'Content-Type': 'application/json'
        }
    };
   
    return async function(dispatch){
        // this.forceUpdate();
        //const res = await fetch(`${APP_URL}/cart/product/add/`,settings);
        const res = await fetch(`http://localhost:8090/cart/product/add/`,settings);
        const cart = await res.json();
        console.log('ADD_TO_CART ++++++++++')
        console.log(JSON.stringify(cart))
        return dispatch({
            type : 'ADD_TO_CART',
            data: cart
        })
    }
}
export function removeFromCart(cartItem){
    console.log("removeFromCart::action::::::"+JSON.stringify(cartItem))
    const settings = {
        method: 'DELETE', // or 'PUT'
       // body: cartItem.cartId, // data can be `string` or {object}!
        headers:{
          'Content-Type': 'application/json'
        }
    };

    return async function(dispatch){                
        const res = await fetch(REMOVE_CART_ITEM_QUANTITY_URL+`${cartItem.cartId}`,settings);
        const cartProducts = await res.json();  
        console.log("removeFromCart::Response:::::::"+JSON.stringify(cartProducts));
        if(!cartProducts || cartProducts.message !== "success"){
            alert('Could not remove the item from cart');
        }
        return dispatch({
            type : 'REMOVE_FROM_CART',
            data: cartItem
        })
    }
}
export function buyNow(){
    return function(dispatch){
        return dispatch({
            type : 'BUY_NOW'            
        })
    }
}


export function signIn(){
    return function(dispatch){
        return dispatch({
            type : 'SIGNIN'            
        })
    }
}

export function getPageUrl(id, pageUrl) {
    return function(dispatch) {
        console.log('getPageUrl ................')
        return dispatch({
            type : 'PAGE_URL',
            data : {'pageUrl':pageUrl,
                    'pageId':id }
        })
    }
}

export function getProductDetailUrl(id, url) {
    return function(dispatch) {
        console.log("getProductDetailUrl coming:::::::::::::")
        return dispatch({
            type : 'PRODUCT_DET_URL',
            data : {'productDetUrl':url,
                    'productId':id }
        })
    }
}

export function getProductsByCategory(id) {
    return async function(dispatch) {
        
        const res = await fetch(`${APP_URL}/category/products/${id}`);
        const products = await res.json();
        let prodRes = products;
        console.log('calling getProductsByCategory')
        console.log(prodRes)
       // const products1 =  products[0];
       // console.log(products1)
        return dispatch({
            type : 'SHOW_PRODUCTS_BY_CATEGORY',
            data : prodRes
        })

    }
    
}

export function getAllProductsByCateName(name) {

    return async function(dispatch) {
        const res = await fetch(`${APP_URL}/showAllProducts/${name}`);
        const products = await res.json();
       // let prodRes = products[0].productResList;
       let prodRes = []
       for(var i = 0; i<products.length; i++) {
           for(var j =0; j<products[i].productResList.length; j++) {
                prodRes.push(products[i].productResList[j])
           }
       }
       console.log(prodRes)
        return dispatch({
            type: 'SHOW_PRODUCTS_BY_CATNAME',
            data:prodRes
        })
    }
}

export function getTopProducts(name) {

    return async function(dispatch){
        console.log('getTopProducts -------------->');
        const res = await fetch(`${APP_URL}/showTopProducts/${name}`);
        const products = await res.json();
        console.log(products)
        return dispatch({
            type: 'SHOW_TOP_PRODUCTS',
            data: products
        })

    }

}

export function resetCategories() {
    console.log('resetCategories -------------->');
    return {
        type:'RESET_CATEGORIES'
    }
}

export function resetProducts(){
    return {
        type : 'RESET_PRODUCTS'
    }
}

export function resetProductItem(){
    return {
        type : 'RESET_PRODUCTITEM'
    }
}

export function addToOrders(products) {

    const settings = {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(products), // data can be `string` or {object}!
        headers:{
          'Content-Type': 'application/json'
        }
    };
   
    return async function(dispatch){
        // this.forceUpdate();
        const res = await fetch(`http://localhost:8090/order/new/`,settings);
        const orders = await res.json();
        console.log('ADD_ORDER_URL ++++++++++')
        console.log(JSON.stringify(orders))
        return dispatch({
            type : 'ADD_ORDERS',
            data: orders
        })
        
        
    }

}

export function getAllOrders(userId){
    userId = 1;

    return async function(dispatch){                
        const res = await fetch(SHOW_ORDERS_URL+'/'+userId);
        const orders = await res.json();        
        console.log('SHOW_ORDERS_URL');
        console.log(orders)
        
        return dispatch({
            type : 'SHOW_ORDERS',
            data: orders
        })
    }

}
