export const APP_URL = 'http://localhost:8090'
export const PAYMENT_URL = 'http://localhost:8098'

export const PRODUCT_SEARCH  = "PRODUCT_SEARCH";
export const SHOW_ALL_PRODUCT = "SHOW_ALL_PRODUCT"; 
export const SHOW_PRODUCT = "SHOW_PRODUCT";
export const SHOW_ALL_CATEGORY = "SHOW_ALL_CATEGORY";
// prouduct descripton on ProductDetail
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const BUY_NOW = "BUY_NOW";
// CART detail
export const CART_ITEM_REMOVE = "CART_ITEM_REMOVE";
export const BACK = "BACK"
export const SHOW_PRODUCTS_IN_CART = 'SHOW_PRODUCTS_IN_CART';
export const UPDATE_CART_ITEM_QUANTITY = 'UPDATE_CART_ITEM_QUANTITY';
export const SHOW_ORDERS = 'SHOW_ORDERS';
export const GET_PRODUCT_NAMES_SEARCH = 'GET_PRODUCT_NAMES_SEARCH';

// user details constants

export const SIGNIN = 'SIGNIN';
export const SIGNUP = 'SIGNUP';
export const USERINFO = 'USERINFO';
export const VERIFYOTP = 'VERIFYOTP';
export const PAGE_URL = 'PAGE_URL';
export const SHOW_PRODUCTS_BY_CATEGORY = "SHOW_PRODUCTS_BY_CATEGORY";
export const RESET_PRODUCTS = "RESET_PRODUCTS";
export const PRODUCT_DET_URL = 'PRODUCT_DET_URL';
export const SHOW_PRODUCTS_BY_CATNAME = "SHOW_PRODUCTS_BY_CATNAME";
export const SHOW_TOP_PRODUCTS = "SHOW_TOP_PRODUCTS";
export const RESET_PRODUCTITEM ="RESET_PRODUCTITEM";
export const RESET_CATEGORIES = 'RESET_CATEGORIES';
export const ADD_ORDERS = 'ADD_ORDERS';

export const RESET_LOGININFO ="RESET_LOGININFO";
export const RESET_SIGNUP = 'RESET_SIGNUP';
export const RESET_USERDETAIL = 'RESET_USERDETAIL';
export const RESET_PRODUCTCART = 'RESET_PRODUCTCART';


//Cart Action URLs
export const SHOW_ALL_PRODUCT_IN_CART_URL = APP_URL+'/cart/products/';
export const UPDATE_CART_ITEM_QUANTITY_URL = APP_URL+'/cart/product/update/';
export const REMOVE_CART_ITEM_QUANTITY_URL = APP_URL+'/cart/product/remove/';
export const ADD_ORDER_URL = PAYMENT_URL+'/payment/add/';
export const SHOW_ORDERS_URL = APP_URL+'/order/products';
export const SHOW_USERS_URL = APP_URL+"/Users/";
export const GET_PRODUCT_NAMES_SEARCH_URL = APP_URL+"/products/names"
