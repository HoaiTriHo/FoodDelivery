import { bounce } from 'react-native/Libraries/Animated/src/Easing';
import {
    DISABLED_BUTTON_CANCEL,
    ADD_ITEM_CART,
    DELETE_ITEM,
    REMOVE_CART,
    UPDATE_AMOUNT_ITEM,
    OVERLAY,
    CONFIRM_CART
}
    from '../type/shoppingCartType';


export const disabledButtonCancel = (disabled) => (
    {
        type: DISABLED_BUTTON_CANCEL,
        payload: disabled
    }
)
export const addItemToCart = (idFood, idMerchant, idUser, nameFood, price, numberFood, address, phone, nameUser, nameMerchant) => (
    {
        type: ADD_ITEM_CART,
        payload: {
            idMerchant,
            nameMerchant,
            address,
            idUser,
            phone,
            nameUser,
            menu: {
                idFood,
                nameFood,
                price,
                numberFood
            }
        }
    }
)

//DELETE ITEM IN CART
export const deleteItem = (menu, price, numberFood)=>(
    {
        type: DELETE_ITEM,
        payload:{
            menu,
            price,
            numberFood
        }
    }
)
//Remove the cart
export const removeCart = ()=>(
    {
        type: REMOVE_CART
    }
)
//Update item in the cart
export const updateAmountItem = (menu, numberItem, price)=>(
    {
        type: UPDATE_AMOUNT_ITEM,
        payload:{
            menu,
            numberItem,
            price
        }
    }
)
//change background when modal appears
export const changBackground = (boolean)=>(
    {
        type: OVERLAY,
        payload: boolean
    }
)
export const confirmCart = (isConfirmCart)=>(
    {
        type: CONFIRM_CART,
        payload: isConfirmCart
    }
)


