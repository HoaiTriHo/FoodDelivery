import {
    DISABLED_BUTTON_CANCEL,
    ADD_ITEM_CART,
    DELETE_ITEM,
    REMOVE_CART,
    UPDATE_AMOUNT_ITEM,
    OVERLAY,
    CONFIRM_CART
} from '../type/shoppingCartType';
 
//Shopping cart reducer
const shoppingCart = {
    isButtonCancelNone: false,
    numberOfItem: 0,
    totalPrice: 0,
    idMerchantCart: null,
    nameMerchantCart: null,

    menu: [],
    address: null,
    phone: null,
    idUser: null,
    nameUser:null,

    shipFee: 20000,
    overlay: false,

    confirmCart: false
}
const shoppingCartReducer = (state = shoppingCart, action) => {
    if (action.type === DISABLED_BUTTON_CANCEL)
        return {
            ...state,
            buttonCancelNone: action.payload
        }
    if (action.type === ADD_ITEM_CART) {
        const{
            idMerchant,
            nameMerchant,
            address,
            menu,
            idUser,
            phone,
            nameUser
        } = action.payload;
        return {
            ...state,
            idMerchantCart:idMerchant,
            nameMerchantCart:nameMerchant,
            address : address,
            idUser: idUser,
            phone: phone,
            nameUser:nameUser,
            menu: [...state.menu, menu],
            numberOfItem: state.numberOfItem + menu.numberFood,
            totalPrice: state.totalPrice + (parseFloat(menu.price) * parseFloat(menu.numberFood))
        }
    }
    if(action.type === DELETE_ITEM){
        return{
            ...state,
            menu: action.payload.menu,
            totalPrice: state.totalPrice - (parseFloat(action.payload.price) * parseFloat(action.payload.numberFood)),
            numberOfItem: state.numberOfItem - parseFloat(action.payload.numberFood)
        }
    }
    if(action.type === REMOVE_CART)
        return{
            ...shoppingCart
        }
    if(action.type === UPDATE_AMOUNT_ITEM)
        return{
            ...state,
            menu:action.payload.menu,
            numberOfItem: state.numberOfItem + parseFloat(action.payload.numberItem),
            totalPrice: state.totalPrice + (parseFloat(action.payload.price) * parseFloat(action.payload.numberItem))
        }
    if(action.type === OVERLAY)
        return{
            ...state,
            overlay: action.payload
        }
    if(action.type === CONFIRM_CART)
        return{
            ...state,
            confirmCart: action.payload
        }
    return state;
}


export default shoppingCartReducer;