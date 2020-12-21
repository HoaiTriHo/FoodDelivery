import { Alert } from "react-native"

//Send data info user regis to db
export const sendDataToServer = (apiAddress, email, phone, fullname, password, id, picture) => {
    return fetch(apiAddress, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: email,
            phone: phone,
            fullname: fullname,
            password: password,
            id: id,
            picture: picture
        })
    })
}
export const saveInforFBToDB = (apiAddress, email, name, id, picture) => {
    return fetch(apiAddress, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: email,
            fullname: name,
            id: id,
            picture: picture
        })
    })
}
export const checkDataLogin = (apiAddress, email, password) => {
    return fetch(apiAddress, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: email,
            password: password,
        })
    })
}
export const sendTokenToServer = (apiAddress, token) => {
    return fetch(apiAddress, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    })
}
export const getDataFromToken = (apiAddress, token) => {
    return fetch(apiAddress + token);
}
export const changePassword = (apiAddress, token, currentPassword, newPassword) => {
    return fetch(apiAddress, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify({
            currentPassword: currentPassword,
            newPassword: newPassword
        })
    })
}
export const getMerchant = (apiAddress, token, lat, lng) => {
    return fetch(apiAddress, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify({
            location: [lat, lng]
        })
    })
}
export const updateUser = (apiAddress, token, name, email, phone) => {
    return fetch(apiAddress, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            fullname: name,
            email: email,
            phone: phone
        })
    })
}
export const getAddress = async (lat, lng) => {
    try {
        const responseAddress = await fetch('https://maps.googleapis.com/maps/api/geocode/json?address=' + lat + ',' + lng + '&key=' + 'AIzaSyBQeoXvCkcv7FolXpk7A_nhV-oYm9xmljw');
        const responseAddressJson = await responseAddress.json();

        return responseAddressJson.results[0].formatted_address;
    }
    catch (error) {
        Alert.alert(error.toString());
    }
}
export const loadingMerchant = async (url)=>{
    try{
        const responseMerchant = await fetch('https://5fb744d48e07f00016642985.mockapi.io/api/allMerchants'+url);
        const merchantJson = await responseMerchant.json();

        return merchantJson;
    }
    catch(error){
        Alert.alert(error.toString());
    }
}