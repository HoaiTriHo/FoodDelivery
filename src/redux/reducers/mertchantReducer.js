import {
    GET_INFOR_MERCHANT,
    GET_MENU_MERCHANT,
} from '../type/merchantType';

const merchant = {
    idMerchant: 0,
    nameMerchant: null,
    distance: 0,
    address: null,
    category: null,

    menuMerchant: {
        idFood: 0,
        image: null,
        nameFood: null,
        price: 0,
        description: null
    }
}
const merchantReducer = (state = merchant, action) => {
    if (action.type === GET_INFOR_MERCHANT) {
        const { id, name, distance, address, category } = action.payload
        return {
            idMerchant: id,
            nameMerchant: name,
            distance: distance,
            address: address,
            category: category
        }
    } 
    if (action.type === GET_MENU_MERCHANT) {
        const { id, image, name, price, description} = action.payload;
        return {
            ...state,
            menuMerchant: {
                idFood: id,
                image: image,
                nameFood: name,
                price: price,
                description: description
            }
        }
    }
    return state;
}

export default merchantReducer;