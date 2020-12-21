import merchantReducer from './mertchantReducer';
import userReducer from './userReducer';
import shoppingCartReducer from './shoppingCartReducer';
import riderReducer from './rider';
import { combineReducers } from 'redux'

const rootReducers = combineReducers({
   merchantReducer,
   userReducer,
   shoppingCartReducer,
   riderReducer
});
export default rootReducers;
