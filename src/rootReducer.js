import {combineReducers} from 'redux'

import productStore from './reducer';

const rootReducer =combineReducers({
    productStore
});

export default rootReducer;