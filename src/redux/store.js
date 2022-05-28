import { createStore, compose, applyMiddleware, combineReducers } from "redux";
// import data from'./''
import thunk from 'redux-thunk'
import {cartReducer} from './reducers/cartReducers';
import productListReducer from './reducers/productReducers'
import productDetails from'./reducers/productsDetailsReducer'
import {UserSigninReducer,UserRegisterReducer} from "./reducers/userReducer";
const initialState = {
     userSignin:{
          cartItems:localStorage.getItem('userInfo') ?
          JSON.parse(localStorage.getItem('userInfo')):[]
     }
};

const reducer = combineReducers( {
     productList: productListReducer,
     productDetails:productDetails,
     cart:cartReducer,
     userSignin:UserSigninReducer,
     userRegister:UserRegisterReducer
});
const composeEnhancer= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer,
     initialState,
     composeEnhancer(applyMiddleware(thunk)));

export default store;
