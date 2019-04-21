import {combineReducers} from 'redux'

import productStore from './reducers/productReducer';
import loginStore from './reducers/loginReducer'
const rootReducer =combineReducers({
    productStore ,
    loginStore
});

export default rootReducer;