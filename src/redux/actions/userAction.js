import {
    GET_POSITION,
    LOGOUT,
    LOGIN,
    SAVE_INFOR_USER,
    UPDATE_INFOR_USER,
    UPDATE_USER
}
    from '../type/userType';

export const getPosition = (address, latitude, longitude, isPermission) => (
    {
        type: GET_POSITION,
        payload: {
            address,
            latitude,
            longitude,
            isPermission
        }
    }
)
export const logOut = () => (
    {
        type: LOGOUT
    }
)
export const logIn = () => (
    {
        type: LOGIN
    }
)
//Save user information
export const saveUserInfor = (id, name, email, phone, avarta, login_social)=>(
    {
        type: SAVE_INFOR_USER,
        payload:{
            id, 
            name, 
            email, 
            phone,
            avarta, 
            login_social
        }
    }
)
//Update user information
export const updateUserInfor = (email, name, phone)=>(
    {
        type: UPDATE_USER,
        payload:{
            email, 
            name, 
            phone
        }
    }
)



