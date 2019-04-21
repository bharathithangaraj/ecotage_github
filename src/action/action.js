
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
export function getProduct(id,product){
    return async function(dispatch){
        return dispatch({
            type : 'SHOW_PRODUCT',
             data: product  
        })
    }
}
export function addToCart(){
    return function(dispatch){
        return dispatch({
            type : 'ADD_TO_CART'
        })
    }
}
export function removeFromCart(prodct){
    return function(dispatch){
        return dispatch({
            type : 'REMOVE_FROM_CART',
            data : prodct
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