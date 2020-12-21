import {
    GET_POSITION,
    LOGOUT,
    LOGIN,
    SAVE_INFOR_USER,
    UPDATE_INFOR_USER,
    UPDATE_USER
} from '../type/userType';

const userInformation = {
    address: ' Give me your location',
    coordinates: {
        latitude: null,
        longitude: null,
        latitudeDelta: 0.0022,
        longitudeDelta: 0.0025
    },
    permission: false,
    isLogIn: false,

    id: null,
    name: null,
    email: null,
    phone: null,
    avarta: null,
    isLoginSocial: false
}
const userReducer = (state = userInformation, action) => {
    if (action.type === GET_POSITION) {
        const { address, latitude, longitude, isPermission } = action.payload;
        return {
            ...state,
            address: address,
            coordinates: {
                ...userInformation.coordinates,
                latitude: latitude,
                longitude: longitude
            },
            permission: isPermission,
        }
    }

    if (action.type === LOGIN)
        return {
            isLogIn: true
        }
    if (action.type === LOGOUT)
        return {
            isLogin: false
        }
    if (action.type === SAVE_INFOR_USER) {
        const { id, name, email, phone, avarta, login_social } = action.payload;
        return {
           ...state,
            id: id,
            name: name,
            email: email,
            phone: phone,
            avarta: avarta,
            isLoginSocial: login_social
        }
    }

    if (action.type === UPDATE_INFOR_USER) {
        const { email, name, phone } = action.payload;
        return {
            // ...state,
            // name: name,
            // email: email,
            // phone: phone
            ...userInformation
        }
    }
    if(action.type === UPDATE_USER)
        return{
            ...state,
            phone: action.payload.phone,
            email : action.payload.email,
            name: action.payload.name
        }
    return state;
}

export default userReducer;