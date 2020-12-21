export const validation = {
    email:{
        fail:'Please enter valid email',
        success:'Valid email'
    },
    phone:{
        isNumber:'You must enter number',
        fail:'Please enter valid nunmber',
        length:'Enter more than 10',
        success:'Valid number'
    },
    fullname:{
        fail:'Please enter valid name',
        length: 'The name must be longer',
        success: 'Name valid'
    },
    password:{
        fail: 'The password must be longer',
        success: 'Valid password',
        wrong:'Password is not correct'
    },
    isEmpty:'Please fill out the field',
    statusButton:'Email or password is wrong',
    isPhone:"Please add your phone number in 'Your Profile' to order food"

}

//Start valid email
export const validEmail=(email)=>{

    if(email == '')
        return true;
    let atposition = email.indexOf('@'),
        dotposition = email.lastIndexOf('.');
    //search '@' and '.' to valid email
    let validEmail = atposition < 1 || dotposition < (atposition + 2),
    validLengthEmail = (dotposition + 2) >= email.length;

    if(validEmail || validLengthEmail){
        return false;
    }
    else{
        return true;
    }
}
export const validPhone = (_phone)=>{
    if(_phone=='')
        return false;
    let phone = Number.parseInt(_phone),
        isNumber = _phone / 100,
        isValidNumber = (phone < 0) || (_phone.length) < 10;
    
    if(isNumber){
        if(isValidNumber){
            return false;
        }
        else{
            return true
        }
    }
    else{
        return false;
    }
}
export const validFullname = (fullname)=>{

    if(fullname == '')
        return true;

    let format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    let isvalidName = format.test(fullname),
        isValidLengthName = fullname.length < 6;

    if(isvalidName){
        return false;
    }
    else{
        if(isValidLengthName){
            return false;
        }
        else{
            return true;
        }
    }
}
export const validPassword = (password)=>{

    if(password =='' ||password ==null)
        return false;
    let isLenthPassword = password.length < 8;
    if (isLenthPassword){
        return false;
    }
    else{
        return true;
    }
}

