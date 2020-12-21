import {
    GET_INFOR_MERCHANT,
    GET_MENU_MERCHANT,
}
    from '../type/merchantType';

export const getInfoMerchant = (id, name, distance, address, category) => (
    {
        type: GET_INFOR_MERCHANT,
        payload: {
            id,
            name,
            distance,
            address,
            category
        }
    }
)
export const getMenuMerchant = (id, image, name, price, description) => (
    {
        type: GET_MENU_MERCHANT,
        payload: {
            id,
            image,
            name,
            price,
            description
        }
    }
)




