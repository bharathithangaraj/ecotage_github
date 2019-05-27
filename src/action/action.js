import { func } from "prop-types";

// export function getAllProducts(){
//     console.log("getall despath");
//     return async function(dispatch){
//         let a = await jsonData;
//         return dispatch({
//             type : 'SHOW_ALL_PRODUCT',
//             data : a
//         })
//     }
// // }

export function getAllCategories() {

    return async function(dispatch){
        console.log("getAllCategories coming:::::::::::::")
        const res = await fetch(`http://localhost:8080/showAllCategory`);
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
        const res = await fetch(`http://localhost:8080/showProduct/${id}`);
        const product = await res.json();
        
        return dispatch({
            type : 'SHOW_PRODUCT',
             data: product  
        })
    }
}
export function addToCart(id){
   
    return async function(dispatch){
        // this.forceUpdate();
        const res = await fetch(`http://localhost:8080/showProduct/${id}`);
        const product = await res.json();
        return dispatch({
            type : 'ADD_TO_CART',
            data: product
        })
    }
}
export function removeFromCart(productId){
    return function(dispatch){
        return dispatch({
            type : 'REMOVE_FROM_CART',
            data : productId
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
        
        const res = await fetch(`http://localhost:8080/showCategory/${id}`);
        const products = await res.json();
        let prodRes = products[0].productResList;
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
        const res = await fetch(`http://localhost:8080/showAllProducts/${name}`);
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
        const res = await fetch(`http://localhost:8080/showTopProducts/${name}`);
        const products = await res.json();
        console.log(products)
        return dispatch({
            type: 'SHOW_TOP_PRODUCTS',
            data: products
        })

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